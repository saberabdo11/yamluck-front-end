<template>
  <section
    data-aos="fade-right"
    data-aos-easing="ease-in-out-cubic"
    class="container mt-5 py-lg-5 position-relative"
  >
    <div class="sold bg-black rounded p-4">
      <div
        class="sold-header d-flex align-items-center justify-content-between"
      >
        <div class="sold-slide-btn d-flex">
          <button
            href="#menu"
            class="btn border rounded text-white p-2"
            @click="scrollPrev"
          >
            <v-icon class="text-white">mdi-chevron-left</v-icon>
          </button>
          <button
            href="#menu"
            class="btn border rounded text-white p-2 ms-2"
            @click="scrollNext"
          >
            <v-icon class="text-white">mdi-chevron-right</v-icon>
          </button>
        </div>

        <div class="sold-title text-white text-end">
          <h1>{{ $t("for-current-operations") }}</h1>
          <p>
            {{ $t("current-op-p") }}
          </p>
        </div>
      </div>
      <div ref="scrollBar" class="sold-scroll">
        <div class="row mx-auto flex-nowrap">
          <div
            v-for="(offer, index) in products"
            :class="['col-12 col-lg-3']"
            :key="offer.id"
          >
            <div class="body-sold bg-white rounded p-3">
              <div class="sold-image">
                <img
                  :src="`${storageURL}/products/product_id_${offer.id}/${offer.pic_one}`"
                />
              </div>
              <div class="mt-2 d-flex align-items-center">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  :aria-valuenow="(offer.curr_subs / offer.max_subs) * 100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 40%"
                >
                  <div
                    class="progress-bar"
                    :style="{
                      width: `${(offer.curr_subs / offer.max_subs) * 100}%`,
                    }"
                  >
                    {{ offer.max_subs - offer.curr_subs }}
                  </div>
                </div>
                <span class="ms-2">{{ offer.max_subs }}</span>
              </div>

              <div :class="['sold-title mt-2', { 'text-end': locale == 'ar' }]">
                <h6 class="">
                  {{ $t("price") }}
                  <span style="color: #80241f">
                    {{ offer.price }} ريال سعودي
                  </span>
                </h6>
                <h6 class="">
                  {{ $t("available-quantity") }}
                  <span style="color: #80241f"> {{ offer.max_subs }} </span>
                </h6>
                <h6 class="">
                  {{ $t("remaining-quantity") }}
                  <span style="color: #80241f">
                    {{ offer.max_subs - offer.curr_subs }}
                  </span>
                </h6>
                <div
                  class="sold-share d-flex align-items-center justify-content-between"
                >
                  <button
                    @click.prevent="addCarts(offer.id)"
                    v-if="!carts.some((cart) => cart.product == offer.id)"
                    class="btn btn-success px-4 rounded mt-2"
                    style="font-size: 12px"
                  >
                    {{ $t("join-now") }}
                  </button>
                  <div class="d-flex justify-content-between">
                    <button
                      class="ms-1"
                      @click="
                        setImage(
                          `${storageURL}/products/product_id_${offer.id}/${offer.gift_pic}`
                        )
                      "
                    >
                      <img
                        src="../../assets/images/GIFT BOX.png"
                        width="35"
                        alt=""
                      />
                    </button>
                    <button
                      class="ms-1"
                      @click="share(offer.id, offer[`title_${locale}`])"
                    >
                      <img
                        src="../../assets/images/upload.png"
                        width="35px"
                        alt=""
                      />
                    </button>
                    <button
                      class="ms-1"
                      @click.prevent="addFavs(offer.id)"
                      v-if="!favs.some((fav) => fav.product.id == offer.id)"
                      href="#"
                    >
                      <img
                        src="../../assets/images/heart.png"
                        width="35px"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      favs: [],
      limitedOffers: [],
      carts: [],
      locale: this.$i18n.locale,
      storageURL: process.env.VUE_APP_STORAGE_URL,
      scrollIndex: 0, // Initialize the scroll index
      scrollInterval: null, // Interval reference for auto-scrolling
      scrollContainer: null,

      pop: false,
      imageSrc: null,
    };
  },
  async fetch() {
    if (this.$auth.loggedIn) {
      this.favs = await this.$axios.$post(
        "https://backend.yamluck.com/api/favs",
        {
          user: this.$auth.user.email,
        }
      );
    }

    const response = await this.$axios.$get(
      "https://backend.yamluck.com/api/products"
    );
    this.products = response;

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
    addFavs(id) {
      if (!this.$auth.loggedIn) {
        window.location.href = "/login";
      } else {
        this.$axios
          .$post("https://backend.yamluck.com/api/addFav", {
            user: this.$auth.user.email,
            product_id: id,
          })
          .then((res) => {
            location.reload();
          })
          .catch((err) => {
            alert("This Offer Added Before");
          });
      }
    },
    deleteFavs(id) {
      if (!this.$auth.loggedIn) {
        window.location.href = "/login";
      } else {
        this.$axios
          .$post("https://backend.yamluck.com/api/deleteFav", {
            user: this.$auth.user.email,
            product_id: id,
          })
          .then((res) => {
            location.reload();
          })
          .catch((err) => {
            alert("This Offer Added Before");
          });
      }
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

    setImage(src) {
      this.pop = true;
      this.imageSrc = src;
    },
    closePop() {
      this.pop = false;
      this.imageSrc = null;
    },

    startAutoScroll() {
      this.scrollInterval = setInterval(this.scrollNext, 7000); // Adjust the interval time (in milliseconds)
    },
    // Stop the auto-scrolling interval
    stopAutoScroll() {
      clearInterval(this.scrollInterval);
    },

    scrollNext() {
      this.scrollIndex++;
      if (this.scrollIndex >= this.products.length) {
        this.scrollIndex = 0; // Loop back to the beginning
        this.scrollContainer.scrollLeft = 0;
      } else {
        this.scrollContainer.scrollLeft =
          this.scrollContainer.clientWidth * this.scrollIndex;
      }
    },

    handleMouseEnter() {
      this.stopAutoScroll();
    },

    handleMouseLeave() {
      this.startAutoScroll();
    },

    scrollNext() {
      this.scrollIndex++;
      if (this.scrollIndex >= this.products.length) {
        this.scrollIndex = 0; // Loop back to the beginning
        this.scrollContainer.scrollLeft = 0;
      } else {
        this.scrollContainer.scrollLeft =
          this.scrollContainer.clientWidth * this.scrollIndex;
      }
    },

    scrollPrev() {
      this.scrollIndex--;
      if (this.scrollIndex < 0) {
        this.scrollIndex = this.products.length - 1; // Loop to the end
        this.scrollContainer.scrollLeft =
          this.scrollContainer.clientWidth * this.products.length;
      } else {
        this.scrollContainer.scrollLeft =
          this.scrollContainer.clientWidth * this.scrollIndex;
      }
    },
  },

  mounted() {
    // Get a reference to the scroll container element
    this.scrollContainer = this.$refs.scrollBar;

    // Start the auto-scrolling when the component is mounted
    this.startAutoScroll();
  },

  beforeDestroy() {
    // Clean up the interval when the component is destroyed
    this.stopAutoScroll();
  },
};
</script>

<style>
.body-sold {
  width: 90%;
}
.sold-image img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: center;
}
</style>
