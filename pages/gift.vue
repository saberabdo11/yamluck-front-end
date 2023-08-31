<template>
  <div>
    <DashboardHeader></DashboardHeader>

    <div class="products py-5 mt-5 position-relative">
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-lg-3 text-center"
            v-for="offer in offers"
            :key="offer.id"
          >
            <a :href="`/product/${offer.id}`" class="text-white">
              <div class="product-body p-4" style="border-radius: 15px">
                <div
                  class="owner-img text-end mb-2"
                  v-if="offer.user != NonNullable"
                >
                  <img
                    :src="`${storageURL}/users/${offer.user.pic}`"
                    class="user-image"
                    style="width: 60px; height: 60px"
                  />
                </div>
                <div class="image-product px-4">
                  <img
                    :src="`${storageURL}/products/product_id_${offer.id}/${offer.gift_pic}`"
                    width="200px"
                    height="200px"
                    class="rounded"
                    style="object-fit: fill; object-position: center"
                  />
                </div>
                <div class="product-title text-black">
                  <span>
                    {{ offer[`gift_${locale}`] }}
                  </span>
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
