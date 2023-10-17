<template>
  <v-app :class="$i18n.locale">
    <TopHeader/>
    <DashboardHeader/>

    <div class="change-password-page">
      <div class="container" style="background: #EDF1F5;">

        <div class="sides">
          <div class="content border-0 d-block col-sm-9 mx-auto">
            <div class="headingProfile">{{ $t("change-password") }}</div>
            <Menu/>

            <form class="form bg-white rounded" @submit.prevent="changePassword">

              <!---old-password---->
              <div class="input-group row col-12 p-1 mt-5">
                <label class="col-sm-3">{{ $t("old-password") }}</label>
                <input
                  type="password"
                  name="oldPassword"
                  id="old-password"
                  class="col-sm-8"
                  :placeholder="$t('old-password')"
                  v-model="oldPassword"
                />
              </div>

              <!---new-password---->
              <div class="input-group row col-12 p-1 mt-5">
                <label class="col-sm-3">{{ $t("new-password") }}</label>
                <input
                  type="password"
                  name="newPassword"
                  id="new-password"
                  class="col-sm-8"
                  :placeholder="$t('new-password')"
                  v-model="newPassword"
                />
              </div>

              <!---re-new-password---->
              <div class="input-group row col-12 p-1 mt-5">
                <label class="col-sm-3">{{ $t("re-new-password") }}</label>
                <input
                  type="password"
                  name="re_new_password"
                  id="re-new-password"
                  class="col-sm-8"
                  :placeholder="$t('re-new-password')"
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
              <v-alert v-if="msg.message" :type="msg.type" style="margin-top: 4%">
                {{ msg.message }}
              </v-alert>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </v-app>
</template>
<script>
import axios from "axios";
import DashboardHeader from "~/components/DashboardHeader.vue";
import TopHeader from "~/components/TopHeader";

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
  components: {DashboardHeader, TopHeader}
};
</script>
<style>
.headingProfile {
  color: rgba(51, 51, 51, 0.90);
  font-size: 21px;
  font-weight: 600;
  text-align: center;
}
</style>
