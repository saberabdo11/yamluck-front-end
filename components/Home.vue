<template>
  <section class="home-section d-flex align-items-center">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between flex-wrap">
        <div class="col-12 col-lg-6 p-0">
          <!-- <img src="../assets/images/s1.png" alt="" class="img-fluid" /> -->
          <ImageSlide></ImageSlide>
        </div>

        <div class="col-12 col-lg-6 p-0 text-center mt-0">
          <img src="~/assets/images/bg.png" class="img-home" />
          <!-- <div class="ms-lg-5 p-lg-5">
            <div :class="['ms-lg-5 p-lg-5', { 'text-end': locale == 'ar' }]">
              <h5 class="home__text ms-lg-5" style="font-size: 13px">
                {{ details[`title_${locale}`] }}
              </h5>
              <h1 class="fw-bold ms-lg-5">
                {{ details[`sub_title_${locale}`] }}
              </h1>
              <h2 class="fw-bold ms-lg-5" style="font-size: 20px">
                {{ details[`desc_${locale}`] }}
              </h2>
              <button
                href="#menu"
                class="btn main-btn mt-4 rounded-pill ms-lg-5"
              >
                GET IN TOUCH
              </button>
            </div>
          </div> -->
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
  width: 70%;
}
</style>
