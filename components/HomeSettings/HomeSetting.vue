<template>
  <div
    id="carouselExampleAutoplaying"
    class="carousel slide p-0 m-0"
    data-bs-ride="carousel">
    <div class="carousel-inner">
      <div
        :class="['carousel-item ', { active: index == 0 }]"
        v-for="(slide, index) in slides">
        <div class="d-flex align-items-center justify-content-center" style="width: 100%; height: 454px;">
          <!------OLD---->
          <a class="d-none " :href="slide.btn_redirect" target="_blank" style="height: 100%;width: 100%;">
            <div class="text-center" style="width: 100%;height: 100%;">
              <img style="width: 100%;height: 100%;margin: 0 !important;"
                   :src="`https://backend.yamluck.com/storage/carousels/${slide.image}`"
                   class="d-block rounded mx-3 text-center img-setting"
              />
            </div>
          </a>

          <a target="_blank" style="height: 100%;width: 100%;">
            <div class="text-center realDivImg">
              <img style="width: 100%;height: 100%;margin: 0 !important;object-fit: cover"
                   src="../../assets/images/slider1.png"
                   class="d-block rounded mx-3 text-center img-setting"
              />
              <div
                :class="locale == 'en' ? 'textOnSlider' : 'textOnSlider_ar'">
                <h3>
                  <span :class="locale == 'en' ? 'pone' : 'pone_ar'">{{$t("Best Choice")}}<br>
                    <span :class="locale == 'en' ? 'd-block' : 'd-none'">
                      {{$t("Make Your")}} <br>
                    </span>
                    {{$t("Life")}}
                  </span>
                  <span :class="locale == 'en' ? 'ptwo' : 'ptwo_ar'">{{$t("Special")}}</span>
                </h3>
                <p class="pthree">{{$t("SOMELOREM")}}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      slides: [],
      activeIndex: 0,
      locale: this.$i18n.locale,
    };
  },

  async fetch() {
    this.slides = await this.$axios.$get(
      "https://backend.yamluck.com/api/carousels/0"
    );
  },
};
</script>

<style scoped>
.img-setting {
  height: 18rem;
  object-position: center;
}

@media screen and (max-width: 767px) {
  .img-setting {
    height: 10rem;
  }
}

.carousel-control-next-icon {
  background-color: #FF7162 !important;
  border-radius: 50%;
}

.carousel-control-prev-icon {
  background-color: #FF7162 !important;
  border-radius: 50%;
}

.textOnSlider {
  position: absolute;
  top: 0;
  z-index: 99999999999999999;
  display: block;
  color: black;
  left: 0;
  text-align: left;
  width: 50%;
  left: 186px;
  top: 98px;
}

.textOnSlider_ar {
  position: absolute;
  z-index: 99999999999999999;
  display: block;
  color: black;
  left: 0;
  text-align: left;
  width: 50%;
  left: 368px;
  top: 98px;
  text-align: right;
}

.pone {
  color: #FEC631;
  font-size: 42px;
  font-weight: 600;
  word-wrap: break-word;
  letter-spacing: 2px;
}

.pone_ar {
  color: #FEC631;
  font-size: 42px;
  font-weight: 600;
  word-wrap: break-word;
}

.ptwo {
  color: #FF7162;
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 0.96px;
  word-wrap: break-word;
  letter-spacing: 2px;
}
.ptwo_ar {
  color: #FF7162;
  font-size: 48px;
  font-weight: 600;
  word-wrap: break-word;
}

.pthree {
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.52px;
  word-wrap: break-word
}

.realDivImg {
  width: 100%;
  height: 100%;
}

.carousel-item::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .6);
}

@media screen and (max-width: 650px) {
  .textOnSlider {
    width: 70%;
    left: 70px;
  }
  .textOnSlider_ar {
    width: 70%;
    left: 70px;
  }
}


/* @media screen and (max-width: 767px) {
  .img-setting {
    width: 300px;
    object-fit: cover;
    object-position: center;
  }
} */
</style>
