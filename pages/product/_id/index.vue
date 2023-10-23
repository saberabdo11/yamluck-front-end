<template>
  <v-app :class="$i18n.locale">

    <TopHeader/>
    <DashboardHeader/>
    <div class="product-page">
      <div class="container">
        <div class="m-3 product row p-0 w-100">

          <!----LEFT SECTION---->
          <div class="col-md-6 row justify-content-between">
            <div class="col-3 p-1 pt-3 row flex-column justify-content-space-between">
              <span class="littleImgSpan" v-if="product.pic_two !== null">
                <img :src="`${storageURL}/products/product_id_${param}/${product.pic_two}`"/>
              </span>
              <span class="littleImgSpan" v-if="product.pic_three !== null">
                <img :src="`${storageURL}/products/product_id_${param}/${product.pic_three}`"/>
              </span>
              <span class="littleImgSpan" v-if="product.pic_four !== null">
                <img :src="`${storageURL}/products/product_id_${param}/${product.pic_four}`"/>
              </span>
              <span class="littleImgSpan" v-if="product.pic_five !== null">
                <img :src="`${storageURL}/products/product_id_${param}/${product.pic_five}`"/>
              </span>
              <span class="littleImgSpan" v-if="product.pic_six !== null">
                <img :src="`${storageURL}/products/product_id_${param}/${product.pic_six}`"/>
              </span>
            </div>
            <div class="col-9 pt-0">
              <div class="bigImgView">
                <img class="img-fluid" :src="`${storageURL}/products/product_id_${param}/${product.pic_one}`"/>
              </div>
            </div>

            <div class="col-12 p-1 similarProducts" v-if="this.similarProducts.length > 0">
              <h3>Another Gifts Also May Be Yours</h3>
              <div class="row cards">
                <div
                  class="col-3"
                  v-for="similarProduct in similarProducts"
                  :key="similarProduct.id">
                  <NuxtLink :to="`/product/${similarProduct.id}`">
                    <div class="similarProd">
                      <div class="image">
                        <img :src="`${storageURL}/products/product_id_${similarProduct.id}/${similarProduct.pic_one}`"/>
                      </div>
                      <div class="simtitle">
                        <h5>{{ similarProduct[`title_${locale}`] }}</h5>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!----RIGHT SECTION--->
          <div class="col-md-6">
            <div class="product-info">
              <div class="prodTitle">{{ product[`title_${locale}`] }}</div>
              <div class="prodDesc">{{ product[`details_${locale}`] }}</div>
              <div class="prodPrice orderDesc">
                {{ $t("orderdescription") }}
                <span class="text-secondary" style="margin: 0 13px;">
                  {{ $t("luckycustomers") }}
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="9035967_people_sharp_icon 1">
                    <path id="Vector"
                          d="M5.64062 9.5C7.11626 9.5 8.3125 8.30376 8.3125 6.82812C8.3125 5.35249 7.11626 4.15625 5.64062 4.15625C4.16499 4.15625 2.96875 5.35249 2.96875 6.82812C2.96875 8.30376 4.16499 9.5 5.64062 9.5Z"
                          fill="#333333" fill-opacity="0.7"/>
                    <path id="Vector_2"
                          d="M8.68359 10.9844C7.63859 10.4537 6.48523 10.2422 5.64062 10.2422C3.98629 10.2422 0.59375 11.2568 0.59375 13.2852V14.8438H6.16016V14.2474C6.16016 13.5423 6.45703 12.8354 6.97656 12.2461C7.39107 11.7755 7.97146 11.3388 8.68359 10.9844Z"
                          fill="#333333" fill-opacity="0.7"/>
                    <path id="Vector_3"
                          d="M12.6172 10.6875C  10.6849 10.6875 6.82812 11.8809 6.82812 14.25V16.0312H18.4062V14.25C18.4062 11.8809 14.5495 10.6875 12.6172 10.6875Z"
                          fill="#333333" fill-opacity="0.7"/>
                    <path id="Vector_4"
                          d="M12.6172 9.5C14.4207 9.5 15.8828 8.03793 15.8828 6.23438C15.8828 4.43082 14.4207 2.96875 12.6172 2.96875C10.8136 2.96875 9.35156 4.43082 9.35156 6.23438C9.35156 8.03793 10.8136 9.5 12.6172 9.5Z"
                          fill="#333333" fill-opacity="0.7"/>
                    </g>
                    </svg>

                </span>
              </div>
              <div class="prodPrice border-bottom pb-2">
                {{ product.price }} {{ $t("SAR") }}
              </div>
              <div class="prodPrice">
                <span class="text-secondary">{{ $t("productname") }}:</span>
                {{ product[`title_${locale}`] }}
              </div>
              <div class="prodPrice">
                <span class="text-secondary">{{ $t("Brand") }}:</span>
                Adiddas
              </div>
              <div class="prodPrice">
                <span class="text-secondary">Total Items:</span>
                {{ product.max_subs }}
              </div>

              <div class="row mobileView d-flex mt-4 mx-auto" style="width: fit-content;position: relative">
                <img src="../../../assets/images/newGiftIcon.png"
                     :style="'position: absolute; width: 103px;margin-top: -29px;' + [locale == 'ar' ? 'left: 0' : 'right: 0']">
                <div class="col-4">
                  <a href="/product/16" style="height: 110px; display: block;">
                    <img :src="`${storageURL}/products/product_id_${product.id}/${product.preview}`"
                         class="img-fluid"
                         style="width: 100%; height: 100%; object-fit: scale-down;">
                  </a>
                </div>

                <div class="col-8">
                  <h3 class="giftHeading">2023 Volvo XC40</h3>
                  <h4 class="giftText">Recharge pure Electric </h4>
                  <button class="btn btn-warning rounded border-warning px-5 text-white font-weight-bold"
                          style="background: #F2AC4B">
                    Gift you may win
                  </button>
                </div>
              </div>


              <div style="
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 15px;
              ">
                <div v-if="isSubscribed == false">
                  <v-dialog v-model="dialog" width="500" scrollable>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="subscribe-btn" dark v-bind="attrs" v-on="on"
                             style="background: #F2AC4B">
                        {{ $t("subscribe") }}
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-text style="padding: 20px 24px 20px">
                        <h4 style="text-align: center; color: #d1a125">
                          {{ $t("choose-payment-method") }}
                        </h4>
                        <div class="methods-cards">
                          <form>
                            <input
                              type="checkbox"
                              id="agree"
                              @click="agreeCondition($event)"
                            />
                            <label for="agree">
                              {{ $t("agree-on-conditions") }}
                            </label>
                          </form>
                          <a
                            :href="`/payment/offer/${product.id}`"
                            :class="{ agreed: agree, hidden: !agree }">
                            <div class="card">
                              <div class="select">
                                <div class="radio"></div>
                                <div class="title">Visa / Master Card</div>
                              </div>
                              <div class="method">
                                <img
                                  src="/icons/visa_icon.svg"
                                  style="width: 35px"
                                />
                                <img
                                  src="/icons/mastercard_icon.svg"
                                  style="width: 35px"
                                />
                              </div>
                            </div>
                          </a>
                          <a
                            :href="`${apiURL}/paypal/${this.param}/${this.$auth.user.token}`"
                            :class="{ agreed: agree, hidden: !agree }"
                            v-if="this.$auth.loggedIn">
                            <div class="card">
                              <div class="select">
                                <div class="radio"></div>
                                <div class="title">PayPal</div>
                              </div>
                              <div class="method">
                                <img
                                  src="/icons/paypal_icon.svg"
                                  style="width: 20px"
                                />
                              </div>
                            </div>
                          </a>
                          <a
                            href="/login"
                            :class="{ agreed: agree, hidden: !agree }"
                            v-else>
                            <div class="card">
                              <div class="select">
                                <div class="radio"></div>
                                <div class="title">PayPal</div>
                              </div>
                              <div class="method">
                                <img
                                  src="/icons/paypal_icon.svg"
                                  style="width: 20px"
                                />
                              </div>
                            </div>
                          </a>
                          <a href="#" :class="{ agreed: agree, hidden: !agree }">
                            <div class="card">
                              <div class="select">
                                <div class="radio"></div>
                                <div class="title">STC Pay</div>
                              </div>
                              <div class="method">
                                <img
                                  src="/icons/stcpay.svg"
                                  style="width: 60px"
                                />
                              </div>
                            </div>
                          </a>
                          <a
                            :href="`/pay-with-yamluck/${param}`"
                            :class="{ agreed: agree, hidden: !agree }"
                          >
                            <div class="card">
                              <div class="select">
                                <div class="radio"></div>
                                <div class="title">
                                  Yammluck {{ $t("balance") }}
                                </div>
                              </div>
                              <div class="method">
                                <img
                                  src="/pics/YAM LUCK-2-png.png"
                                  style="max-width: 30px"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </v-card-text>
                    </v-card>

                  </v-dialog>
                </div>

                <a :href="`/product/${param}/confirm`" v-else>
                  <button class="subscribe-btn" dark v-bind="attrs" v-on="on">
                    {{ $t("subscribers") }}
                  </button>
                </a>

                <v-dialog v-model="subscribeDialog" width="850">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      style="background: #20c997;"
                      dark
                      v-bind="attrs"
                      v-on="on">
                      {{ $t("inquiry") }}
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-text style="padding: 20px 24px 20px">
                      <h3 style="margin-bottom: 1%; color: #d1a125">{{ $t("details") }}</h3>
                      <table>
                        <tr>
                          <td style="width: 1px; white-space: nowrap">
                            {{ $t("owner_name") }}
                          </td>
                          <td>{{ product.user.full_name }}</td>
                        </tr>
                        <tr>
                          <td style="width: 1px; white-space: nowrap">
                            {{ $t("owner_phone") }}
                          </td>
                          <td>{{ product.user.phone }}</td>
                        </tr>
                        <tr>
                          <td style="width: 1px; white-space: nowrap">
                            {{ $t("country") }}
                          </td>
                          <td>{{ product.country[`name_${locale}`] }}</td>
                        </tr>
                        <tr v-if="product.city !== '' && product.city !== null">
                          <td style="width: 1px; white-space: nowrap">
                            {{ $t("city") }}
                          </td>
                          <td>{{ product.city[`name_${locale}`] }}</td>
                        </tr>
                      </table>
                      <!-- <br />
                      <h3 style="margin-bottom: 1%; color: #d1a125">
                        {{ $t("contest-description") }}
                      </h3> -->
                      {{ product[`details_${locale}`] }}
                      <br/><br/>
                      <h3 style="margin-bottom: 1%; color: #d1a125">
                        {{ $t("contest-conditions") }}
                      </h3>
                      <p>
                      <span style="white-space: pre-line">
                        {{ product[`conditions_${locale}`].split(",").join("\n") }}
                      </span>
                      </p>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <Footer/>
  </v-app>
