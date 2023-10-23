<template>
  <section
    data-aos="fade-left"
    data-aos-easing="ease-in-out-cubic"
    class="latest-offers mt-5">
    <div class="container mt-5">

      <!----HEADING---->
      <div class="text-center mb-4">
        <span :class="locale == 'en' ? 'smarterway' : 'smarterway_ar'">{{ $t("Smartest") }} <br> {{ $t("Buyy") }}</span>
        <span :class="locale == 'en' ? 'anythingtext' : 'anythingtext_ar'">{{ $t("Anything") }}</span>
      </div>

      <div class="wow animate__fadeInLeftBig row m-md-5 m-sm-3 m-1" style="animation-duration: 3s">

        <!----START ITEM---->
        <a v-for="(offer, index) in limitedOffers"
           :href="`/product/${offer.id}`"
           class="col-md-4 col-sm-6 latest-col mt-3 mb-3"
           v-if="index < 6"
           :key="offer.id">

          <div class="offer-image text-left pt-5">
            <picture>
              <source
                :srcset="`${storageURL}/products/product_id_${offer.id}/${offer.preview}`"
              />
              <source
                :srcset="`${storageURL}/products/product_id_${offer.id}/${offer.preview}`"
              />
              <img
                :style="'width: 177px; height: auto; margin-top: -58px; position: absolute; z-index: 2; '+ [locale=='ar' ? 'margin-left: 146px;' : '']"
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

          <div :class="[{ 'text-end': locale == 'ar' }]"
               style="z-index: 99999999; position: relative; margin-top: 27px;">
            <a :href="`/product/${offer.id}`" style="background: #FF7162 !important;color: white;"
               class="btn text-white mt-2">
              {{ $t("get-it-and-join-draw") }}
              <img style="position: absolute; width: 61px; top: -14px; right: 145px;"
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
                <h6 :class="['itemTitle', { 'text-right': locale == 'ar' }]">
                  {{
                    offer[`title_${locale}`].length > 24 ? offer[`title_${locale}`].substr(0, 23) : offer[`title_${locale}`]
                  }}
                </h6>
                <!--desc-->
                <p
                  :class="['mt-2 w-100 itemDescripLatest', { 'text-end': locale == 'ar' }]">
                  {{
                    offer[`details_${locale}`].length > 70 ? offer[`details_${locale}`].substr(0, 69) : offer[`details_${locale}`]
                  }}
                </p>

                <!--price-->
                <div
                  :class="['progress-offer d-flex ms-2 align-items-center',{'pullRight': locale == 'ar'}]">
                  <span class="ms-2 itemPrice">{{ $t("SAR") }}</span>
                  <span class="ms-2 itemPrice">{{ offer.price }}</span>
                </div>

                <div v-if="index == 4 || index == 0" class="alert alert-warning p-1 Joker">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="10969306_parade_celebration_event_carnival_costume_icon" style="mix-blend-mode:multiply"
                       clip-path="url(#clip0_163_4576)">
                      <g id="Solid">
                        <path id="Vector"
                              d="M27.3542 22.8454C27.3468 22.6568 27.2872 22.4739 27.182 22.3171C27.0768 22.1603 26.9302 22.0357 26.7585 21.9573C26.3758 21.8546 25.9743 21.8434 25.5864 21.9245C24.8135 22.0812 24.0099 21.9579 23.3196 21.5765C23.5079 20.7615 23.7417 19.9576 24.0199 19.1686C24.6815 17.2169 25.63 15.3747 26.8342 13.7024C26.8493 13.6833 26.8612 13.6618 26.8694 13.6389C27.447 12.0098 23.4167 10.0913 20.9441 9.21452C18.4714 8.33774 14.1328 7.28867 13.5552 8.91772C13.5471 8.94068 13.5428 8.96482 13.5425 8.98918C13.4242 11.0465 13.0003 13.0748 12.2846 15.0073C12.0036 15.7952 11.6788 16.5668 11.3116 17.3184C10.5353 17.1793 9.83373 16.769 9.33184 16.1607C9.08171 15.8534 8.76282 15.6092 8.40092 15.4479C8.21811 15.4006 8.02576 15.4049 7.84528 15.4604C7.6648 15.516 7.50328 15.6205 7.37869 15.7624C6.57932 16.4941 6.007 18.1529 6.45978 19.9071C7.15739 22.6222 9.8864 24.7896 14.8031 26.533C19.7198 28.2764 23.2046 28.3124 25.4564 26.6434C26.9135 25.5661 27.514 23.9173 27.3542 22.8454ZM23.416 12.8803C23.4501 12.8334 23.5013 12.802 23.5585 12.7929C23.6158 12.7838 23.6742 12.7977 23.7212 12.8317C23.7681 12.8656 23.7997 12.9168 23.8089 12.974C23.8181 13.0312 23.8043 13.0897 23.7705 13.1367C23.7479 13.1677 21.5181 16.3088 20.5419 22.2578C20.5325 22.315 20.5007 22.3662 20.4535 22.4C20.4064 22.4339 20.3477 22.4476 20.2905 22.4382C20.2332 22.4287 20.1821 22.397 20.1482 22.3498C20.1144 22.3027 20.1007 22.244 20.1101 22.1868C21.1046 16.1269 23.322 13.01 23.416 12.8803ZM19.8387 11.6773C19.8581 11.6227 19.8984 11.5779 19.9508 11.553C20.0031 11.528 20.0633 11.5249 20.118 11.5443C20.1726 11.5637 20.2174 11.604 20.2423 11.6564C20.2673 11.7087 20.2704 11.7689 20.251 11.8235L16.984 21.0372C16.9646 21.0919 16.9242 21.1366 16.8719 21.1616C16.8195 21.1865 16.7594 21.1897 16.7047 21.1703C16.65 21.1509 16.6053 21.1106 16.5803 21.0582C16.5553 21.0058 16.5522 20.9457 16.5716 20.891L19.8387 11.6773ZM16.5088 10.2738C16.5667 10.277 16.6209 10.3031 16.6595 10.3463C16.6982 10.3894 16.7181 10.4461 16.715 10.504C16.7064 10.6639 16.4648 14.4816 13.4196 19.8142C13.4054 19.8391 13.3864 19.861 13.3636 19.8787C13.3409 19.8963 13.315 19.9092 13.2873 19.9168C13.2596 19.9244 13.2306 19.9264 13.2021 19.9228C13.1736 19.9192 13.1461 19.91 13.1212 19.8958C13.0962 19.8816 13.0743 19.8625 13.0567 19.8398C13.0391 19.8171 13.0261 19.7912 13.0185 19.7635C13.011 19.7358 13.0089 19.7068 13.0125 19.6783C13.0161 19.6498 13.0253 19.6223 13.0395 19.5973C16.0291 14.3623 16.2762 10.5181 16.2782 10.4798C16.2815 10.4219 16.3076 10.3677 16.3509 10.3291C16.3941 10.2904 16.4509 10.2705 16.5088 10.2738ZM25.1962 26.2912C23.0699 27.8675 19.7182 27.8117 14.9493 26.1206C10.1804 24.4296 7.54221 22.3615 6.88372 19.7978C6.4784 18.2275 6.98853 16.7128 7.67421 16.0849C7.88966 15.8877 8.10142 15.8058 8.25481 15.8601C8.55075 16.0019 8.81112 16.2082 9.01673 16.4639C9.55487 17.1055 10.2917 17.5492 11.1106 17.7247C10.6117 18.7089 10.2099 19.3474 10.2029 19.3585C10.183 19.39 10.1714 19.426 10.1692 19.4632C10.1671 19.5004 10.1745 19.5376 10.1908 19.5711C10.2294 19.6508 11.1903 21.5373 15.9732 23.2332C20.756 24.9292 22.6906 24.0694 22.7709 24.0319C22.8047 24.0161 22.8338 23.9919 22.8556 23.9617C22.8774 23.9314 22.8911 23.8961 22.8954 23.8591C22.8969 23.8461 22.9871 23.0972 23.2198 22.0186C23.9663 22.3979 24.818 22.5175 25.6401 22.3584C25.9609 22.2894 26.2931 22.2932 26.6123 22.3696C26.7657 22.424 26.8785 22.6211 26.9216 22.9099C27.0585 23.8294 26.5005 25.3269 25.1962 26.2912Z"
                              fill="#F8940A"/>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_163_4576">
                        <rect width="28" height="28" fill="white" transform="translate(9.35742) rotate(19.524)"/>
                      </clipPath>
                    </defs>
                  </svg>
                  Joker
                </div>

                <!--totla items-->
                <div
                  :class="['progress-offer d-flex ms-2 align-items-center pb-3',{'pullRight': locale == 'ar'}]">
                  <span class="ms-2 itemNumbs">{{ $t("Total_Nums") }}:</span>
                  <span class="ms-2 itemNumbs">{{ offer.max_subs }}</span>
                </div>


              </div>
            </div>
          </div>

        </a>
        <!----END ITEM------>

      </div>


    </div>
  </section>
