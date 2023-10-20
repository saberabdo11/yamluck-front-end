<template>
  <section
    data-aos="fade-right"
    data-aos-easing="ease-in-out-cubic"
    class="products py-3 mt-lg-5 position-relative wow fadeIn">

    <div class="container">
      <!----HEADING---->
      <div class="text-center">
        <span class="smarterway">{{ $t('bestPlace') }}<br> {{ $t('For') }}</span>
        <span class="anythingtext">{{ $t('Offers') }}</span>
      </div>

      <!----START ITEMS---->
      <div ref="scrollOffer" class="m-md-5 m-sm-3 m-1">
        <div class="row flex-nowrap">
          <div
            v-for="(offer, index) in offers" :key="offer.id"
            v-if="index < 3"
            class="col-md-4 col-sm-6 latest-col mt-3 mb-3">

            <div class="offer-image text-left pt-5">
              <picture>
                <source
                  :srcset="`${storageURL}/products/product_id_${offer.id}/${offer.preview}`"
                />
                <source
                  :srcset="`${storageURL}/products/product_id_${offer.id}/${offer.preview}`"
                />
                <img
                  :style="'width: 177px; height: auto; margin-top: -66px; position: absolute; z-index: 2; '+ [locale=='ar' ? 'margin-left: 189px;' : '']"
                  :src="`${storageURL}/products/product_id_${offer.id}/${offer.preview}`"
                  @error="(error) => {error.target.style.display = 'none';}"
                />
                <video
                  :src="`${storageURL}/products/product_id_${offer.id}/${offer.preview}`"
                  style="width: 177px; height: auto; margin-top: -63px; position: absolute; z-index: 2;"
                  autoplay loop muted
                  @error="(error) => {error.target.style.display = 'none';}"
                  v-if="ios === false"
                />
              </picture>
            </div>

            <div :class="['px-4', { 'text-end': locale == 'ar' }]"
                 style="z-index: 99999999; position: relative; margin-top: 27px;">
              <a :href="`/product/${offer.id}`" style="background: #FF7162 !important;color: white;"
                 class="btn text-white mt-2">
                {{ $t("get-it-and-join-draw") }}
                <img style="position: absolute; width: 61px; top: -14px; right: 152px;"
                     src="../../assets/images/newGiftIcon.png"
                     @error="(error) => {error.target.style.display = 'none';}"
                />
              </a>
            </div>

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

                    <!----fav---->
                    <a href="#" class="ms-2"
                       @click.prevent="addFavs(offer.id)"
                       v-if="!favs.some((fav) => fav.product.id == offer.id)">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                        <path
                          d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                      </svg>
                    </a>
                  </div>

                </div>

                <!--ITEM DETAILS-->
                <div class="related-product-info" style="width: 100%">
                  <!--title-->
                  <h6 :class="['itemTitle', { 'text-right': locale == 'ar' }]">{{ offer[`title_${locale}`] }}</h6>
                  <!--desc-->
                  <p
                    :class="['mt-2 w-100', { 'text-end': locale == 'ar' }]"
                    style="min-height: 50px; font-size: 15px; padding: 0px 24px; color: gray; margin-top: -5px !important; margin-bottom: 1px;">
                    {{
                      offer[`details_${locale}`].length > 70 ? offer[`details_${locale}`].substr(0, 69) : offer[`details_${locale}`]
                    }}
                  </p>
                  <!--price-->
                  <div
                    :class="['progress-offer mt-2 d-flex ms-2 align-items-center',{'pullRight': locale == 'ar'}]">
                    <span class="ms-2 itemPrice">{{ $t("SAR") }}</span>
                    <span class="ms-2 itemPrice">{{ offer.price }}</span>
                  </div>

                  <!--totla items-->
                  <div
                    :class="['progress-offer mt-2 d-flex ms-2 align-items-center pb-3',{'pullRight': locale == 'ar'}]">
                    <span class="ms-2 itemNumbs">{{ $t("Total_Nums") }}:</span>
                    <span class="ms-2 itemNumbs">{{ offer.max_subs }}</span>
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
        >mdi-alpha-x
        </v-icon
        >
      </div>
      <div class="body-pop text-center">
        <img :src="imageSrc" v-if="imageSrc != null" class="content-pop"/>
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
      favs: [],
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
    //fetching favs if user logged in
    if (this.$auth.loggedIn) {
      this.favs = await this.$axios.$post(
        "https://backend.yamluck.com/api/favs",
        {
          user: this.$auth.user.email,
        }
      );
    }

    //fetching Offers if user logged in
    const response = await this.$axios.$get("https://backend.yamluck.com/api/products");
    this.offers = response;
    if (this.$auth.user) {
      this.carts = await this.$axios.$post("https://backend.yamluck.com/api/carts", {
          user: this.$auth.user.id,
        }
      );
    } else
      this.carts = null;

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

<style scoped>
.related-product {
  min-height: 216px;
  overflow: hidden;
  max-height: 216px;
}

.itemTitle {
  color: #2B3C6B;
  font-size: 26px;
  font-weight: 600;
  margin: 12px 23px;
}

.itemPrice, .itemNumbs {
  color: #F2AC4B;
  font-weight: 600;
  font-size: 14px;
}

.rightBarAction {
  display: flex;
  flex-direction: column;
  width: 60px;
  position: relative;
  top: -203px;
  left: 79%;
  gap: 25px;
  z-index: 9999999999;
}

.rightBarAction a {
  cursor: pointer;
  background: #F2AC4B;
  padding: 7px 8px;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
}

.rightBarAction a:hover {
  transform: scale(1.3);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.rightBarAction a svg {
  fill: white;
  height: 1.3em;
}

.text-right {
  text-align: right !important;
}
.pullRight {
  justify-content: right !important;
  padding-right: 21px !important;
}
@media screen and (max-width: 650px) {
  .rightBarAction {
    left: 80%;
  }
}
</style>
