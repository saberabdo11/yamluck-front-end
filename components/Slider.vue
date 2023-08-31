<template>
  <section class="slider-banner mt-5 py-5">
    <div class="container">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-inner">
          <div
            v-for="(group, groupIndex) in slideGroups"
            :key="groupIndex"
            :class="[
              'carousel-item',
              { active: groupIndex === activeGroupIndex },
            ]"
          >
            <div class="d-flex justify-content-center">
              <div
                v-for="(slide, slideIndex) in group"
                :key="slideIndex"
                class="flex-fill p-2"
              >
                <img
                  :src="`https://backend.yamluck.com/public/storage/banners/${slide.image}`"
                  class="d-block w-100 img-slide rounded mx-3"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-indicators">
          <button
            v-for="(group, groupIndex) in slideGroups"
            :key="groupIndex"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            :data-bs-slide-to="groupIndex"
            :class="[{ active: groupIndex === activeGroupIndex }]"
            @click="goToGroup(groupIndex)"
            style="border-radius: 50%; width: 10px; height: 10px"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      activeGroupIndex: 0,
      slideGroups: [], // Each group will contain three slides
      intervalId: null,
    };
  },
  methods: {
    goToGroup(groupIndex) {
      this.activeGroupIndex = groupIndex;
    },
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.activeGroupIndex =
          (this.activeGroupIndex + 1) % this.slideGroups.length;
      }, 5000);
    },
    stopAutoSlide() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
    groupSlides(slides, groupSize) {
      const groups = [];
      for (let i = 0; i < slides.length; i += groupSize) {
        groups.push(slides.slice(i, i + groupSize));
      }
      return groups;
    },
  },
  async fetch() {
    const slides = await this.$axios.$get(
      "https://backend.yamluck.com/api/banners"
    );
    this.slideGroups = this.groupSlides(slides, 3);
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide();
  },
};
</script>

<style>
.img-slide {
  height: 18rem;
  object-position: center;
  object-fit: fill;
}
</style>
