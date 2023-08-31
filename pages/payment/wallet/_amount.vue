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
              <input class="input" name="card-holder" v-model="cardHolder" />
            </div>
            <div class="input-group">
              <label>{{ $t("card-number") }}</label>
              <input
                class="input"
                name="card-number"
                v-model="cardNumber"
                inputmode="numeric"
                pattern="[0-9]*"
                maxlength="19"
              />
            </div>
          </div>
          <div class="group">
            <div class="input-group">
              <label>{{ $t("expire-date") }}</label>
              <div style="display: flex; gap: 5px">
                <select name="month" class="select-month" v-model="expireYear">
                  <option value="" selected hidden disabled>
                    {{ $t("month") }}
                  </option>
                  <option v-for="n in 12" :key="n">
                    {{ ("0" + n).slice(-2) }}
                  </option>
                </select>
                <select name="year" class="select-year" v-model="expireYear">
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
                <input class="input" name="cvv" v-model="cvv" maxlength="4" />
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
            <span class="price">{{ amount }} {{ $t("usd") }}</span>
          </div>
          <NuxtLink
            :to="{ name: 'confirm-payment', params: { status: 'success' } }"
          >
            <button type="submit" class="confirm">{{ $t("confirm") }}</button>
          </NuxtLink>
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
  middleware: ["auth", "checkPhone", "checkPayment"],
  data() {
    let years = [];
    for (let index = moment().year(); index <= moment().year() + 5; index++) {
      years.push(index);
    }
    return {
      amount: this.$route.params.amount,
      cardHolder: "",
      cardNumber: "",
      expireMonth: "",
      expireYear: "",
      cvv: "",
      months: moment.months(),
      year: moment().year(),
      addFiveYears: moment().year() + 5,
      years,
    };
  },
  watch: {
    cardNumber() {
      let realNumber = this.cardNumber.replace(/-/gi, "");
      let dashedNumber = realNumber.match(/.{1,4}/g);
      this.cardNumber = dashedNumber.join("-");
    },
  },
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>
<style>
@import "~/assets/scss/style.css";
</style>
