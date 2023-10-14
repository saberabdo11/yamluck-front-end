<template>
  <section
    data-aos="fade-right"
    data-aos-easing="ease-in-out-cubic"
    class="container mt-5 py-lg-5 position-relative">
    <div class="sold p-sm-4 p-1">
      <div>
        <!----HEADING---->
        <div class="text-center mb-5">
          <span class="smarterway">Rooms That You <br> Have Already</span>
          <span class="anythingtext">Join</span>
        </div>

        <div class="row mx-auto">
          <div v-for="(offer, index) in products" :key="offer.id"
               v-if="index < 3"
               class="col-md-4 col-sm-6">

            <!----START ITEM---->
            <div class="offer-body">
              <div class="latest-offer-info">
                <div class="related-product">
                  <img
                    :src="`${storageURL}/products/product_id_${offer.id}/${offer.pic_one}`"
                    class="related-product-img"
                  />

                  <div class="offer-links p-2 rightBarAction">
                    <!----share---->
                    <a class="ms-2"
                       @click="share(offer.id, offer[`title_${locale}`])">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path
                          d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/>
                      </svg>
                    </a>

                    <!----fav---->
                    <a href="#" class="ms-2"
                       @click.prevent="addFavs(offer.id)"
                       v-if="!favs.some((fav) => fav.product.id == offer.id)">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path
                          d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                      </svg>
                    </a>

                    <!----Gift---->
                    <button class="ms-2"
                            @click="setImage(`${storageURL}/products/product_id_${offer.id}/${offer.gift_pic}`)">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path
                          d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z"/>
                      </svg>
                    </button>
                  </div>

                </div>

                <!--ITEM DETAILS-->
                <div class="related-product-info" style="width: 100%">
                  <!--title-->
                  <h6 class="itemTitle">{{ offer[`title_${locale}`] }}</h6>
                  <!--desc-->
                  <p
                    :class="['mt-2 w-100', { 'text-end': locale == 'ar' }]"
                    style="min-height: 50px;font-size: 17px; padding:0 24px;color:gray;">
                    {{
                      offer[`details_${locale}`].length > 70 ? offer[`details_${locale}`].substr(0, 69) : offer[`details_${locale}`]
                    }}
                  </p>
                  <!--price-->
                  <div
                    class="progress-offer mt-2 d-flex ms-2 align-items-center">
                    <span class="ms-2 itemPrice">SAR {{ offer.price }}</span>
                  </div>

                  <!--totla items-->
                  <div
                    class="progress-offer mt-2 d-flex ms-2 align-items-center pb-4">
                    <span class="ms-2 itemNumbs">Total Nums:</span>
                    <span class="ms-2 itemNumbs">{{ offer.max_subs }}</span>
                  </div>

                </div>
              </div>
            </div>
            <!----END ITEM------>
          </div>
        </div>
      </div>
    </div>
    <div class="pomp-image" v-if="pop == true">
      <div class="pomp-image-header text-end">
        <v-icon @click="closePop" class="text-white" style="font-size: 50px"
        >mdi-alpha-x
        </v-icon
        >
      </div>
      <div class="body-pop text-center">
        <img :src="imageSrc" v-if="imageSrc != null" class="content-pop"/>
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


.related-product {
  min-height: 259px;
  overflow: hidden;
  max-height: 259px;
}

.itemTitle {
  color: #2B3C6B;
  font-size: 26px;
  font-weight: 800;
  font-weight: bolder;
  margin: 12px 23px;
}

.itemPrice, .itemNumbs {
  color: #F2AC4B;
  font-weight: bolder;
  font-size: 20px;
}

.rightBarAction {
  display: flex;
  flex-direction: column;
  width: 60px;
  position: relative;
  top: -223px;
  left: 79%;
  gap: 25px;
  z-index: 9999999999;
}

.rightBarAction a, .rightBarAction button {
  cursor: pointer;
  background: #F2AC4B;
  padding: 7px 8px;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
}

.rightBarAction a:hover, .rightBarAction button:hover {
  transform: scale(1.3);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.rightBarAction a svg, .rightBarAction button svg {
  fill: white;
  height: 1.3em;
}

@media screen and (max-width: 650px) {
  .rightBarAction {
    left: 80%;
  }
}


</style>
