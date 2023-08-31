<template>
  <div>
    <DashboardHeader></DashboardHeader>
    <section class="products mt-5 position-relative">
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-lg-3 text-center mt-3"
            v-for="offer in offers"
            :key="offer.id"
          >
            <div class="product-body" style="border-radius: 15px">
              <div class="image-product px-4">
                <img
                  :src="`${storageURL}/products/product_id_${offer.id}/${offer.pic_one}`"
                  class="rounded product-image my-3"
                />
              </div>
              <div class="product-title mt-2">
                <span style="font-size: 20px" class="mt-2">
                  {{ offer[`title_${locale}`] }}
                </span>
              </div>
              <div class="product-links mt-3">
                <a
                  style="font-size: 12px"
                  @click.prevent="addCarts(offer.id)"
                  v-if="!carts.some((cart) => cart.product == offer.id)"
                  class="btn main-btn text-black"
                >
                  {{ $t("join-now") }}
                </a>
                <a
                  style="font-size: 12px"
                  :href="`/product/${offer.id}`"
                  class="btn main-btn text-black"
                  >{{ $t("details-offer") }}</a
                >
              </div>
              <div class="product-icons p-2 mt-4" style="border-radius: 15px">
                <button @click="setVideo(offer.video)">
                  <img src="../assets/images/video.png" width="40" alt="" />
                </button>
                <button @click="share(offer.id, offer[`title_${locale}`])">
                  <img
                    src="../assets/images/upload.png"
                    width="40"
                    style="border-radius: 50%"
                    alt=""
                  />
                </button>
                <button
                  @click="
                    setImage(
                      `${storageURL}/products/product_id_${offer.id}/${offer.gift_pic}`
                    )
                  "
                >
                  <img src="../assets/images/GIFT BOX.png" width="40" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pomp-image" v-if="pop == true">
        <div class="pomp-image-header text-end">
          <v-icon @click="closePop" class="text-white" style="font-size: 50px"
            >mdi-alpha-x</v-icon
          >
        </div>
        <div class="body-pop text-center">
          <img :src="imageSrc" v-if="imageSrc != null" class="content-pop" />

          <iframe
            v-if="video != null"
            :src="video"
            class="content-pop rounded"
          ></iframe>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import DashboardHeader from "~/components/DashboardHeader.vue";
import Footer from "~/components/Footer.vue";

export default {
  data() {
    return {
      storageURL: process.env.VUE_APP_STORAGE_URL,
      offers: [],
      locale: this.$i18n.locale,
      carts: [],
      pop: false,
      video: null,
      imageSrc: null,
    };
  },
  async fetch() {
    const response = await this.$axios.$get(
      "https://backend.yamluck.com/api/products"
    );
    this.offers = response;
    this.carts = await this.$axios.$post(
      "https://backend.yamluck.com/api/carts",
      {
        user: this.$auth.user.id,
      }
    );
  },
  methods: {
    addCarts(id) {
      if (!this.$auth.loggedIn) {
        window.location.href = "/login";
      } else {
        this.$axios
          .$post("https://backend.yamluck.com/api/add-carts", {
            user: this.$auth.user.id,
            product: id,
          })
          .then((res) => {
            location.reload();
          })
          .catch((err) => {
            alert("This Offer Added Before");
          });
      }
    },
    setImage(src) {
      this.pop = true;
      this.imageSrc = src;
    },
    setVideo(src) {
      this.pop = true;
      this.video = src;
    },
    closePop() {
      this.pop = false;
      this.imageSrc = null;
      this.video = null;
    },
    share(id, title) {
      navigator
        .share({
          title: `${title}`,
          url: `https://yamluck.com/product/${id}`,
        })
        .then(() => console.log("Successful share"))
        .catch(console.error);
    },
  },
  components: { DashboardHeader, Footer },
};
</script>

<style></style>
