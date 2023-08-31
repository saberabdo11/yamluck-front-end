<template>
  <v-app :class="$i18n.locale">
    <SemiHeader />
    <div class="confirm-payment-page">
      <div class="container" style="margin-top: 5%; margin-bottom: 5%">
        <div style="text-align: center; line-height: 2.8rem">
          <img src="pics/payment.png" style="max-width: 450px" />
          <h2 style="color: #2c2c2c">
            {{ $t("your-payment-is-successfull") }}
          </h2>
          <p style="color: #626262">{{ $t("thank-you-for-your-payment") }}</p>
          <NuxtLink to="/" style="color: #d1a125; font-weight: bold">
            {{ $t("back-to-home") }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <Footer />
  </v-app>
</template>
<script>
export default {
  name: "confirm-payment",
  data() {
    return {};
  },
};
</script>
<style>
@import "~/assets/scss/style.css";
</style>
