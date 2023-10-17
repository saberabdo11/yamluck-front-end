<template>
  <div class="menu">
    <ul class="pl-0">
      <li :class="{'active':this.$route.name == 'profile'}">
        <NuxtLink to="/profile">{{ $t("personal-data") }}</NuxtLink>
      </li>

      <li :class="{'active':this.$route.name == 'interests'}">
        <NuxtLink to="/interests">{{ $t("interests") }}</NuxtLink>
      </li>

      <li :class="{'active':this.$route.name == 'wallet'}">
        <NuxtLink to="/wallet">{{ $t("wallet") }}</NuxtLink>
      </li>

      <li :class="{'active':this.$route.name == 'change-password'}">
        <NuxtLink to="/change-password">{{ $t("change-password") }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
