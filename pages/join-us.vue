<template>
  <div>
    <DashboardHeader></DashboardHeader>

    <section
      class="join-us py-3 py-lg-5 w-100 d-flex align-items-center justify-content-center"
    >
      <form
        class="form-join-us"
        method="POST"
        @submit.prevent="sendCv"
        enctype="multipart/form-data"
      >
        <div class="form-group">
          <label class="my-2">Send us your cv </label>
          <input
            type="file"
            name="file"
            accept="application/pdf"
            class="form-control"
            required
          />
        </div>
        <button
          v-if="loading === false"
          type="submit"
          class="btn btn-warning text-white px-5 mt-2"
        >
          {{ $t("join us") }}
        </button>
        <button
          v-else
          type="button"
          class="btn btn-warning text-white px-5 mt-2"
        >
          <div
            class="spinner-border"
            style="width: 40px height: 40px;"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </button>
      </form>
    </section>

    <Footer />
  </div>
</template>

<script>
import DashboardHeader from "~/components/DashboardHeader.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: { DashboardHeader, Footer },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async sendCv(e) {
      const data = new FormData(e.target);
      this.loading = true;
      try {
        const response = await this.$axios.post(
          "https://backend.yamluck.com/api/send-cv",
          data
        );

        if (response.status === 200) {
          location.reload();
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.form-join-us {
  width: 40%;
}

@media screen and (max-width: 767px) {
  .form-join-us {
    width: 85%;
  }
}
</style>
