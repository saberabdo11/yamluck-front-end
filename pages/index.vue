<template>
  <section>

    <TopHeader/>
    <DashboardHeader/>
    <HomeSetting/>
    <Latest/>
    <Offers/>
    <Gifts/>
    <Sold/>
    <Winners class="d-none" />
    <Footer/>

  </section>
</template>
<script>
import axios from "axios";
import {Swiper, SwiperSlide} from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import "../assets/style.css";
import HomeSetting from "../components/HomeSettings/HomeSetting";

import Latest from "../components/offers/Latest";
import Offers from "../components/offers/Offers";
import Slider from "../components/Slider.vue";
import Home from "../components/Home.vue";
import Winners from "~/components/Winners/Winners.vue";
import Sold from "./Sold/Sold";
import Header from "~/components/Header";
import TopHeader from "~/components/TopHeader";

export default {
  components: {
    TopHeader,
    Header,
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
  },
};
</script>
