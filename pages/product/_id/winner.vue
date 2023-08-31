<template>
  <v-app :class="$i18n.locale">
    <SemiHeader />
    <div class="winner-page">
      <div class="container">
        <div class="heading">
          <h3>{{ product[`title_${locale}`] }}</h3>
          <span
            style="
              display: flex;
              align-items: center;
              gap: 10px;
              justify-content: flex-end;
            "
          >
            {{ $t("remaining-time") }} :
            <span style="color: #d1a125">{{
              countdown.hours + ":" + countdown.minutes
            }}</span>
          </span>
        </div>
        <div class="subscribers">
          <div class="winner">
            <h3>{{ $t("contest-winner") }}</h3>
            <div class="profile-img">
              <img :src="`${storageURL}/users/${winner.user.pic}`" />
            </div>
            <p>
              لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
              هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف
              التى يولدها التطبيق.
            </p>
            <v-dialog
              v-model="dialog"
              width="500"
              style="overflow: hidden"
              v-if="winner.user_id == $auth.user.id"
            >
              <template v-slot:activator="{ on, attrs }">
                <button class="receive-gift" dark v-bind="attrs" v-on="on">
                  {{ $t("receipt-confirmation") }}
                </button>
              </template>

              <v-card>
                <v-card-text style="padding: 20px 24px 20px">
                  <img
                    :src="`/pics/Group 16101.svg`"
                    style="max-width: 200px; margin: 0 auto; display: block"
                  />
                  <h2
                    style="
                      color: #d1a125 !important;
                      text-align: center !important;
                      display: block;
                      margin: 5% auto;
                    "
                  >
                    {{ $t("congrats") }}
                  </h2>
                  <p style="text-align: center">
                    لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد
                    مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                    الحروف التى يولدها التطبيق.
                  </p>
                  <button class="confirm" @click.prevent="confirm">
                    {{ $t("agree-and-confirm") }}
                  </button>
                </v-card-text>
              </v-card>
            </v-dialog>
          </div>
          <div class="preview">
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide>
                <img
                  :src="`${storageURL}/products/product_id_${product_id}/${product.pic_one}`"
                />
              </swiper-slide>
              <swiper-slide v-if="product.pic_two !== null">
                <img
                  :src="`${storageURL}/products/product_id_${product_id}/${product.pic_two}`"
                />
              </swiper-slide>
              <swiper-slide v-if="product.pic_three !== null">
                <img
                  :src="`${storageURL}/products/product_id_${product_id}/${product.pic_three}`"
                />
              </swiper-slide>
              <swiper-slide v-if="product.pic_four !== null">
                <img
                  :src="`${storageURL}/products/product_id_${product_id}/${product.pic_four}`"
                />
              </swiper-slide>
              <swiper-slide v-if="product.pic_five !== null">
                <img
                  :src="`${storageURL}/products/product_id_${product_id}/${product.pic_five}`"
                />
              </swiper-slide>
              <swiper-slide v-if="product.pic_six !== null">
                <img
                  :src="`${storageURL}/products/product_id_${product_id}/${product.pic_six}`"
                />
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </v-app>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import moment from "moment";
import countdown from "countdown";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  middleware: ["auth", "checkPhone", "checkWinner"],
  data() {
    return {
      product_id: this.$route.params.id,
      token: this.$auth.user.token,
      product: [],
      locale: this.$i18n.locale,
      countdown: [],
      dialog: false,
      storageURL: process.env.VUE_APP_STORAGE_URL,
      winner: [],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  async fetch() {
    this.product = await this.$http.$get(
      `${process.env.VUE_APP_API_URL}/product/${this.product_id}`
    );
    this.winner = await this.$axios.$post(
      `${process.env.VUE_APP_API_URL}/offer/winner`,
      { product_id: this.product_id },
      {
        headers: {
          Authorization: this.token,
          "x-api-key": process.env.VUE_APP_API_KEY,
        },
      }
    );
  },
  mounted() {
    this.countdown = moment().countdown(
      this.product.end_date,
      countdown.HOURS | countdown.MINUTES | countdown.SECONDS
    );
  },
  methods: {
    confirm() {
      this.$axios
        .$post(
          `${process.env.VUE_APP_API_URL}/offer/winner/confirm`,
          { product_id: this.product_id },
          {
            headers: {
              Authorization: this.token,
              "x-api-key": process.env.VUE_APP_API_KEY,
            },
          }
        )
        .then((result) => {
          window.location.href = "/";
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style lang="scss" scoped>
.confirm {
  background: #d1a125;
  padding: 8px 25px;
  color: white;
  border-radius: 5px;
  margin: 3% auto;
  display: block;
}
</style>
<style>
@import "~/assets/scss/style.css";
</style>
