<template>
  <v-app :class="$i18n.locale">
    <Header />
    <div id="login-page">
      <div class="container">
        <div class="side">
          <h3>{{ $t("phone") }}</h3>
          <div class="form">
            <form @submit.prevent="savePhone">
              <div class="input-group">
                <!-- <label>البريد الالكتروني</label> -->
                <vue-tel-input
                  name="phone"
                  v-model="form.phone"
                  required
                ></vue-tel-input>
              </div>
              <input
                type="submit"
                class="login-btn"
                name="login"
                :value="$t('save')"
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
  middleware: "auth",
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      msg: [],
      form: {
        phone: "",
      },
    };
  },
  methods: {
    savePhone() {
      axios
        .post(`${process.env.VUE_APP_API_URL}/update-phone`, this.form, {
          headers: {
            Authorization: this.$auth.user.token,
          },
        })
        .then((success) => {
          location.href = "/verify";
        })
        .catch((err) => {
          this.msg = {
            message: this.$t("phone-taken"),
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
