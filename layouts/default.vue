<template>
  <div>
    <v-snackbar
      :timeout="-1"
      :value="true"
      right
      absolute
      tile
      color="red accent-2"
      v-if="$nuxt.isOffline">
      {{ $t("you-are-offline") }} !
    </v-snackbar>
    <Nuxt class="fadeIn" v-if="isloaded" />
    <center class="loaderHam" v-if="!isloaded">
      <img src="../assets/images/newLogo.png">
    </center>

  </div>
</template>
<script>
export default {
  data: () => ({
    isloaded: false,
    snackbar: true,
  }),
  head() {
    return {
      titleTemplate:
        this.$t("yammluck") + " - " + this.$t("fulfill-your-big-wishes"),
      title: this.$t("yammluck"),
    };
  },
  mounted() {
    document.onreadystatechange = ()=>{
      if(document.readyState == "complete")
        setTimeout( () => {
          this.isloaded = true;
        },2000);
    }
  }
};
</script>
<style>
.loaderHam {
  height: 100vh;
  position: relative;
  padding-top: 31%;
  animation-name: hamzLoader;
  animation-duration: 5s;
}
.fadeIn {
  animation-name: fadeIn;
  animation-duration: 1.5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50%{
    opacity: 0.70;
  }
  100% {
    opacity: 1;
  }
}
@keyframes hamzLoader {
  10% {
    transform: scale(0.8);
  }
  20%{
    transform: scale(1.1);
  }
  30%{
    transform: scale(0.8);
  }
  40%{
    transform: scale(1.1);
  }
  50%{
    transform: scale(0.8);
  }
  60%{
    transform: scale(1.1);
  }
  70%{
    transform: scale(0.8);
  }
  80%{
    transform: scale(1.1);
  }
  90%{
    transform: scale(0.8);
  }
  10%{
    transform: scale(1.1);
  }
}
</style>
