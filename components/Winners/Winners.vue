<template>
  <section
    data-aos="fade-in"
    data-aos-easing="ease-in-out-cubic"
    class="container rounded mt-5 py-lg-5"
  >
    <div class="winners rounded p-3">
      <div
        class="winners-title d-flex align-items-center justify-content-between"
      >
        <div>
          <!-- <a href="#menu" class="btn border border-1 rounded">
            <v-icon>mdi-chevron-left</v-icon>
          </a>
          <a href="#menu" class="btn border border-1 rounded">
            <v-icon>mdi-chevron-right</v-icon>
          </a> -->
          <span class="btn main-btn text-white px-lg-4 rounded">
            <NuxtLink to="/winners" class="text-black">{{
              $t("view-all")
            }}</NuxtLink>
          </span>
        </div>
        <div>
          <h1 style="color: black" class="p-0 text-end">
            {{ $t("winners-with-us") }}
          </h1>
          <p style="color: black" class="text-end desc-winners">
            {{ $t("winners-p") }}
          </p>
        </div>
      </div>
      <div
        ref="scrollBar"
        class="winners-scrollabar"
        v-for="winner in winners"
        :key="winner.id"
      >
        <div class="row flex-nowrap">
          <div class="col-12 col-lg-3 text-center">
            <div class="winners-body rounded p-3">
              <img
                :src="`${storageURL}/products/product_id_${winner.offer.id}/${winner.offer.preview}`"
                class="img-fluid"
              />
              <h1>مبروك</h1>
              <p style="color: black">
                {{ winner.user.full_name }}
              </p>
              <h4
                class="menu__name rounded"
                style="
                  background: #fdce40;
                  padding: 4px 5px;
                  text-align: center;
                "
              >
                الفائز ب :<span>{{ winner.offer[`gift_${locale}`] }}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      locale: this.$i18n.locale,
      storageURL: process.env.VUE_APP_STORAGE_URL,
      winners: [],
    };
  },
  methods: {
    smoothScroll(target, duration) {
      const container = this.$refs.scrollBar;
      const start = container.scrollLeft;
      const change = target - start;
      const increment = 20;
      let currentTime = 0;

      const animateScroll = () => {
        currentTime += increment;
        const val = this.easeInOutQuad(currentTime, start, change, duration);
        container.scrollLeft = val;
        if (currentTime < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      animateScroll();
    },
    easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    },
    scrollLeft() {
      const container = this.$refs.scrollBar;
      const scrollDistance = container.scrollLeft - 500; // Adjust the scroll distance as needed
      this.smoothScroll(scrollDistance, 500); // Adjust the duration as needed
    },
    scrollRight() {
      const container = this.$refs.scrollBar;
      const scrollDistance = container.scrollLeft + 500; // Adjust the scroll distance as needed
      this.smoothScroll(scrollDistance, 500); // Adjust the duration as needed
    },
  },

  async fetch() {
    this.winners = await this.$axios.$get(
      "https://backend.yamluck.com/api/winners"
    );
  },
};
</script>

<style>
.main-btn {
  font-size: 12px;
}
@media screen and (max-width: 767px) {
  .main-btn {
    font-size: 10px;
  }
}
</style>
