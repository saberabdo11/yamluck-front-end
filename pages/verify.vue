<template>
  <v-app :class="$i18n.locale">
    <Header />
    <div id="login-page">
      <div class="container">
        <div class="side">
          <h3>
            {{ $t("verify-phone") }}
          </h3>
          <div class="form">
            <form @submit.prevent="verifyCode">
              <!-- <label>البريد الالكتروني</label> -->
              <v-otp-input
                length="4"
                type="number"
                style="border: none !important"
                name="code"
                v-model="form.code"
              ></v-otp-input>
              <countdown :end-time="new Date().getTime() + 60000">
                <span slot="process" slot-scope="anyYouWantedScopName">
                  {{
                    $t("wait") +
                    " " +
                    anyYouWantedScopName.timeObj.ceil.s +
                    " " +
                    $t("for-resend")
                  }}
                </span>
                <button
                  type="button"
                  slot="finish"
                  @click="resendCode"
                  style="color: white"
                >
                  <span>{{ $t("resend-code") }}</span>
                </button>
              </countdown>
              <input
                type="submit"
                class="login-btn"
                name="verify"
                :value="$t('confirm')"
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
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import moment from "moment";
import axios from "axios";
import countdown from "countdown";
export default {
  name: "verify",
  middleware: "checkPhone",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      msg: [],
      date: moment(60 * 15 * 1000),
      token: this.$auth.user.token,
      counting: false,
      form: {
        code: "",
      },
    };
  },
  methods: {
    startCountdown: function () {
      this.counting = true;
    },
    onCountdownEnd: function () {
      this.counting = false;
    },
    resendCode() {
      this.$axios
        .$post("https://backend.yammluck.com/api/resend-code", {
          headers: {
            Authorization: this.token,
          },
        })
        .then((success) => {
          this.msg = {
            message: this.$t("code-resend"),
            type: "success",
          };
        })
        .catch((err) => console.log(err));
    },
    verifyCode() {
      this.$axios
        .$post("https://backend.yammluck.com/api/verify-code", this.form, {
          headers: {
            Authorization: this.token,
          },
        })
        .then((res) => {
          this.$router.push({
            path: "/login",
          });
        })
        .catch((err) => {
          this.msg = {
            message: this.$t("invalid-verify"),
            type: "error",
          };
        });
    },
  },
};
</script>
<style scoped>
.input-group input {
  border: none !important;
}
</style>
<style>
@import "~/assets/scss/style.css";
</style>
