<template>
  <v-app :class="$i18n.locale">
    <SemiHeader />
    <div class="payment-page">
      <div class="container">
        <form
          method="post"
          style="display: flex; flex-direction: column; gap: 15px"
        >
          <div class="group">
            <div class="input-group">
              <label>{{ $t("card-holder") }}</label>
              <input
                class="input"
                name="card-holder"
                v-model="form.cardHolder"
                required
              />
            </div>
            <div class="input-group">
              <label>{{ $t("card-number") }}</label>
              <the-mask
                mask="####-####-####-####"
                type="text"
                masked="false"
                class="input"
                name="card-number"
                v-model="form.cardNumber"
                maxlength="20"
                minlength="20"
                required
              />
            </div>
          </div>
          <div class="group">
            <div class="input-group">
              <label>{{ $t("expire-date") }}</label>
              <div style="display: flex; gap: 5px">
                <select
                  name="month"
                  class="select-month"
                  v-model="form.expireMonth"
                  required
                >
                  <option value="" selected hidden disabled>
                    {{ $t("month") }}
                  </option>
                  <option v-for="n in 12" :key="n">
                    {{ ("0" + n).slice(-2) }}
                  </option>
                </select>
                <select
                  name="year"
                  class="select-year"
                  v-model="form.expireYear"
                  required
                >
                  <option value="" selected hidden disabled>
                    {{ $t("year") }}
                  </option>
                  <option v-for="year in years" :key="year">
                    {{ year }}
                  </option>
                </select>
              </div>
            </div>
            <div class="input-group">
              <label>{{ $t("cvv") }}</label>
              <div style="display: flex; gap: 10px">
                <input
                  class="input"
                  name="cvv"
                  v-model="form.cvv"
                  maxlength="4"
                  required
                />
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="grey"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      style="font-size: 19px"
                    >
                      mdi-information
                    </v-icon>
                  </template>
                  <span>
                    {{ $t("cvv-is-the-last-three-digits") }}
                  </span>
                </v-tooltip>
              </div>
            </div>
          </div>
          <div class="total-amount">
            <span class="title">{{ $t("total") }}</span>
            <span class="price">{{ product.share_price }} {{ $t("usd") }}</span>
          </div>
          <button class="confirm" @click.prevent="confirmPayment">
            {{ $t("confirm") }}
          </button>
        </form>
      </div>
    </div>

    <Footer />
  </v-app>
</template>
<script>
import moment from "moment";
export default {
  name: "payment",
  middleware: ["auth", "checkPhone", "checkPayment", "confirmSubscribe"],
  data() {
    let years = [];
    for (let index = moment().year(); index <= moment().year() + 5; index++) {
      years.push(index);
    }
    return {
      form: {
        product_id: this.$route.params.id,
        cardHolder: "",
        cardNumber: "",
        expireMonth: "",
        expireYear: "",
        cvv: "",
      },
      param: this.$route.params.id,
      token: this.$auth.user.token,
      months: moment.months(),
      year: moment().year(),
      addFiveYears: moment().year() + 5,
      years,
      product: [],
    };
  },
  async fetch() {
    this.product = await this.$axios.$get(
      `${process.env.VUE_APP_API_URL}/product/${this.param}`
    );
  },
  methods: {
    confirmPayment() {
      this.$axios
        .$post(`${process.env.VUE_APP_API_URL}/payment/offer`, this.form, {
          headers: {
            Authorization: this.token,
            "x-api-key": process.env.VUE_APP_API_KEY,
          },
        })
        .then((result) => this.$router.push("/confirm-payment"))
        .catch((err) => {});
    },
  },
};
</script>
<style>
@import "~/assets/scss/style.css";
</style>
