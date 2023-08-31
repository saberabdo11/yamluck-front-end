<template>
  <section>
    <DashboardHeader />

    <Home></Home>

    <!-- <Slider></Slider> -->

    <HomeSetting></HomeSetting>

    <Offers></Offers>

    <section class="arrivals mt-lg-5 py-lg-5">
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-lg-6 mt-3"
            v-for="banner in banners"
            :key="banner.id"
          >
            <a :href="banner.redirect" target="_blank">
              <img
                :src="`https://backend.yamluck.com/public/storage/banners/${banner.image}`"
                class="img-fluid"
                style="border-radius: 20px"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>

    <Latest></Latest>

    <Sold></Sold>

    <Winners></Winners>

    <Footer />
  </section>
</template>
<script>
import axios from "axios";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import "../assets/style.css";
import HomeSetting from "../components/HomeSettings/HomeSetting";

import Latest from "../components/offers/Latest";
import Offers from "../components/offers/Offers";
import Slider from "../components/Slider.vue";
import Home from "../components/Home.vue";
import Winners from "~/components/Winners/Winners.vue";
import Sold from "./Sold/Sold";
export default {
  components: {
    Swiper,
    SwiperSlide,
    Latest,
    Offers,
    Slider,
    Home,
    Winners,
    Sold,
  },
  data() {
    return {
      banners: [],
    };
  },
  async mounted() {
    const response = await this.$axios.$get(
      "https://backend.yamluck.com/api/banners"
    );
    this.banners = response.slice(0, 3);
  },
};
</script>
