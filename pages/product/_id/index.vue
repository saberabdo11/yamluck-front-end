<template>
  <v-app :class="$i18n.locale">
    <DashboardHeader></DashboardHeader>
    <div class="product-page">
      <div class="container">
        <div class="heading">
          <span>{{ $t("process-number") }} : {{ param }}</span>
        </div>
        <div class="product">
          <div class="preview">
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide>
                <img
                  :src="`${storageURL}/products/product_id_${param}/${product.pic_one}`"
                />
              </swiper-slide>
              <swiper-slide v-if="product.pic_two !== null">
                <img
                  :src="`${storageURL}/products/product_id_${param}/${product.pic_two}`"
                />
              </swiper-slide>
              <swiper-slide v-if="product.pic_three !== null">
                <img
                  :src="`${storageURL}/products/product_id_${param}/${product.pic_three}`"
                />
              </swiper-slide>
              <swiper-slide v-if="product.pic_four !== null">
                <img
                  :src="`${storageURL}/products/product_id_${param}/${product.pic_four}`"
                />
              </swiper-slide>
              <swiper-slide v-if="product.pic_five !== null">
                <img
                  :src="`${storageURL}/products/product_id_${param}/${product.pic_five}`"
                />
              </swiper-slide>
              <swiper-slide v-if="product.pic_six !== null">
                <img
                  :src="`${storageURL}/products/product_id_${param}/${product.pic_six}`"
                />
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div
              v-if="product.video_link !== '' && product.video_link !== null"
            >
              <a
                :href="`https://backend.yamluck.com/storage/products/product_id_${product.id}/${product.preview}`"
                target="_blank"
              >
                <v-btn
                  class="subscribe-btn"
                  dark
                  style="
                    background-color: #d1a125;
                    display: block;
                    margin: 3% auto;
                    padding: 0 45px;
                  "
                >
                  {{ $t("preview-link") }}
                </v-btn>
              </a>
            </div>
          </div>
          <div class="product-info">
            <div class="title">
              <span>{{ product[`title_${locale}`] }}</span>
              <span>/</span>
              <span>{{ product.price }} {{ $t("r.s") }}</span>
            </div>
            <div class="details">
              <p>{{ product[`details_${locale}`] }}</p>
            </div>
            <div class="cards">
              <div class="card">
                <div class="icon">
                  <img src="/icons/svgexport-6 (7).svg" />
                </div>
                <div class="title">
                  {{ $t("price") }}
                </div>
                <div class="amount">
                  <span>{{ product.price }} {{ $t("r.s") }}</span>
                </div>
              </div>
              <div class="card">
                <div class="icon">
                  <img src="/icons/Iconly-Light-outline-Time Circle.svg" />
                </div>
                <div class="title">
                  {{ $t("remaining-time") }}
                </div>
                <div class="amount">
                  <span>{{ countdown.hours + ":" + countdown.minutes }}</span>
                </div>
              </div>
              <div class="card">
                <div class="icon">
                  <img src="/icons/Iconly-Light-outline-3 User.svg" />
                </div>
                <div class="title">
                  {{ $t("available-qty") }}
                </div>
                <div class="amount">
                  <span>{{ product.max_subs }}</span>
                </div>
              </div>
              <div class="card">
                <div class="icon">
                  <img src="/icons/Iconly-Light-outline-3 User.svg" />
                </div>
                <div class="title">
                  {{ $t("currently-lucky") }}
                </div>
                <div class="amount">
                  <span>{{ product.curr_subs }}</span>
                </div>
              </div>
            </div>

            <div class="conditions">
              <h4>{{ $t("contest-conditions") }}</h4>
              <p>
                <span style="white-space: pre-line">
                  <!-- {{ product[`conditions_${locale}`].split(",").join("\n") }} -->
                </span>
              </p>
            </div>
            
            <div
              style="
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 15px;
              "
            >
              <div v-if="isSubscribed == false">
                <v-dialog v-model="dialog" width="500" scrollable>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn class="subscribe-btn" dark v-bind="attrs" v-on="on">
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
                          :class="{ agreed: agree, hidden: !agree }"
                        >
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
                          v-if="this.$auth.loggedIn"
                        >
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
                          v-else
                        >
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
                    class="subscribe-btn"
                    style="height: 40px"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    {{ $t("inquiry") }}
                  </v-btn>
                </template>
                <v-card>
                  <v-card-text style="padding: 20px 24px 20px">
                    <h3 style="margin-bottom: 1%; color: #d1a125">
                      {{ $t("details") }}
                    </h3>
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
                    <br /><br />
                    <h3 style="margin-bottom: 1%; color: #d1a125">
                      {{ $t("contest-conditions") }}
                    </h3>
                    <p>
                      <span style="white-space: pre-line"
                        >{{
                          product[`conditions_${locale}`].split(",").join("\n")
                        }}
                      </span>
                    </p>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </div>
          </div>
        </div>

        <div class="similar-products" v-if="this.similarProducts.length > 0">
          <h3>
            {{ $t("similar-products") }} (<span class="count">{{
              this.similarProducts.length
            }}</span
            >)
          </h3>
          <div class="cards">
            <div
              v-for="similarProduct in similarProducts"
              :key="similarProduct.id"
            >
              <NuxtLink :to="`/product/${similarProduct.id}`">
                <div class="card">
                  <div class="image">
                    <img
                      :src="`${storageURL}/products/product_id_${similarProduct.id}/${similarProduct.pic_one}`"
                    />
                  </div>
                  <div class="title">
                    <h5>{{ similarProduct[`title_${locale}`] }}</h5>
                  </div>
                  <div class="price">
                    <p>{{ similarProduct.price }} $</p>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import moment from "moment";
import countdown from "countdown";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import DashboardHeader from "~/components/DashboardHeader.vue";
export default {
  name: "IndexPage",
  components: {
    Swiper,
    SwiperSlide,
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
          { product_id: this.param },
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
</style>
<style>
@import "~/assets/scss/style.css";
</style>
