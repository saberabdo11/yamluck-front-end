<template>
  <section
    data-aos="fade-right"
    data-aos-easing="ease-in-out-cubic"
    class="products py-3 mt-lg-5 position-relative wow fadeIn"
  >
    <div class="container">
      <h5 :class="[{ 'text-end': locale == 'ar' }]">:{{ $t("last-offer") }}</h5>
      <div ref="scrollOffer" class="sold-scroll">
        <div class="row flex-nowrap">
          <div
            v-for="(offer, index) in offers"
            :class="['col-6 col-lg-3 text-center mt-3 col-product']"
            :key="offer.id"
          >
            <div class="product-body" style="border-radius: 15px">
              <div class="image-product px-2 px-lg-4 position-relative">
                <img
                  :src="`${storageURL}/products/product_id_${offer.id}/${offer.pic_one}`"
                  class="rounded product-image my-2 my-lg-3"
                />
              </div>
              <div class="product-title mt-lg-2">
                <span class="mt-lg-2 fw-bold">
                  {{ $t("win") }} {{ offer[`gift_${locale}`] }}
                </span>
              </div>
              <div class="product-links mt-1 mt-lg-3">
                <a
                  style="font-size: 12px"
                  @click.prevent="addCarts(offer.id)"
                  v-if="!carts.some((cart) => cart.product == offer.id)"
                  class="ms-3"
                >
                  <img src="~/assets/images/cart.png" />
                </a>
                <a
                  style="font-size: 12px"
                  :href="`/product/${offer.id}`"
                  class="ms-3"
                >
                  <img src="~/assets/images/details.png" />
                </a>
              </div>

              <div
                class="product-icons p-2 mt-2 mt-lg-4"
                style="border-radius: 15px"
              >
                <button @click="setVideo(offer.video)">
                  <img src="~/assets/images/video.png" alt="" />
                </button>
                <button @click="shareOffer(offer.id, offer[`title_${locale}`])">
                  <img
                    src="~/assets/images/upload.png"
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
                  <img src="~/assets/images/GIFT BOX.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sold-slide-btn d-flex justify-content-center mt-5">
        <button
          href="#menu"
          class="btn border rounded text-warning p-3"
          @click="scrollPrev"
        >
          <v-icon class="text-warning">mdi-chevron-left</v-icon>
        </button>
        <button
          href="#menu"
          class="btn border rounded text-warning p-3 ms-2"
          @click="scrollNext"
        >
          <v-icon class="text-warning">mdi-chevron-right</v-icon>
        </button>
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
</template>

<script>
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

      scrollIndex: 0, // Initialize the scroll index
      scrollInterval: null, // Interval reference for auto-scrolling
      scrollContainer: null,
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
    async shareOffer(id, title) {
      // Generate the share link based on the offer's details
      const shareLink = `https://yamluck.com/product/${id}`;

      // You can use the Web Share API to invoke native sharing
      navigator
        .share({
          title: title,
          text: "Check out this offer!",
          url: shareLink,
        })
        .then(() => console.log("Successfully shared"))
        .catch((error) => console.error("Error sharing:", error));
    },

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

    scrollPrev() {
      const scrollContainer = this.$refs.scrollOffer;
      scrollContainer.scrollLeft -= scrollContainer.clientWidth;
    },

    scrollNext() {
      const scrollContainer = this.$refs.scrollOffer;
      scrollContainer.scrollLeft += scrollContainer.clientWidth;
    },
  },
};
</script>

<style>
.col-product {
  max-width: 95%;
}

@media screen and(max-width: 767px) {
  .col-product {
    max-width: 50%;
  }
}
</style>
