<template>
  <v-app :class="$i18n.locale">
    <DashboardHeader></DashboardHeader>
    <div style="text-align: center; margin: 8% auto">
      <img
        src="/pics/36395-lonely-404-2.gif"
        alt="Not Found"
        style="max-width: 450px; margin: 0 auto; display: block"
      />
      <h1 style="color: #383838; text-transform: capitalize; font-size: 34px">
        {{ $t("not-found") }} !
      </h1>
      <a
        href="/"
        style="
          background: #383838;
          color: white;
          padding: 8px 20px;
          border-radius: 5px;
          display: block;
          max-width: 200px;
          margin: 19px auto;
        "
        >{{ $t("back-to-home") }}</a
      >
    </div>
    <Footer />
  </v-app>
</template>

<script>
import DashboardHeader from "../components/DashboardHeader.vue";

export default {
  components: {
    DashboardHeader,
  },
  name: "EmptyLayout",
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {};
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>
