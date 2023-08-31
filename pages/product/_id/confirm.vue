<template>
  <v-app :class="$i18n.locale">
    <SemiHeader />
    <div class="confirm-page">
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
          <div class="images" v-lazy-container="{ selector: 'img' }">
            <div
              class="profile-img"
              v-for="subscribe in subscribers"
              :key="subscribe.id"
            >
              <img :data-src="`${storageURL}/users/${subscribe.user.pic}`" />
            </div>
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
            <div class="timer">
              <span class="text"> {{ $t("remaining-time") }} : </span>
              <span class="time" style="color: #d1a125">{{
                countdown.hours +
                ":" +
                countdown.minutes +
                ":" +
                countdown.seconds
              }}</span>
            </div>
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
  middleware: ["auth", "checkPhone", "confirmSubscribe", "checkWinner"],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      product_id: this.$route.params.id,
      token: this.$auth.user.token,
      subscribers: [],
      product: [],
      countdown: [],
      locale: this.$i18n.locale,
      storageURL: process.env.VUE_APP_STORAGE_URL,
      swiperOption: {
        draggable: true,
        loop: true,
        autoplay: {
          delay: 6000,
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
    this.product = await this.$http.$get(
      `${process.env.VUE_APP_API_URL}/product/${this.product_id}`
    );
  },
  mounted() {
    this.$axios
      .$post(
        `${process.env.VUE_APP_API_URL}/offer/subscribers`,
        { product_id: this.product_id },
        {
          headers: {
            Authorization: this.token,
            "x-api-key": process.env.VUE_APP_API_KEY,
          },
        }
      )
      .then((success) => (this.subscribers = success))
      .catch((err) => console.log(err));
    this.countdown = moment().countdown(
      this.product.end_date,
      countdown.HOURS | countdown.MINUTES | countdown.SECONDS
    );
  },
};
</script>
<style>
@import "~/assets/scss/style.css";
</style>
