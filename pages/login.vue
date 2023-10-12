<template>
  <v-app :class="$i18n.locale">
    <div id="login-page">
      <div class="container">
        <div
          style="width: 26%; height: 39%; opacity: 0.30; border-radius: 9999px; border: 100px #F2AC4B solid; position: absolute; top: 20px;"></div>
        <div class="side col-sm-9 mx-auto row p-0">

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

                <!--email-->
                <div class="input-group">
                  <label>{{ $t("email") }}<span>*</span></label>
                  <svg class="svgClass" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="5402397_email_inbox_mail_message_envelope_icon">
                      <path id="Vector"
                            d="M10.0461 9.54752C9.90067 9.67881 9.71168 9.75148 9.51572 9.75148C9.31977 9.75148 9.13078 9.67881 8.98531 9.54752L2.27197 3.44377C2.53541 3.26332 2.84724 3.16673 3.16656 3.16669H15.8332C16.1525 3.16673 16.4644 3.26332 16.7278 3.44377L10.0461 9.54752Z"
                            fill="#333333" fill-opacity="0.7"/>
                      <path id="Vector_2"
                            d="M17.4166 4.95581V13.4583C17.4166 14.0882 17.1664 14.6923 16.721 15.1377C16.2756 15.5831 15.6715 15.8333 15.0416 15.8333H3.95825C3.32836 15.8333 2.72427 15.5831 2.27887 15.1377C1.83347 14.6923 1.58325 14.0882 1.58325 13.4583V4.95581L8.45492 11.2258C8.74472 11.4775 9.11608 11.6154 9.49992 11.6137C9.88855 11.6129 10.2633 11.4692 10.5528 11.21L17.4166 4.95581Z"
                            fill="#333333" fill-opacity="0.7"/>
                    </g>
                  </svg>
                  <input
                    type="email"
                    name="email"
                    :placeholder="$t('email')"
                    v-model="form.email"
                  />
                </div>

                <!--password-->
                <div class="input-group">
                  <label>{{ $t("password") }}<span>*</span></label>
                  <svg class="svgClass" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="3844443_disable_eye_inactive_see_show_icon">
                      <path id="XMLID_323_" d="M11.6561 14.0423C11.7101 14.0963 11.6881 14.1908 11.615 14.2144C7.28374 15.6015 2.59699 13.3689 1.15586 9.18451C1.11536 9.06638 1.11536 8.93476 1.15586 8.81607C1.5738 7.60276 2.27524 6.53963 3.17411 5.68126C3.20843 5.64863 3.26299 5.64976 3.29618 5.68294L5.71605 8.10282C5.73293 8.11969 5.73911 8.14332 5.73349 8.16638C5.10574 10.6104 7.39174 12.8886 9.82624 12.2693C9.8538 12.2619 9.87968 12.267 9.89993 12.2873C10.1013 12.4881 11.2752 13.6614 11.6561 14.0423Z" fill="#333333" fill-opacity="0.7"/>
                      <path id="XMLID_325_" d="M13.8824 13.0871C15.2358 12.1354 16.2905 10.7927 16.8445 9.18283C16.885 9.06471 16.885 8.93533 16.8445 8.81721C15.724 5.56202 12.5718 3.37502 8.9999 3.37502C7.60546 3.37502 6.27683 3.71083 5.10683 4.31158L2.08508 1.28983C1.86515 1.06989 1.50965 1.06989 1.28971 1.28983C1.06977 1.50977 1.06977 1.86527 1.28971 2.08521L15.9147 16.7102C16.1346 16.9301 16.4901 16.9301 16.7101 16.7102C16.93 16.4903 16.93 16.1348 16.7101 15.9148L13.8824 13.0871ZM8.9999 5.62502C10.8612 5.62502 12.3749 7.13871 12.3749 9.00002C12.3749 9.72789 12.1409 10.4006 11.7477 10.9525L7.04746 6.25221C7.59927 5.85902 8.27202 5.62502 8.9999 5.62502Z" fill="#333333" fill-opacity="0.7"/>
                    </g>
                  </svg>
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
            <div
              style="width: 29%; height: 50%; opacity: 0.30; border-radius: 9999px; border: 100px #F2AC4B solid; bottom: -128px; position: absolute; right: -146px;"></div>
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
.svgClass {
  position: absolute;
  top: 38px;
  left: 8px;
}

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


@media screen and (max-width: 768px) {
  .loginForm {
    margin: 26px 20px 0px 18px;
  }
}
</style>
