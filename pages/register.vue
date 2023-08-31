<template>
  <v-app :class="$i18n.locale">
    <Header />
    <div id="register-page">
      <div class="container">
        <div class="side">
          <h3>{{ $t("register") }}</h3>
          <div class="form">
            <form @submit.prevent="submitForm">
              <div class="input-group">
                <!-- <label>الاسم كاملاً</label> -->
                <input
                  type="text"
                  name="full_name"
                  :placeholder="$t('full-name')"
                  v-model="form.full_name"
                  required
                />
              </div>
              <div class="input-group">
                <!-- <label>الاسم المستعار</label> -->
                <input
                  type="text"
                  name="nick_name"
                  :placeholder="$t('nickname')"
                  v-model="form.nick_name"
                  required
                />
              </div>
              <div class="input-group">
                <!-- <label>البريد الالكتروني</label> -->
                <input
                  type="email"
                  name="email"
                  :placeholder="$t('email')"
                  v-model="form.email"
                  required
                />
              </div>
              <div class="input-group">
                <!-- <label>رقم الهاتف</label> -->
                <vue-tel-input
                  name="phone"
                  v-model="form.phone"
                  required
                ></vue-tel-input>
              </div>
              <div class="input-group">
                <!-- <label>الدولة</label> -->
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
              <div class="input-group">
                <!-- <label>المدينة</label> -->
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
              <div class="input-group">
                <!-- <label>العمر</label> -->
                <input
                  type="date"
                  name="birthdate"
                  max="2007-12-15"
                  v-model="form.birthdate"
                  required
                />
              </div>
              <div class="input-group">
                <!-- <label>الاهتمامات</label> -->
                <select v-model="form.interest" required>
                  <option disabled value="" selected>
                    {{ $t("interests") }}
                  </option>
                  <option
                    :value="`${category.id}`"
                    v-for="category in categories"
                    :key="category.id"
                  >
                    {{ category[`title_${locale}`] }}
                  </option>
                </select>
              </div>
              <div class="input-group">
                <!-- <label>كلمة المرور</label> -->
                <input
                  type="password"
                  name="password"
                  :placeholder="$t('write-password')"
                  v-model="form.password"
                  required
                />
              </div>
              <div class="input-group">
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
                <input type="checkbox" name="accept" id="accept" required />
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
            </form>
          </div>
          <span class="dont-have-account">
            <span style="color: white">
              {{ $t("do-you-have-an-account") }}
            </span>
            <NuxtLink to="login">{{ $t("sign-in") }}</NuxtLink>
          </span>
          <br />
          <div class="or-login-with">
            <div class="social">
              <button class="facebook" @click="$auth.loginWith('facebook')">
                <v-icon>mdi-facebook</v-icon>
                {{ $t("register-via-facebook") }}
              </button>
              <button class="google" @click="$auth.loginWith('google')">
                <v-icon>mdi-google</v-icon>
                {{ $t("register-via-google") }}
              </button>
            </div>
          </div>

          <v-alert
            :type="msg.type"
            style="margin-top: 4%; background: transparent"
          >
            {{ msg.message }}
          </v-alert>
          <v-alert
            type="error"
            class="password-error"
            style="display: none; margin-top: 4%"
          >
            {{ $t("password-does-not-match") }}
          </v-alert>
        </div>
      </div>
    </div>
    <Footer />
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
        interest: "",
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
@import "~/assets/scss/style.css";
</style>
