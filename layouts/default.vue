<template>
  <div>
    <v-snackbar
      :timeout="-1"
      :value="true"
      right
      absolute
      tile
      color="red accent-2"
      v-if="$nuxt.isOffline"
    >
      {{ $t("you-are-offline") }} !
    </v-snackbar>
    <Nuxt />
  </div>
</template>
<script>
export default {
  data: () => ({
    snackbar: true,
  }),
  head() {
    return {
      titleTemplate:
        this.$t("yammluck") + " - " + this.$t("fulfill-your-big-wishes"),
      title: this.$t("yammluck"),
    };
  },
};
</script>
