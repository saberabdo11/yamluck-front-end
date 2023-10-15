<template>
  <div>
    <DashboardHeader></DashboardHeader>

    <div class="products p-4 position-relative">
      <div class="container">

        <!----HEADING---->
        <div class="text-center mb-4">
          <span class="smarterway">Gifts May Be<br></span>
          <span class="anythingtext">Yours</span>
        </div>
        <div class="row mt-3">
          <div
            class="col-md-3 col-sm-6 text-center"
            v-for="offer in offers"
            :key="offer.id">
            <a :href="`/product/${offer.id}`" class="text-white">
              <div class="product-body p-2" style="border-radius: 15px;border-radius: 15px; border: 1px solid #2d2d2d17; box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;">

                <div class="image-product">
                  <img
                    :src="`${storageURL}/products/product_id_${offer.id}/${offer.gift_pic}`"
                    width="200px"
                    height="200px"
                    class="rounded"
                    style="object-fit: scale-down;"
                  />
                </div>
                <div class="product-title text-secondary mt-3">
                    <h5 style="color:gray">{{ offer[`gift_${locale}`] }}</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import DashboardHeader from "~/components/DashboardHeader.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: { DashboardHeader, Footer },
  data() {
    return {
      storageURL: process.env.VUE_APP_STORAGE_URL,
      offers: [],
      locale: this.$i18n.locale,
    };
  },
  async fetch() {
    this.offers = await this.$axios.$get(
      "https://backend.yamluck.com/api/products"
    );
  },
};
</script>
