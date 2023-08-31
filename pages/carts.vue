<template>
  <v-app :class="$i18n.locale">
    <DashboardHeader></DashboardHeader>
    <div class="products py-5 mt-5">
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-lg-3 mt-2 text-center"
            v-for="offer in product"
            :key="offer.id"
          >
            <div class="product-body p-4" style="border-radius: 15px">
              <div class="preview">
                <div class="image-product px-4">
                  <img
                    :src="`${storageURL}/products/product_id_${offer.product.id}/${offer.product.pic_one}`"
                    width="200px"
                    height="200px"
                  />
                </div>
              </div>
              <div class="product-info">
                <div class="title">
                  <div class="title">
                    {{ $t("price") }} {{ offer.product.price }} SAR
                  </div>
                  <div
                    style="
                      display: flex;
                      justify-content: center;
                      flex-wrap: wrap;
                      gap: 15px;
                    "
                  >
                    <div v-if="isSubscribed == false" class="text-center">
                      <v-dialog v-model="dialog" width="500" scrollable>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            class="subscribe-btn"
                            dark
                            v-bind="attrs"
                            v-on="on"
                          >
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
                                :href="`/payment/offer/${offer.product.id}`"
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
                                :href="`${apiURL}/paypal/${offer.product.id}/${$auth.user.token}`"
                                :class="{ agreed: agree, hidden: !agree }"
                                v-if="$auth.loggedIn"
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
                              <a
                                href="#"
                                :class="{ agreed: agree, hidden: !agree }"
                              >
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
                                :href="`/pay-with-yamluck/${offer.product.id}`"
                                :class="{ agreed: agree, hidden: !agree }"
                              >
                                <div class="card">
                                  <div class="select">
                                    <div class="radio"></div>
                                    <div class="title">
                                      Yamluck {{ $t("balance") }}
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

                    <a :href="`/product/${offer.product.id}/confirm`" v-else>
                      <button
                        class="subscribe-btn"
                        dark
                        v-bind="attrs"
                        v-on="on"
                      >
                        {{ $t("subscribers") }}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
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
      dialog: false,
      subscribeDialog: false,
      locale: this.$i18n.locale,
      storageURL: process.env.VUE_APP_STORAGE_URL,
      apiURL: process.env.VUE_APP_API_URL,
      isSubscribed: false,
      agree: false,
    };
  },
  async fetch() {
    this.product = await this.$axios.$post(
      "https://backend.yamluck.com/api/carts",
      {
        user: this.$auth.user.id,
      }
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
};
</script>

<style lang="scss" scoped>
.product-body {
  background-color: #fdce40;
}
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
