<template>
  <v-app :class="$i18n.locale">
    <Header />
    <div id="login-page">
      <div class="container">
        <div class="side">
          <h3>{{ $t("reset-password") }}</h3>
          <div class="form">
            <form @submit.prevent="passwordReset">
              <div class="input-group">
                <input
                  type="password"
                  name="password"
                  :placeholder="$t('new-password')"
                  v-model="newPassword"
                />
              </div>
              <div class="input-group">
                <input
                  type="password"
                  name="password"
                  :placeholder="$t('re-new-password')"
                  v-model="rePassword"
                />
              </div>
              <input
                type="submit"
                class="login-btn"
                name="login"
                :value="$t('reset-password')"
              />
            </form>
            <v-alert
              :type="msg.type"
              style="margin-top: 4%; background: transparent"
            >
              {{ msg.message }}
            </v-alert>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </v-app>
</template>
<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import axios from "axios";
export default {
  name: "resetPassword",
  middleware: "guest",
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      msg: [],
      code: this.$route.params.code,
      newPassword: "",
      rePassword: "",
    };
  },
  methods: {
    passwordReset() {
      axios
        .post(`https://backend.yamluck.com/api/update-password/${this.code}`, {
          newPassword: this.newPassword,
        })
        .then(
          (success) =>
            (this.msg = {
              message: this.$t("password-changed"),
              type: "success",
            }),
          this.$router.push({
            path: "/login",
          })
        )
        .catch(
          (err) =>
            (this.msg = {
              message: this.$t("something-went-wrong"),
              type: "error",
            })
        );
    },
  },
};
</script>
<style>
@import "~/assets/scss/style.css";
</style>
