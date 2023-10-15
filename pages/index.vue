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
      <img src="../assets/images/newLogo.png">
      <h2 class="mt-3 font-weight-bold">{{ $t("Loading") }}</h2>
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
  padding-top: 31%;
  animation-name: hamzLoader;
  animation-duration: 5s;
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

@keyframes hamzLoader {
  10% {
    transform: scale(0.8);
  }
  20% {
    transform: scale(1.1);
  }
  30% {
    transform: scale(0.8);
  }
  40% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(0.8);
  }
  60% {
    transform: scale(1.1);
  }
  70% {
    transform: scale(0.8);
  }
  80% {
    transform: scale(1.1);
  }
  90% {
    transform: scale(0.8);
  }
  10% {
    transform: scale(1.1);
  }
}
</style>
