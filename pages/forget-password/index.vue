<template>
  <v-app :class="$i18n.locale">
    <Header />
    <div id="login-page">
      <div class="container">
        <div class="side">
          <h3>{{ $t("forget-your-password") }}</h3>
          <div class="form">
            <form @submit.prevent="passwordReset">
              <div class="input-group">
                <!-- <label>البريد الالكتروني</label> -->
                <input
                  type="email"
                  name="email"
                  :placeholder="$t('email')"
                  v-model="form.email"
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
      form: {
        email: "",
      },
    };
  },
  methods: {
    passwordReset() {
      axios
        .post("https://backend.yamluck.com/api/reset-password", this.form)
        .then(
          (success) =>
            (this.msg = {
              message: this.$t("reset-password-link-sent"),
              type: "success",
            })
        )
        .catch(
          (err) =>
            (this.msg = {
              message: this.$t("user-not-found"),
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
