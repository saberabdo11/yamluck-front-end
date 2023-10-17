<template>
  <v-app :class="$i18n.locale">
    <TopHeader/>
    <DashboardHeader></DashboardHeader>
    <div class="profile-page" style="background: #EDF1F5">
      <div class="container">
        <div class="sides">
          <div class="content border-0 d-block col-sm-9 mx-auto">
            <div class="headingProfile">{{ $t("personal-data") }}</div>
            <Menu/>

            <form
              class="form bg-white "
              enctype="multipart/form-data"
              @submit.prevent="formSubmit">

              <!---CHANGE PIC---->
              <div style="display: flex; justify-content: center">
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

              <!-----full-name----->
              <div class="input-group row col-12 p-1 mt-5">
                <label class="col-sm-3">{{ $t("full-name") }}</label>
                <input
                  type="text"
                  class="col-sm-8"
                  name="full_name"
                  id="full-name"
                  v-model="form.full_name"
                />
              </div>

              <!-----email----->
              <div class="input-group row col-12 p-1">
                <label class="col-sm-3">{{ $t("email") }}</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="col-sm-8"
                  v-model="form.email"
                />
              </div>

              <!-----birthdate----->
              <div class="input-group row col-12 p-1">
                <label class="col-sm-3">{{ $t("birthdate") }}</label>
                <input
                  type="date"
                  name="birthdate"
                  id="birthdate"
                  class="col-sm-8"
                  v-model="form.birthdate"
                />
              </div>

              <!-----phone----->
              <div class="input-group row col-12 p-1">
                <label class="col-sm-3">{{ $t("phone") }}</label>
                <div class="col-sm-8"
                     style="display: flex; gap: 10px; align-items: center">
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
              <input type="submit" class="save-btn" :value="$t('save')"/>
              <v-alert v-if="msg.message" :type="msg.type" style="margin-top: 4%">
                {{ msg.message }}
              </v-alert>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </v-app>
</template>
<script>
import axios from "axios";
import DashboardHeader from "~/components/DashboardHeader.vue";
import TopHeader from "~/components/TopHeader.vue";

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
  components: {DashboardHeader, TopHeader},
};
</script>
<style scoped>
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

.headingProfile {
  color: rgba(51, 51, 51, 0.90);
  font-size: 21px;
  font-weight: 600;
  text-align: center;
}
</style>
