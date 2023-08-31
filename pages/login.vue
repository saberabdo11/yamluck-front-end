<template>
  <v-app :class="$i18n.locale">
    <Header />
    <div id="login-page">
      <div class="container">
        <div class="side">
          <h3>{{ $t("login") }}</h3>
          <div class="form">
            <form @submit.prevent="userLogin">
              <div class="input-group">
                <!-- <label>البريد الالكتروني</label> -->
                <input
                  type="email"
                  name="email"
                  :placeholder="$t('email')"
                  v-model="form.email"
                />
              </div>
              <div class="input-group">
                <!-- <label>كلمة المرور</label> -->
                <input
                  type="password"
                  name="password"
                  :placeholder="$t('password')"
                  v-model="form.password"
                />
              </div>
              <NuxtLink to="forget-password">
                {{ $t("forget-your-password") }}
              </NuxtLink>
              <input
                type="submit"
                class="login-btn"
                name="login"
                :value="$t('sign-in')"
              />
            </form>
            <span class="dont-have-account">
              <span style="color: white">{{ $t("dont-have-account") }}</span>
              <NuxtLink to="register" style="color: #ffe297">
                {{ $t("register") }}
              </NuxtLink>
            </span>
            <v-alert
              :type="msg.type"
              :style="`margin-top: 4%;background: transparent;display:${
                msg.display || 'none'
              }`"
            >
              {{ msg.message }}
            </v-alert>
            <div class="or-login-with">
              <div class="social">
                <button class="facebook" @click="$auth.loginWith('facebook')">
                  <v-icon>mdi-facebook</v-icon>
                  {{ $t("login-via-facebook") }}
                </button>
                <button class="google" @click="$auth.loginWith('google')">
                  <v-icon>mdi-google</v-icon>
                  {{ $t("login-via-google") }}
                </button>
              </div>
            </div>
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
export default {
  name: "login",
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
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.form,
        });
        this.$router.push({
          name: "index",
        });
      } catch (err) {
        this.msg = {
          message: this.$t("the-email-or-password-is-incorrect"),
          type: "error",
          display: "block",
        };
      }
    },
  },
};
</script>
<style>
@import "~/assets/scss/style.css";
</style>
