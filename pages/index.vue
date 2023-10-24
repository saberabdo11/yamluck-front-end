<template>
  <section>
    <div v-show="isloaded" class="main fadeIn">
      <TopHeader/>
      <DashboardHeader/>
      <HomeSetting/>
      <Latest/>
      <Offers/>
      <Gifts/>
      <Sold
        @show-modal-handler="fireModal"
      />
      <Winners class="d-none"/>
      <Footer/>
    </div>

    <center class="loaderHam" v-show="!isloaded">
      <img src="../assets/images/loading.gif" width="100">
    </center>

    <Popup v-if="showModal">
      <h3 class="h3Pop">{{ gifTitle }}</h3>
      <div class="imgCont">
        <img :src="imgPath" class="imgModal">
      </div>
      <img src="../assets/images/bg.png" width="200"
           style="display: block; margin: 10px; margin-top: -57px !important;">
      <button
        class="btn btn-danger closeModalBtn"
        @click="showModal = !showModal">
        <svg fill="#dc3545" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512">
          <path
            d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
        </svg>
      </button>
    </Popup>
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
import Popup from "~/components/Popup";
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
    Popup,
  },
  data() {
    return {
      isloaded: false,
      showModal: false,
      gifTitle: "",
      imgPath: null,
    }
  },
  mounted() {
    this.isloaded = false
    setTimeout(() => {
      this.isloaded = true;
    }, 3000);
  },
  methods: {
    fireModal(arrGif) {
      this.imgPath = arrGif[0]
      this.gifTitle = arrGif[1]
      this.showModal = !this.showModal
    }
  },
};
</script>
<style>

.h3Pop {
  color: #FF9400;
  font-size: 46px;
  font-weight: 700;
  text-align: center;
}

.popup {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  background: rgb(20 20 20 / 84%);
  z-index: 999999999999;
}

.popup-inner {
  padding: 34px 6px 20px 6px;
  transform: translateY(15vh);
  background: linear-gradient(#000000EB, white, wheat);
  border-radius: 15px;
  border: 1px solid #2d2d2d;
  width: 50%;
  margin: auto;
  text-align: center;
  animation-name: fadeIn;
  animation-duration: 1s;
}

.closeModalBtn {
  position: absolute;
  top: 8px;
  right: 6px;
  background: none;
  border: none;
}

.closeModalBtn:hover {
  position: absolute;
  top: 8px;
  right: 6px;
  background: none;
  border: none;
}

.imgCont {
  overflow: hidden;
  height: 300px;
}

.imgModal {
  text-align: center;
  margin: auto;
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

.loaderHam {
  height: 100vh;
  position: relative;
  padding-top: 29%;
}

.fadeIn {
  animation-name: fadeIn;
  animation-duration: 1.5s;
}

@media screen and (max-width: 767px) {
  .loaderHam {
    padding-top: 85% !important;
  }

  .popup-inner {
    padding: 34px 6px 20px 6px;
    transform: translateY(12vh);
    background: linear-gradient(#000000EB, white, wheat);
    border-radius: 15px;
    border: 1px solid #2d2d2d;
    width: 92%;
    margin: auto;
    text-align: center;
    animation-name: fadeIn;
    animation-duration: 1s;
  }

  .imgModal {
    transform: scale(1);
  }
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