</template>

<script>
import moment from "moment";
import countdown from "countdown";
import {Swiper, SwiperSlide} from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import DashboardHeader from "~/components/DashboardHeader.vue";
import TopHeader from "~/components/TopHeader.vue";

export default {
  name: "IndexPage",
  components: {
    Swiper,
    SwiperSlide,
    TopHeader,
    DashboardHeader,
  },
  data() {
    return {
      product: [],
      similarProducts: [],
      dialog: false,
      subscribeDialog: false,
      param: this.$route.params.id,
      locale: this.$i18n.locale,
      storageURL: process.env.VUE_APP_STORAGE_URL,
      apiURL: process.env.VUE_APP_API_URL,
      countdown: [],
      isSubscribed: false,
      agree: false,
      swiperOption: {
        draggable: true,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  async fetch() {
    this.product = await this.$axios.$get(
      `https://backend.yamluck.com/api/product/${this.param}`
    );
    this.similarProducts = await this.$axios.$get(
      `https://backend.yamluck.com/api/similar-product/${this.param}`
    );
  },
  methods: {
    agreeCondition(event) {
      if (event.target.checked) {
        this.agree = true;
      } else {
        this.agree = false;
      }
    },
  },
  mounted() {
    if (this.$auth.loggedIn) {
      this.$axios
        .$post(
          `${process.env.VUE_APP_API_URL}/offer/subscribers`,
          {product_id: this.param},
          {
            headers: {
              Authorization: this.$auth.user.token,
              "x-api-key": process.env.VUE_APP_API_KEY,
            },
          }
        )
        .then((success) => (this.isSubscribed = true))
        .catch((err) => console.log(err));
    }
    this.countdown = moment().countdown(
      this.product.end_date,
      countdown.HOURS | countdown.MINUTES | countdown.SECONDS
    );
    console.log(this.isSubscribed);
  },
};
</script>
<style lang="scss" scoped>
.methods-cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 4%;

  .hidden {
    cursor: default;
    pointer-events: none;
    text-decoration: none;
    color: grey;
    filter: grayscale(1);
  }

  .agreed {
    display: block;
  }

  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    flex-wrap: wrap;
    cursor: pointer;

    .title {
      font-size: 15px !important;
      color: #d1a125;
    }

    .select {
      display: flex;
      align-items: center;
      gap: 10px;

      .radio {
        width: 20px;
        height: 20px;
        border: 1px solid #d1a125;
        border-radius: 50%;
      }

      .checked {
        background: #d1a125;
      }
    }

    .method {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }
}

table {
  width: 100%;

  td {
    border: 1px solid #ececec;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
}

.littleImgSpan {
  border: 1px solid #2d2d2d1f;
  text-align: center;
  padding: 25px 0;
  max-height: 108px;
  border-radius: 9px;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  margin-bottom: 15px;
  min-height: 139px;
}

.littleImgSpan img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bigImgView {
  border: 1px solid #2d2d2d1f;
  text-align: center;
  padding: 25px;
  height: 100%;
  border-radius: 9px;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  margin-bottom: 15px;
}

.bigImgView img {
  max-width: 100%;
  height: 100%;
  object-fit: contain;
}

.similarProducts {
  text-align: center;
  border-radius: 9px;
  margin: 28px 0;
  padding: 17px !important;
  background: white !important;
  border: 1px solid #2d2d2d1c;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
}

.similarProducts h3 {
  margin-bottom: 25px;
}

.similarProd {
  background: none;
  border: none;
}

.similarProd .image {
  min-height: 153px;
  max-height: 153px;
}

.similarProd .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.simtitle {
  color: gray;
  font-size: 14px;
  font-weight: 500;
  line-height: 15.12px;
  letter-spacing: 0.70px;
  word-wrap: break-word;
  margin-top: 10px;
}

.prodTitle {
  color: #2B3C6B;
  font-size: 30px;
  font-weight: 600;
  word-wrap: break-word
}

.prodDesc {
  color: gray;
  font-size: 20px;
  margin-top: -15px;
  word-wrap: break-word
}

.prodPrice {
  color: #FF7162;
  font-size: 20px;
  font-weight: 600;
  margin-top: -15px;
}

.orderDesc {
  padding: 8px;
  margin-top: 2px;
  border-top: 1px solid #2d2d2d2d;
  border-bottom: 1px solid #2d2d2d2d;
  margin-bottom: 10px;
}

.mobileView {
  background: white;
  border: 1px solid rgba(45, 45, 45, 0.07059);
  margin: -7px 6px;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
  border-radius: 7px;
}

.giftHeading {
  color: #F2AC4B;
  font-size: 19px;
  font-weight: 600;
  line-height: 26.49px;
  letter-spacing: 1.90px;
  word-wrap: break-word
}

.giftHeading {
  color: #F2AC4B;
  font-size: 19px;
  font-weight: 600;
  line-height: 26.49px;
  letter-spacing: 1.90px;
  word-wrap: break-word
}

.giftText {
  color: rgba(51, 51, 51, 0.70);
  font-size: 20px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 27.88px;
}

</style>
