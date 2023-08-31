<template>
  <v-app :class="$i18n.locale">
    <DashboardHeader></DashboardHeader>
    <div class="change-password-page">
      <div class="container">
        <div class="breadcrumb">
          <span class="page">
            <NuxtLink to="/">{{ $t("home") }}</NuxtLink>
          </span>
          <span class="devider" v-if="$i18n.locale == 'en'"> < </span>
          <span class="devider" v-else> > </span>
          <span class="page">{{ $t("change-password") }}</span>
        </div>
        <div class="sides">
          <Menu />
          <div class="content" style="display: block">
            <div class="heading">
              <span>{{ $t("change-password") }}</span>
            </div>
            <form class="form" @submit.prevent="changePassword">
              <div class="input-group">
                <label for="old-password">{{ $t("old-password") }}</label>
                <input
                  type="password"
                  name="oldPassword"
                  id="old-password"
                  v-model="oldPassword"
                />
              </div>
              <div class="input-group">
                <label for="new-password">{{ $t("new-password") }}</label>
                <input
                  type="password"
                  name="newPassword"
                  id="new-password"
                  v-model="newPassword"
                />
              </div>
              <div class="input-group">
                <label for="re-new-password">{{ $t("re-new-password") }}</label>
                <input
                  type="password"
                  name="re_new_password"
                  id="re-new-password"
                  v-model="new_conf_password"
                />
              </div>
              <input
                type="submit"
                class="save-btn"
                :value="$t('change-password')"
              />
              <v-alert
                type="error"
                class="password-error"
                style="display: none; margin-top: 4%"
              >
                {{ $t("password-does-not-match") }}
              </v-alert>
              <v-alert :type="msg.type" style="margin-top: 4%">
                {{ msg.message }}
              </v-alert>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </v-app>
</template>
<script>
import axios from "axios";
import DashboardHeader from "~/components/DashboardHeader.vue";
export default {
  middleware: "auth",
  data() {
    return {
      msg: [],
      token: this.$auth.user.token,
      oldPassword: "",
      newPassword: "",
      new_conf_password: "",
    };
  },
  methods: {
    changePassword() {
      axios
        .post(
          "https://backend.yamluck.com/api/change-password",
          {
            oldPassword: this.oldPassword,
            newPassword: this.newPassword,
          },
          {
            headers: {
              Authorization: this.token,
            },
          }
        )
        .then(
          (response) =>
            (this.msg = {
              message: this.$t("password-changed"),
              type: "success",
            })
        )
        .catch(
          (err) =>
            (this.msg = {
              message: this.$t("old-password-does-not-correct"),
              type: "error",
            })
        );
    },
  },
  updated() {
    if (this.newPassword !== this.new_conf_password) {
      document.querySelector(".password-error").style.display = "block";
    }
  },
  components: { DashboardHeader },
};
</script>
<style>
@import "~/assets/scss/style.css";
</style>
