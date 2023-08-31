<template>
  <div class="header">
    <div class="brand">
      <a href="/"><img src="/pics/YAM LUCK-2-png.png" /></a>
    </div>
    <div class="icons">
      <NuxtLink to="/profile" v-if="this.$auth.loggedIn">
        <v-icon>mdi-account</v-icon>
      </NuxtLink>
      <NuxtLink to="/login" v-else>
        <v-icon>mdi-account</v-icon>
      </NuxtLink>
      <!-- <NuxtLink to="">
        <div class="count">
          <span class="number">0</span>
          <v-icon>mdi-heart-outline</v-icon>
        </div>
      </NuxtLink> -->
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
