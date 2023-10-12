<template>
  <v-app :class="$i18n.locale">
    <div id="register-page">
      <div class="container">
        <div
          style="width: 26%; height: 39%; opacity: 0.30; border-radius: 9999px; border: 100px #F2AC4B solid; position: absolute; top: 20px;"></div>

        <div class="side col-sm-9 mx-auto row p-0">

          <!-----LEFT DIV----->
          <div class="col-sm-6 col-12 leftPanelRegister pt-5">
            <img src="../assets/images/newLogo.png" class="img-fluid newLogoImg"/>

            <h3>{{ $t("register") }}</h3>
            <div class="or-login-with d-none">
              <div class="social">
                <button class="facebook" @click="$auth.loginWith('facebook')">
                  <v-icon>mdi-facebook</v-icon>
                </button>
                <button class="google" @click="$auth.loginWith('google')">
                  <v-icon>mdi-google</v-icon>
                </button>
              </div>
            </div>

            <!----START FORM---->
            <div class="form registerForm pb-5">
              <form @submit.prevent="submitForm">

                <!--full-name-->
                <div class="input-group">
                  <label>{{ $t('full-name') }}<span>*</span></label>
                  <svg class="svgClass" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="8673632_ic_fluent_person_filled_icon 1">
                      <path id="Vector" d="M14.0556 11.0831C15.0389 11.0831 15.836 11.8801 15.836 12.8635V13.5905C15.836 14.0445 15.694 14.487 15.4302 14.8563C14.2063 16.5689 12.2079 17.4173 9.50019 17.4173C6.79194 17.4173 4.7946 16.5686 3.57372 14.8551C3.31092 14.4862 3.16968 14.0446 3.16968 13.5917V12.8635C3.16968 11.8801 3.96678 11.0831 4.95004 11.0831H14.0556ZM9.50019 1.58681C11.6863 1.58681 13.4585 3.35902 13.4585 5.54514C13.4585 7.73127 11.6863 9.50348 9.50019 9.50348C7.31408 9.50348 5.54188 7.73127 5.54188 5.54514C5.54188 3.35902 7.31408 1.58681 9.50019 1.58681Z" fill="#333333" fill-opacity="0.7"/>
                    </g>
                  </svg>
                  <input
                    type="text"
                    name="full_name"
                    :placeholder="$t('full-name')"
                    v-model="form.full_name"
                    required
                  />
                </div>

                <!--nickname-->
                <div class="input-group d-none">
                  <label>{{ $t('nickname') }}<span>*</span></label>
                  <svg class="svgClass" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="8673632_ic_fluent_person_filled_icon 1">
                      <path id="Vector" d="M14.0556 11.0831C15.0389 11.0831 15.836 11.8801 15.836 12.8635V13.5905C15.836 14.0445 15.694 14.487 15.4302 14.8563C14.2063 16.5689 12.2079 17.4173 9.50019 17.4173C6.79194 17.4173 4.7946 16.5686 3.57372 14.8551C3.31092 14.4862 3.16968 14.0446 3.16968 13.5917V12.8635C3.16968 11.8801 3.96678 11.0831 4.95004 11.0831H14.0556ZM9.50019 1.58681C11.6863 1.58681 13.4585 3.35902 13.4585 5.54514C13.4585 7.73127 11.6863 9.50348 9.50019 9.50348C7.31408 9.50348 5.54188 7.73127 5.54188 5.54514C5.54188 3.35902 7.31408 1.58681 9.50019 1.58681Z" fill="#333333" fill-opacity="0.7"/>
                    </g>
                  </svg>
                  <input
                    type="text"
                    name="nick_name"
                    :placeholder="$t('nickname')"
                    value="-"
                    required
                  />
                </div>

                <!--email-->
                <div class="input-group">
                  <label>{{ $t('email') }}<span>*</span></label>
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
                    required
                  />
                </div>

                <!--phone-->
                <div class="input-group">
                  <label>{{ $t('phone') }}<span>*</span></label>
                  <vue-tel-input
                    name="phone"
                    :placeholder="$t('phone')"
                    v-model="form.phone"
                    required
                  ></vue-tel-input>
                </div>

                <!--country-->
                <div class="input-group">
                  <label>{{ $t('country') }}<span>*</span></label>
                  <svg class="svgClass" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="3669413_location_ic_on_icon 1" clip-path="url(#clip0_55_5932)">
                      <path id="Vector" d="M9.49992 1.58334C6.44013 1.58334 3.95825 4.06522 3.95825 7.12501C3.95825 11.2813 9.49992 17.4167 9.49992 17.4167C9.49992 17.4167 15.0416 11.2813 15.0416 7.12501C15.0416 4.06522 12.5597 1.58334 9.49992 1.58334ZM9.49992 9.10418C8.40742 9.10418 7.52075 8.21751 7.52075 7.12501C7.52075 6.03251 8.40742 5.14584 9.49992 5.14584C10.5924 5.14584 11.4791 6.03251 11.4791 7.12501C11.4791 8.21751 10.5924 9.10418 9.49992 9.10418Z" fill="#333333" fill-opacity="0.7"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_55_5932">
                        <rect width="19" height="19" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>

                  <select v-model="form.country" @change="getCities" required>
                    <option disabled value="" selected>
                      {{ $t("country") }}
                    </option>
                    <option
                      v-for="country in countries"
                      :key="country.id"
                      :value="country.id"
                    >
                      {{ country[`name_${locale}`] }}
                    </option>
                  </select>
                </div>

                <!--city-->
                <div class="input-group">
                  <label>{{ $t('city') }}<span>*</span></label>
                  <svg class="svgClass" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="3669413_location_ic_on_icon 1" clip-path="url(#clip0_55_5932)">
                      <path id="Vector" d="M9.49992 1.58334C6.44013 1.58334 3.95825 4.06522 3.95825 7.12501C3.95825 11.2813 9.49992 17.4167 9.49992 17.4167C9.49992 17.4167 15.0416 11.2813 15.0416 7.12501C15.0416 4.06522 12.5597 1.58334 9.49992 1.58334ZM9.49992 9.10418C8.40742 9.10418 7.52075 8.21751 7.52075 7.12501C7.52075 6.03251 8.40742 5.14584 9.49992 5.14584C10.5924 5.14584 11.4791 6.03251 11.4791 7.12501C11.4791 8.21751 10.5924 9.10418 9.49992 9.10418Z" fill="#333333" fill-opacity="0.7"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_55_5932">
                        <rect width="19" height="19" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>

                  <select v-model="form.city" required>
                    <option disabled value="" selected>{{ $t("city") }}</option>
                    <option
                      v-for="city in cities"
                      :key="city.id"
                      :value="city.id"
                    >
                      {{ city[`name_${locale}`] }}
                    </option>
                  </select>
                </div>

                <!--birthdate-->
                <div class="input-group">
                  <label>{{ $t('birthdate') }}<span>*</span></label>
                  <svg class="svgClass" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="8541611_calendar_schedule_event_date_icon 1" clip-path="url(#clip0_55_5938)">
                      <path id="Vector" d="M0 17.2188C0 18.2021 0.91183 19 2.03571 19H16.9643C18.0882 19 19 18.2021 19 17.2188V7.125H0V17.2188ZM13.5714 9.94531C13.5714 9.70039 13.8004 9.5 14.0804 9.5H15.7768C16.0567 9.5 16.2857 9.70039 16.2857 9.94531V11.4297C16.2857 11.6746 16.0567 11.875 15.7768 11.875H14.0804C13.8004 11.875 13.5714 11.6746 13.5714 11.4297V9.94531ZM13.5714 14.6953C13.5714 14.4504 13.8004 14.25 14.0804 14.25H15.7768C16.0567 14.25 16.2857 14.4504 16.2857 14.6953V16.1797C16.2857 16.4246 16.0567 16.625 15.7768 16.625H14.0804C13.8004 16.625 13.5714 16.4246 13.5714 16.1797V14.6953ZM8.14286 9.94531C8.14286 9.70039 8.37187 9.5 8.65179 9.5H10.3482C10.6281 9.5 10.8571 9.70039 10.8571 9.94531V11.4297C10.8571 11.6746 10.6281 11.875 10.3482 11.875H8.65179C8.37187 11.875 8.14286 11.6746 8.14286 11.4297V9.94531ZM8.14286 14.6953C8.14286 14.4504 8.37187 14.25 8.65179 14.25H10.3482C10.6281 14.25 10.8571 14.4504 10.8571 14.6953V16.1797C10.8571 16.4246 10.6281 16.625 10.3482 16.625H8.65179C8.37187 16.625 8.14286 16.4246 8.14286 16.1797V14.6953ZM2.71429 9.94531C2.71429 9.70039 2.9433 9.5 3.22321 9.5H4.91964C5.19955 9.5 5.42857 9.70039 5.42857 9.94531V11.4297C5.42857 11.6746 5.19955 11.875 4.91964 11.875H3.22321C2.9433 11.875 2.71429 11.6746 2.71429 11.4297V9.94531ZM2.71429 14.6953C2.71429 14.4504 2.9433 14.25 3.22321 14.25H4.91964C5.19955 14.25 5.42857 14.4504 5.42857 14.6953V16.1797C5.42857 16.4246 5.19955 16.625 4.91964 16.625H3.22321C2.9433 16.625 2.71429 16.4246 2.71429 16.1797V14.6953ZM16.9643 2.375H14.9286V0.59375C14.9286 0.267188 14.6232 0 14.25 0H12.8929C12.5196 0 12.2143 0.267188 12.2143 0.59375V2.375H6.78571V0.59375C6.78571 0.267188 6.48036 0 6.10714 0H4.75C4.37679 0 4.07143 0.267188 4.07143 0.59375V2.375H2.03571C0.91183 2.375 0 3.17285 0 4.15625V5.9375H19V4.15625C19 3.17285 18.0882 2.375 16.9643 2.375Z" fill="#333333" fill-opacity="0.7"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_55_5938">
                        <rect width="19" height="19" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>

                  <input
                    type="date"
                    name="birthdate"
                    :placeholder="$t('birthdate')"
                    max="2007-12-15"
                    v-model="form.birthdate"
                    required
                  />
                </div>

                <!--interests-->
                <div class="input-group d-none">
                  <label>{{ $t('interests') }}<span>*</span></label>
                  <select v-model="form.interest" required>
                    <option
                      :value="`${category.id}`"
                      v-for="category in categories"
                      :key="category.id">
                      {{ category[`title_${locale}`] }}
                    </option>
                  </select>
                </div>

                <!--password-->
                <div class="input-group">
                  <label>{{ $t('write-password') }}<span>*</span></label>
                  <svg class="svgClass" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="3844443_disable_eye_inactive_see_show_icon">
                      <path id="XMLID_323_" d="M11.6561 14.0423C11.7101 14.0963 11.6881 14.1908 11.615 14.2144C7.28374 15.6015 2.59699 13.3689 1.15586 9.18451C1.11536 9.06638 1.11536 8.93476 1.15586 8.81607C1.5738 7.60276 2.27524 6.53963 3.17411 5.68126C3.20843 5.64863 3.26299 5.64976 3.29618 5.68294L5.71605 8.10282C5.73293 8.11969 5.73911 8.14332 5.73349 8.16638C5.10574 10.6104 7.39174 12.8886 9.82624 12.2693C9.8538 12.2619 9.87968 12.267 9.89993 12.2873C10.1013 12.4881 11.2752 13.6614 11.6561 14.0423Z" fill="#333333" fill-opacity="0.7"/>
                      <path id="XMLID_325_" d="M13.8824 13.0871C15.2358 12.1354 16.2905 10.7927 16.8445 9.18283C16.885 9.06471 16.885 8.93533 16.8445 8.81721C15.724 5.56202 12.5718 3.37502 8.9999 3.37502C7.60546 3.37502 6.27683 3.71083 5.10683 4.31158L2.08508 1.28983C1.86515 1.06989 1.50965 1.06989 1.28971 1.28983C1.06977 1.50977 1.06977 1.86527 1.28971 2.08521L15.9147 16.7102C16.1346 16.9301 16.4901 16.9301 16.7101 16.7102C16.93 16.4903 16.93 16.1348 16.7101 15.9148L13.8824 13.0871ZM8.9999 5.62502C10.8612 5.62502 12.3749 7.13871 12.3749 9.00002C12.3749 9.72789 12.1409 10.4006 11.7477 10.9525L7.04746 6.25221C7.59927 5.85902 8.27202 5.62502 8.9999 5.62502Z" fill="#333333" fill-opacity="0.7"/>
                    </g>
                  </svg>
                  <input
                    type="password"
                    name="password"
                    :placeholder="$t('write-password')"
                    v-model="form.password"
                    required
                  />
                </div>
                <div class="input-group d-none">
                  <!-- <label>تأكيد كلمة المرور</label> -->
                  <!-- <input
                    type="password"
                    name="conf_password"
                    :placeholder="$t('re-write-password')"
                    v-model="form.conf_password"
                    required
                  /> -->
                </div>
                <div class="checkbox-group">
                  <input type="checkbox" name="accept" id="accept" required/>
                  <label for="accept">
                    {{ $t("agree") }}
                    <NuxtLink to="/terms">{{ $t("terms") }}</NuxtLink>
                    {{ $t("and") }}
                    <NuxtLink to="/privacy">{{ $t("privacy-policy") }}</NuxtLink>
                  </label>
                </div>
                <input
                  type="submit"
                  class="register-btn"
                  name="register"
                  :value="$t('register')"
                />

                <span class="dont-have-account">
                  <span style="color: gray">
                    {{ $t("do-you-have-an-account") }}
                  </span>
                  <NuxtLink to="login" style="color:#F2AC4B;">{{ $t("sign-in") }}</NuxtLink>
                </span>
              </form>

              <v-alert :class="msg.message != null ? 'alert alert-danger d-block' : 'd-none'" :type="msg.type">
                {{ msg.message }}
              </v-alert>
              <v-alert
                type="error"
                class="password-error"
                style="display: none; margin-top: 4%">
                {{ $t("password-does-not-match") }}
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
import axios from "axios";

