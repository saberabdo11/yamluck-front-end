<template>
  <v-app>
    <DashboardHeader></DashboardHeader>

    <div
      data-aos="fade-in"
      data-aos-easing="ease-in-out-cubic"
      class="container py-5 mt-5"
    >
      <div class="winners rounded p-3">
        <div class="row" v-for="winner in winners" :key="winner.id">
          <div class="col-12 col-lg-3 text-center">
            <div class="winners-body rounded p-3">
              <img
                :src="`${storageURL}/products/product_id_${winner.offer.id}/${winner.offer.preview}`"
                class="img-fluid"
              />
              <h1>مبروك</h1>
              <p style="color: black">
                {{ winner.user.full_name }}
              </p>
              <h4
                class="menu__name rounded"
                style="padding: 4px 5px; text-align: center"
              >
                الفائز ب :<span>{{ winner.offer[`gift_${locale}`] }}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </v-app>
</template>

<script>
import DashboardHeader from "~/components/DashboardHeader.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: { DashboardHeader, Footer },
  data() {
    return {
      locale: this.$i18n.locale,
      storageURL: process.env.VUE_APP_STORAGE_URL,
      winners: [],
    };
  },
  async fetch() {
    this.winners = await this.$axios.$get(
      "https://backend.yamluck.com/api/winners"
    );
  },
};
</script>
