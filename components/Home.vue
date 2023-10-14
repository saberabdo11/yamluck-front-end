<template>
  <section class="home-section d-flex align-items-center">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between flex-wrap py-4">
        <div class="col-12 col-lg-6">
          <ImageSlide></ImageSlide>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageSlide from "./ImageSlide.vue";
export default {
  components: { ImageSlide },
  data() {
    return {
      details: {},
      locale: this.$i18n.locale,
    };
  },
  async mounted() {
    this.details = await this.$axios.$get(
      "https://backend.yamluck.com/api/details/1"
    );
  },
};
</script>
<style>
.img-home {
  width: 67%;
}
</style>
