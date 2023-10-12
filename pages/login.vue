<template>
  <v-app :class="$i18n.locale">
    <div id="login-page">
      <div class="container">
        <div style="width: 26%; height: 39%; opacity: 0.30; border-radius: 9999px; border: 100px #F2AC4B solid; position: absolute; top: 20px;"></div>
        <div class="side col-9 mx-auto row p-0">

          <!-----LEFT DIV----->
          <div class="col-sm-6 col-12 leftPanelLogin pt-5">
            <img src="../assets/images/newLogo.png" class="img-fluid newLogoImg"/>

            <h3 class="mt-5">{{ $t("login") }}</h3>
            <div class="or-login-with">
              <div class="social">
                <button class="facebook" @click="$auth.loginWith('facebook')">
                  <v-icon>mdi-facebook</v-icon>
                </button>
                <button class="google" @click="$auth.loginWith('google')">
                  <v-icon>mdi-google</v-icon>
                </button>
              </div>
            </div>
            <p class="orUseAccount">{{ $t("orUseAccount") }}</p>

            <!----START FORM---->
            <div class="form loginForm pb-5">
              <form @submit.prevent="userLogin">
                <div class="input-group">
                  <label>{{ $t("email") }}<span>*</span></label>
                  <input
                    type="email"
                    name="email"
                    :placeholder="$t('email')"
                    v-model="form.email"
                  />
                </div>
                <div class="input-group">
                  <label>{{ $t("password") }}<span>*</span></label>
                  <input
                    type="password"
                    name="password"
                    :placeholder="$t('password')"
                    v-model="form.password"
                  />
                </div>
                <NuxtLink to="forget-password" class="forgetPassword">
                  {{ $t("forget-your-password") }}
                </NuxtLink>
                <input
                  type="submit"
                  class="login-btn"
                  name="login"
                  :value="$t('sign-in')"
                />
              </form>
              <!----END FORM---->

              <span class="dont-have-account">
                <span style="color: gray">{{ $t("dont-have-account") }}</span>
                <NuxtLink to="register" style="color: #FF7162;text-decoration: underline">
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
            </div>
          </div>

          <!-----RIGHT DIV----->
          <div class="col-sm-6 d-sm-block d-none rightPanelLogin">
            <div class="RotatedDiv">
            </div>
            <div style="top: -99px;position: relative;">
              <h5 class="welcomeToYamluck">{{ $t("welcometoyamluck") }}</h5>
            </div>
            <div style="top: -99px;position: relative;">
              <h5 class="thebestplacetext">{{ $t("thebestplacetext") }}</h5>
            </div>
            <div style="top: -99px;position: relative;text-align: center">
              <img src="../assets/images/gift.png" style="width: 300px;"/>
            </div>
            <div style="width: 29%; height: 50%; opacity: 0.30; border-radius: 9999px; border: 100px #F2AC4B solid; bottom: -128px; position: absolute; right: -146px;"></div>
          </div>
        </div>
      </div>
    </div>
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
.rightPanelLogin {
  background: #F2AC4B;
}

.leftPanelLogin {
  background: #f8f9fa99;
}

.leftPanelLogin h3 {
  color: #FF7162;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1.80px;
  word-wrap: break-word;
  text-align: center;
}

#login-page .container .side {
  margin-top: 14% !important;
}

.orUseAccount {
  color: gray;
  text-align: center;
  margin-top: 10px;
  font-size: 15px;
  letter-spacing: 0px;
}

#login-page {
  min-height: 100vh;
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(180deg, rgba(255, 202, 128.56, 0.03) 0%, rgba(247.35, 145.40, 4.12, 0.31) 100%)
}

/* width */
::-webkit-scrollbar {
  width: 7px;
}


/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #efe8e8;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ef762c;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a94a0d;
}

#login-page .container .side {
  padding: 20px;
  background: white;
  border: 1px solid #2d2d2d0d;
  margin: 5% auto 5% 5%;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
}

.loginForm {
  margin: 20px 47px 0px 47px;
}

.forgetPassword {
  text-decoration: underline;
}

.newLogoImg {
  width: 80px;
  margin-left: 10px;
  margin-top: -10px;
}

.RotatedDiv {
  transform: rotate(-27.81deg);
  transform-origin: 0 0;
  opacity: 0.20;
  border-radius: 50px;
  position: relative;
  border: 30px #FF7162 solid;
  width: 49%;
  height: 39%;
  top: 80px;
  left: 14px;
}

.welcomeToYamluck {
  color: white;
  font-size: 28px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 1.80px;
  word-wrap: break-word;
  margin-top: 20px;
}

.thebestplacetext {
  color: white;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.4px;
  word-wrap: break-word;
  margin-top: 19px;
  font-weight: 500;
}
</style>
