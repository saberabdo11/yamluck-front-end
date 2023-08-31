<template>
  <v-app :class="$i18n.locale">
    <SemiHeader />
    <div class="recharge-page">
      <div class="container">
        <div class="sides">
          <Menu />
          <div class="content">
            <div class="heading">
              <span>{{ $t("recharge") }}</span>
            </div>
            <div class="balance">
              <div class="last-activity">
                <h4>{{ $t("choose-amount") }}</h4>
                <div class="amounts">
                  <NuxtLink to="/payment/wallet/50">
                    <div class="amount-card">
                      <div class="pay-amount">
                        <span>{{ $t("pay-amount") }}</span>
                        <span style="font-weight: bold">50$</span>
                      </div>
                    </div>
                  </NuxtLink>
                  <NuxtLink to="/payment/wallet/100">
                    <div class="amount-card">
                      <div class="pay-amount">
                        <span>{{ $t("pay-amount") }}</span>
                        <span style="font-weight: bold">100$</span>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
                <div class="amounts">
                  <NuxtLink to="/payment/wallet/150">
                    <div class="amount-card">
                      <div class="pay-amount">
                        <span>{{ $t("pay-amount") }}</span>
                        <span style="font-weight: bold">150$</span>
                      </div>
                    </div>
                  </NuxtLink>
                  <NuxtLink to="/payment/wallet/200">
                    <div class="amount-card">
                      <div class="pay-amount">
                        <span>{{ $t("pay-amount") }}</span>
                        <span style="font-weight: bold">200$</span>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </v-app>
</template>
<script>
export default {
  middleware: "auth",
  data() {},
};
</script>
<style>
@import "~/assets/scss/style.css";
</style>
