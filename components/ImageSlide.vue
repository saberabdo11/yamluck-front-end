<template>
  <section class="slides-image">
    <div class="container-img">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="[
          'image-wrapper text-center',
          { 'single-slide': slides.length === 1 },
        ]"
      >
        <img
          :src="`https://backend.yamluck.com/public/storage/Sliders/${slide.image}`"
        />
        <!-- <div class="content text-center mt-4">
          <h3 class="text-uppercase fw-bold">{{ slide.title }}</h3>
          <p class="fw-bold fs-5">{{ slide.subtitle }}</p>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slides: [],
    };
  },
  created() {
    this.startSlideShow();
  },
  async fetch() {
    const fetchedSlides = await this.$axios.$get(
      "https://backend.yamluck.com/api/sliders"
    );
    this.slides = fetchedSlides.slice(0, 1);
  },
  methods: {
    startSlideShow() {
      this.slideShowInterval = setInterval(() => {
        this.shuffleSlides();
      }, 2500); // 5000 milliseconds = 5 seconds
    },
    shuffleSlides() {
      const firstSlide = this.slides.shift(); // Remove the first slide
      this.slides.push(firstSlide);
    },
  },
  beforeDestroy() {
    clearInterval(this.slideShowInterval);
  },
};
</script>

<style>
/*
.slides-image {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-img {
  position: absolute;
  display: flex;
  align-items: center;
}

.image-wrapper {
  position: relative;
}

.image-wrapper:first-child {
  z-index: 2;
  left: 50px;
}

.image-wrapper:nth-child(2) {
  z-index: 3;
  top: 90px;
}

.image-wrapper:nth-child(2) img {
  width: 250px;
  height: 250px;
}

.image-wrapper:nth-child(2) .content {
  display: block;
}

.image-wrapper:nth-child(3) {
  z-index: 1;
  left: -50px;
}

.image-wrapper img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 10px solid #fff;
  object-fit: fill;
  object-position: center;
} */

.image-wrapper.single-slide {
  /* left: -50%; */
  /* transform: translateX(50%); */
  /* top: -15px; */
  /* top: -50%; */
  /* transform: translateX(50%); */
}

.single-slide img {
  width: 550px;
  height: 550px;
  object-fit: scale-down;
  object-position: center;
  border: none;
}

@media screen and (max-width: 767px) {
  .single-slide img {
    width: 300px;
    height: 300px;
  }
}

/* .image-wrapper.active img {
  width: 250px;
  height: 250px;
} */


</style>
