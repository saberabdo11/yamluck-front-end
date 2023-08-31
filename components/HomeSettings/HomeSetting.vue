<template>
  <div
    id="carouselExampleAutoplaying"
    class="carousel slide p-0 m-0 p-lg-2 m-lg-2"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        :class="['carousel-item ', { active: index == 0 }]"
        v-for="(slide, index) in slides"
      >
        <div class="d-flex align-items-center justify-content-center">
          <a :href="slide.btn_redirect" target="_blank">
            <div class="text-center">
              <img
                :src="`https://backend.yamluck.com/storage/carousels/${slide.image}`"
                class="d-block rounded mx-3 text-center img-setting"
                alt="..."
              />
            </div>
          </a>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
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

<style>
.img-setting {
  width: 90vw !important;
  height: 18rem;
  /* object-fit: scale-down; */
  object-position: center;
}

@media screen and (max-width: 767px) {
  .img-setting {
    height: 10rem;
  }
}

.carousel-control-next-icon {
  background-color: #ffc122 !important;
  border-radius: 4px;
  padding: 0.5rem;
}

.carousel-control-prev-icon {
  background-color: #ffc122 !important;
  padding: 0.5rem;
  border-radius: 4px;
}

/* @media screen and (max-width: 767px) {
  .img-setting {
    width: 300px;
    object-fit: cover;
    object-position: center;
  }
} */
</style>
