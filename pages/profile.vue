<template>
  <v-app :class="$i18n.locale">
    <DashboardHeader></DashboardHeader>
    <div class="profile-page">
      <div class="container">
        <div class="sides">
          <Menu />
          <div class="content" style="display: block">
            <div class="heading">{{ $t("personal-data") }}</div>
            <form
              class="form"
              enctype="multipart/form-data"
              @submit.prevent="formSubmit"
            >
              <div style="display: flex; align-items: center">
                <div class="change-pic">
                  <label for="file-input">
                    <img
                      :src="`${storageURL}/users/${$auth.user.pic}`"
                      style="
                        width: 120px;
                        height: 120px;
                        border-radius: 50%;
                        object-fit: cover;
                      "
                      class="profile-pic"
                    />
                  </label>
                  <input
                    type="file"
                    name="pic"
                    id="file-input"
                    style="display: none"
                    accept="image/*"
                    @change="changePic"
                  />
                </div>
              </div>
              <div class="input-group">
                <label for="full-name">{{ $t("full-name") }}</label>
                <input
                  type="text"
                  name="full_name"
                  id="full-name"
                  v-model="form.full_name"
                />
              </div>
              <div class="input-group">
                <label for="email">{{ $t("email") }}</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  v-model="form.email"
                />
              </div>
              <div class="input-group">
                <label for="birthdate">{{ $t("birthdate") }}</label>
                <input
                  type="date"
                  name="birthdate"
                  id="birthdate"
                  v-model="form.birthdate"
                />
              </div>
              <div class="input-group">
                <label for="phone">{{ $t("phone") }}</label>
                <div style="display: flex; gap: 10px; align-items: center">
                  <vue-tel-input
                    name="phone"
                    id="phone"
                    style="border: none; border-radius: 0; width: 100%"
                    v-model="form.phone"
                  ></vue-tel-input>
                  <v-icon
                    v-if="this.$auth.user.verified == 1"
                    style="color: #4a934a"
                    title="Verified"
                  >
                    mdi-check-decagram
                  </v-icon>
                  <a href="/verify" v-else>
                    <v-icon style="color: #ed4337" title="Unverified">
                      mdi-alert-octagram
                    </v-icon>
                  </a>
                </div>
              </div>
              <input type="submit" class="save-btn" :value="$t('save')" />
              <v-alert :type="msg.type" style="margin-top: 4%">
                {{ msg.message }}
              </v-alert>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </v-app>
</template>
<script>
import axios from "axios";
import DashboardHeader from "~/components/DashboardHeader.vue";
export default {
  middleware: "auth",
  data() {
    return {
      profile: [],
      msg: [],
      token: this.$auth.user.token,
      file: "",
      file_name: "",
      storageURL: process.env.VUE_APP_STORAGE_URL,
      loginStrategy: "",
      loader: null,
      loading: false,
      form: {
        full_name: this.$auth.user.full_name,
        email: this.$auth.user.email,
        phone: this.$auth.user.phone,
        birthdate: this.$auth.user.birthdate,
      },
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
    },
  },
  methods: {
    changePic(e) {
      if (e.target.files[0].size > 1005000) {
        alert("Image is too big!");
        document.querySelector("#file-input").value = null;
        e.value = "";
      } else {
        this.file = e.target.files[0];
      }
    },
    formSubmit() {
      if (this.file !== "") {
        this.loader = "loading";
        let data = new FormData();
        data.append("file", this.file);
        axios
          .post("https://backend.yamluck.com/api/change-pic", data, {
            headers: {
              "content-type": "multipart/form-data",
              Authorization: this.token,
            },
          })
          .then()
          .catch((err) => console.log(err));
        this.$axios
          .$post("https://backend.yamluck.com/api/edit-profile", this.form, {
            headers: {
              Authorization: this.token,
            },
          })
          .then((response) => {
            this.msg = {
              message: this.$t("profile-updated"),
              type: "success",
            };
          })
          .catch(
            (err) =>
              (this.msg = {
                message: this.$t("something-went-wrong"),
                type: "error",
              })
          );
      } else {
        this.$axios
          .$post("https://backend.yamluck.com/api/edit-profile", this.form, {
            headers: {
              Authorization: this.token,
            },
          })
          .then(
            (response) =>
              (this.msg = {
                message: this.$t("profile-updated"),
                type: "success",
              })
          )
          .catch(
            (err) =>
              (this.msg = {
                message: this.$t("something-went-wrong"),
                type: "error",
              })
          );
      }
    },
  },
  components: { DashboardHeader },
};
</script>
<style scroped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.theme--dark.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: #272727 !important;
}
</style>
