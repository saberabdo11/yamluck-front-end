<template>
  <div class="menu">
    <span style="text-align: center; display: block">
      {{ $t("menu") }}
    </span>
    <ul>
      <li v-if="this.$route.name == 'profile'" class="active">
        <NuxtLink to="/profile">{{ $t("personal-data") }}</NuxtLink>
      </li>
      <li v-else>
        <NuxtLink to="/profile">{{ $t("personal-data") }}</NuxtLink>
      </li>
      <li v-if="this.$route.name == 'interests'" class="active">
        <NuxtLink to="/interests">{{ $t("interests") }}</NuxtLink>
      </li>
      <li v-else>
        <NuxtLink to="/interests">{{ $t("interests") }}</NuxtLink>
      </li>
      <li
        v-if="this.$route.name == 'wallet' || this.$route.name == 'recharge'"
        class="active"
      >
        <NuxtLink to="/wallet">{{ $t("wallet") }}</NuxtLink>
      </li>
      <li v-else>
        <NuxtLink to="/wallet">{{ $t("wallet") }}</NuxtLink>
      </li>
      <li v-if="this.$route.name == 'change-password'" class="active">
        <NuxtLink to="/change-password">{{ $t("change-password") }}</NuxtLink>
      </li>
      <li v-else>
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