</template>

<script>
import DashboardHeader from "../DashboardHeader.vue";
import Footer from "../Footer.vue";

export default {
  components: {Footer, DashboardHeader},

  data() {
    return {
      ios: false,
      offers: [],
      favs: [],
      limitedOffers: [],
      locale: this.$i18n.locale,
      storageURL: process.env.VUE_APP_STORAGE_URL,
      offersArray: [],
      scrollIndex: 0, // Initialize the scroll index
      scrollInterval: null, // Interval reference for auto-scrolling
      scrollContainer: null,
    };
  },
  async fetch() {
    // this.ad = await this.$http.$get("https://backend.yammluck.com/api/get-ad");
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
    this.limitedOffers = response;
    // this.offers = await this.$axios.$get(
    //   "https://backend.yamluck.com/api/latest-offers"
    // );
    // this.offersArray = Object.keys(this.offers);
  },

  methods: {
    addFavs(id) {
      if (!this.$auth.loggedIn) {
        window.location.href = "/login";
      } else {
        this.$axios.$post("https://backend.yamluck.com/api/addFav", {
          user: this.$auth.user.email,
          product_id: id,
        }).then((res) => {
          location.reload();
        }).catch((err) => {
          alert("This Offer Added Before");
        });
      }
    },
    deleteFavs(id) {
      if (!this.$auth.loggedIn) {
        window.location.href = "/login";
      } else {
        this.$axios.$post("https://backend.yamluck.com/api/deleteFav", {
          user: this.$auth.user.email,
          product_id: id,
        }).then((res) => {
          location.reload();
        }).catch((err) => {
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

    // Stop the auto-scrolling interval
    stopAutoScroll() {
      clearInterval(this.scrollInterval);
    },

    handleMouseEnter() {
      this.stopAutoScroll();
    }
  },
  mounted() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("ios")) {
      this.ios = true;
    }
    // Get a reference to the scroll container element
    this.scrollContainer = this.$refs.scrollBar;
  }
};
</script>

<style scoped>
.related-product {
  max-height: 216px;
  min-height: 216px;
  overflow: hidden;
}

.itemTitle {
  color: #2B3C6B;
  font-size: 21px;
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
  top: -200px;
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

.itemDescripLatest {
  min-height: 50px;
  font-size: 15px;
  padding: 0px 24px;
  color: gray;
  max-height: 50px;
  margin-bottom: 0px !important;
}

.Joker {
  width: fit-content;
  font-weight: 700;
  padding: 3px 28px !important;
  background: #F2AC4B4D;
  color: #F8940A;
  border:none;
  font-size: 18px;
  position: relative;
  float: right;
  right: 18px;
  margin: 0;
  top: -19px;
}

.Joker svg {
  position: absolute;
  top: -23px;
  right: -9px;
}

@media screen and (max-width: 650px) {
  .rightBarAction {
    left: 80%;
  }
}

</style>