export default {
  middleware: "guest",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      categories: [],
      locale: this.$i18n.locale,
      countries: [],
      cities: [],
      msg: [],
      form: {
        full_name: "",
        nick_name: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        birthdate: "",
        interest: "20",
        password: "",
        conf_password: "",
      },
    };
  },
  async fetch() {
    this.categories = await this.$http.$get(
      "https://backend.yamluck.com/api/get-categories"
    );
    this.countries = await this.$http.$get(
      "https://backend.yamluck.com/api/countries"
    );
  },
  methods: {
    getCities: function () {
      this.$axios
        .$get(`https://backend.yamluck.com/api/cities/${this.form.country}`)
        .then((response) => (this.cities = response))
        .catch((err) => console.log(err));
    },
    submitForm: function () {
      axios
        .post("https://backend.yamluck.com/api/register", this.form)
        .then((res) => {
          this.$router.push({
            name: "login",
          });
        })
        .catch((error) => {
          this.msg = {
            message: this.$t("account-already-registered"),
            type: "error",
          };
        });
    },
  },
};
</script>
<style>
.rightPanelLogin {
  background: #F2AC4B;
}

.leftPanelRegister {
  background: #f8f9fa99;
}

.leftPanelRegister h3 {
  color: #FF7162;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1.80px;
  word-wrap: break-word;
  text-align: center;
}

#register-page .container .side {
  margin-top: 4% !important;
}

.orUseAccount {
  color: gray;
  text-align: center;
  margin-top: 10px;
  font-size: 15px;
  letter-spacing: 0px;
}

#register-page {
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

#register-page .container .side {
  padding: 20px;
  background: white;
  border: 1px solid #2d2d2d0d;
  margin: 5% auto 5% 5%;
  box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
}

.registerForm {
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
  .registerForm {
    margin: 26px 20px 0px 18px;
  }
}

select {
  font-size: 12px;
  color: gray;
  font-weight: 500;
}
.svgClass {
  position: absolute;
  top: 38px;
  left: 8px;
}
</style>
