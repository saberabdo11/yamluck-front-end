<template>
  <v-app :class="$i18n.locale">
    <DashboardHeader />
    <div class="pay-with-yamluck-page">
      <div class="container" style="margin-top: 5%; margin-bottom: 5%">
        <NuxtLink :to="`/product/${product.id}`">
          <div class="product-card">
            <div class="image">
              <img
                :src="`${storageURL}/products/product_id_${product.id}/${product.pic_one}`"
              />
            </div>
            <div class="info">
              <h2>{{ product[`title_${locale}`] }}</h2>
              <span style="color: #d1a125; font-weight: bold">
                {{ product.price }} $
              </span>
              <span class="subs">
                <v-icon>mdi-account-multiple</v-icon>
                {{ product.curr_subs }} / {{ product.max_subs }}
              </span>
            </div>
          </div>
        </NuxtLink>
        <br /><br />
        <div style="display: flex; flex-direction: column; gap: 5px">
          <div class="total">
            <span class="title">{{ $t("subtotal") }}</span>
            <span class="price">{{ product.price }} $</span>
          </div>
          <div class="total-amount">
            <span class="title">{{ $t("wallet-balance") }}</span>
            <span class="price"
              >{{ balance }}
              $
            </span>
          </div>
        </div>
        <button
          type="submit"
          class="confirm"
          @click="confirmPayment"
          v-if="balance >= parseInt(product.price)"
        >
          {{ $t("confirm") }}
        </button>
        <v-alert type="error" style="margin-top: 3%" v-else>
          {{ $t("your-balance-is-not-enough") }},
          <NuxtLink to="/wallet" style="text-decoration: underline">
            {{ $t("go-to-wallet") }}
          </NuxtLink>
        </v-alert>
      </div>
    </div>
    <Footer />
  </v-app>
</template>
<script>
export default {
  name: "pay-with-yamluck",
  middleware: ["auth", "checkPayment", "checkPhone", "confirmSubscribe"],
  data() {
    return {
      balance: null,
      productID: this.$route.params.id,
      storageURL: process.env.VUE_APP_STORAGE_URL,
      product: [],
      locale: this.$i18n.locale,
      token: this.$auth.user.token,
    };
  },
  created() {
    this.$axios
      .$get(`${process.env.VUE_APP_API_URL}/product/${this.productID}`)
      .then((res) => (this.product = res))
      .catch((err) => console.log(err));
    this.$axios
      .$post(`${process.env.VUE_APP_API_URL}/wallet/amount`, {
        headers: {
          Authorization: this.token,
        },
      })
      .then((res1) => (this.balance = res1[0].amount))
      .catch((err1) => console.log(err1));
  },
  methods: {
    confirmPayment() {
      this.$axios
        .$post(
          `${process.env.VUE_APP_API_URL}/offer/pay-with-yamluck`,
          {
            product_id: this.productID,
          },
          {
            headers: {
              Authorization: this.token,
              "x-api-key": process.env.VUE_APP_API_KEY,
            },
          }
        )
        .then((response) => {
          location.href = `/product/${this.productID}/confirm`;
        })
        .catch((err) => alert("Already Subscribed"));
    },
  },
};
</script>
<style>
@import "~/assets/scss/style.css";
</style>
