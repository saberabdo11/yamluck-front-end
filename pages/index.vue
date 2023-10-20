<template>
  <section>
    <div v-show="isloaded" class="main fadeIn">
      <TopHeader/>
      <DashboardHeader/>
      <HomeSetting/>
      <Latest/>
      <Offers/>
      <Gifts/>
      <Sold/>
      <Winners class="d-none"/>
      <Footer/>
    </div>

    <center class="loaderHam" v-show="!isloaded">
      <img src="../assets/images/loading.gif" width="100">
    </center>

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
    return {
      isloaded: false,
    }
  },
  mounted() {
    this.isloaded = false
    setTimeout(() => {
      this.isloaded = true;
    }, 3000);
  }
};
</script>
<style>
.loaderHam {
  height: 100vh;
  position: relative;
  padding-top: 29%;
}

.fadeIn {
  animation-name: fadeIn;
  animation-duration: 1.5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.70;
  }
  100% {
    opacity: 1;
  }
}
</style>
