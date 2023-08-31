<template>
  <!-- <div class="dashboard-header">
     <div class="links">
      <ul>
        <li>
          <NuxtLink to="/">{{ $t("home") }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">{{ $t("products") }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">{{ $t("offers") }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">{{ $t("gifts") }}</NuxtLink>
        </li>
      </ul>
    </div>

    <div class="sidebar">
      <button class="close-btn" @click="closeNav">
        <img src="/icons/icons8-close.svg" />
      </button>
      <ul>
        <li>
          <NuxtLink to="/">{{ $t("home") }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">{{ $t("products") }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">{{ $t("offers") }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">{{ $t("gifts") }}</NuxtLink>
        </li>
      </ul>
    </div>


     <div class="box">
      <div class="lang-login">
        <button class="toggle-btn" @click="openNav">
          <img src="/icons/icons8-circled.svg" />
        </button>
        <button
          @click.prevent="logout"
          style="display: flex"
          v-if="$auth.loggedIn"
        >
          <img src="/icons/icons8-logout.svg" style="max-width: 26px" />
        </button>
        <NuxtLink to="/profile" class="login" v-if="$auth.loggedIn">
          <img
            :src="`${storageURL}/users/${$auth.user.pic}`"
            style="
              width: 35px;
              max-width: 35px;
              height: 35px;
              object-fit: cover;
              border-radius: 50%;
            "
          />
        </NuxtLink>
        <NuxtLink to="/login" class="login" v-else>
          <img src="/icons/icons8-user.svg" />
        </NuxtLink>
        <button
          class="lang"
          v-if="this.$i18n.locale == 'en'"
          @click="changeLocale('ar')"
        >
          <img src="/icons/icons8-saudi-arabia.svg" /> العربية
        </button>
        <button
          class="lang"
          v-else-if="this.$i18n.locale == 'ar'"
          @click="changeLocale('en')"
        >
          <img src="/icons/icons8-great-britain.svg" /> English
        </button>
      </div>
      <div class="s-header">
        <div style="width: 100%">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="cat-btn" v-bind="attrs" v-on="on" elevation="0">
                {{ $t("category") }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="cat in categories" :key="cat.id">
                <v-list-item-title>
                  <nuxt-link :to="`/category/${cat.id}`" style="color: #242424">
                    {{ cat[`title_${locale}`] }}
                  </nuxt-link>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div class="search" style="width: 100%">
          <form method="POST" :action="`/search/${search.input}`">
            <input
              type="text"
              class="search-inp"
              :placeholder="$t('search')"
              v-model="search.input"
            />
            <button type="submit" class="search-btn">
              <img src="/pics/serch icon.png" />
            </button>
          </form>
        </div>
        <div class="shopping" style="width: 100%">
          <NuxtLink to="">
            <img
              src="/icons/icons8-shopping-basket.svg"
              style="max-width: 32px"
            />
          </NuxtLink>
          <NuxtLink to="/favs" v-if="$auth.loggedIn">
            <img src="/icons/icons8-heart.svg" style="max-width: 35px" />
          </NuxtLink>
          <NuxtLink to="/login" v-else>
            <img src="/icons/icons8-heart.svg" style="max-width: 35px" />
          </NuxtLink>
        </div>
      </div>
      <swiper class="swiper" :options="swiperOption" dir="ltr">
        <swiper-slide
          class="slide"
          v-for="(slide, index) in slides"
          :key="index"
        >
          <div
            class="sides"
            style="
              display: flex;
              align-items: center;
              justify-content: center;
              flex-wrap: wrap;
              margin-top: 4%;
              gap: 20px;
            "
          >
            <div
              class="side"
              style="max-width: 600px; width: 600px; height: 300px"
            >
              <img
                :src="`https://backend.yamluck.com/storage/carousels/${slide.image}`"
                style="width: 100%; height: 100%; object-fit: contain"
              />
            </div>

            <div class="side" style="text-align: center">
              <h1 style="font-weight: bold">
                {{ slide[`heading_${locale}`] }}
              </h1>
              <h2 style="font-weight: 400">
                {{ slide[`sub_heading_${locale}`] }}
              </h2>
              <p>
                {{ slide[`content_${locale}`] }}
              </p>
              <a
                :href="`${slide.btn_redirect}`"
                v-if="slide[`btn_text_${locale}`] !== ''"
              >
                <button
                  style="
                    background: rgb(253, 206, 64);
                    color: black;
                    padding: 6px 30px;
                    border-radius: 5px;
                    font-weight: bold;
                  "
                >
                  {{ slide[`btn_text_${locale}`] }}
                </button>
              </a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

  </div> -->
  <nav class="navbar bg-white navbar-expand-lg p-0" :class="$i18n.locale">
    <div class="container">
      <a class="navbar-brand px-3" href="/">
        <img src="../assets/images/logo3.png" width="140px" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <v-icon class="text-black">mdi-menu</v-icon>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
          <li class="nav-item ms-lg-5 fw-bold" style="font-size: 16px">
            <NuxtLink class="nav-link text-black" to="/">{{
              $t("home")
            }}</NuxtLink>
          </li>
          <li class="nav-item ms-lg-5 fw-bold" style="font-size: 16px">
            <NuxtLink class="nav-link text-black" to="/products">{{
              $t("products")
            }}</NuxtLink>
          </li>
          <li class="nav-item ms-lg-5 fw-bold" style="font-size: 16px">
            <NuxtLink class="nav-link text-black" to="/offers">{{
              $t("offers")
            }}</NuxtLink>
          </li>
          <li class="nav-item ms-lg-5 fw-bold" style="font-size: 16px">
            <NuxtLink class="nav-link text-black" to="/gift">{{
              $t("gifts")
            }}</NuxtLink>
          </li>
        </ul>
        <div>
          <div class="d-flex align-item-center">
            <form
              class="d-flex"
              method="POST"
              :action="`/search/${search.input}`"
            >
              <input
                class="form-control py-0 ms-2"
                name="search"
                style="background: #f7f7f7 !important"
                autocomplete="off"
                :placeholder="$t('search')"
                v-model="search.input"
              />
              <button
                type="submit"
                class="rounded-circle ms-2 d-flex align-items-center justify-content-center"
                style="
                  width: 40px;
                  height: 40px;
                  padding: 20px;
                  background: #f7f7f7;
                "
              >
                <v-icon style="font-size: 20px">mdi-magnify</v-icon>
              </button>
            </form>

            <NuxtLink
              to="/carts"
              v-if="$auth.loggedIn"
              class="rounded-circle ms-2 position-relative d-flex align-items-center justify-content-center"
              style="width: 40px; height: 40px; background: #f7f7f7"
            >
              <v-icon style="font-size: 20px">mdi-cart</v-icon>
              <div class="carts-count" v-if="carts.length > 0">
                {{ carts.length }}
              </div>
            </NuxtLink>

            <NuxtLink
              to="/"
              v-else
              class="rounded-circle ms-2 position-relative d-flex align-items-center justify-content-center"
              style="width: 40px; height: 40px; background: #f7f7f7"
            >
              <v-icon style="font-size: 20px">mdi-cart</v-icon>
              <div class="carts-count" v-if="carts.length > 0">
                {{ carts.length }}
              </div>
            </NuxtLink>

            <button
              class="d-flex align-items-center btn p-0 px-2 ms-2"
              style="background: #f7f7f7"
              v-if="this.$i18n.locale == 'en'"
              @click="changeLocale('ar')"
            >
              <img
                src="/icons/icons8-saudi-arabia.svg"
                width="40px"
                height="40px"
              />
            </button>
            <button
              class="d-flex align-items-center btn p-0 px-2 ms-2"
              style="background: #f7f7f7"
              v-else-if="this.$i18n.locale == 'ar'"
              @click="changeLocale('en')"
            >
              <img
                src="/icons/icons8-great-britain.svg"
                width="40px"
                height="40px"
              />
            </button>

            <NuxtLink to="/profile" class="login ms-2" v-if="$auth.loggedIn">
              <img
                :src="`${storageURL}/users/${$auth.user.pic}`"
                style="
                  width: 40px;
                  max-width: 40px;
                  height: 40px;
                  object-fit: cover;
                  border-radius: 50%;
                "
              />
            </NuxtLink>
            <button
              class="rounded-circle ms-2 d-flex align-items-center justify-content-center"
              style="width: 40px; height: 40px; background: #f7f7f7"
              @click="logout"
              v-if="$auth.loggedIn"
            >
              <v-icon style="font-size: 20px">mdi-logout</v-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import axios from "axios";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      locale: this.$i18n.locale,
      storageURL: process.env.VUE_APP_STORAGE_URL,
      categories: [],
      slides: [],
      carts: [],
      users: this.$auth.user,
      search: {
        input: "",
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  async fetch() {
    this.categories = await this.$http.$get(
      "https://backend.yamluck.com/api/get-categories"
    );
    this.carts = await this.$axios.$post(
      "https://backend.yamluck.com/api/carts",
      {
        user: this.$auth.user.id,
      }
    );
  },
  mounted() {
    if (this.$route.path == "/") {
      axios
        .get("https://backend.yamluck.com/api/carousels/0")
        .then((res) => (this.slides = res.data))
        .catch((err) => console.log(err));
    } else {
      axios
        .get(
          `https://backend.yamluck.com/api/carousels/${this.$route.params.id}`
        )
        .then((res) => (this.slides = res.data))
        .catch((err) => console.log(err));
    }
    if (this.$auth.loggedIn) {
      axios
        .post(
          "https://backend.yamluck.com/api/count-notifications",
          {},
          {
            headers: {
              Authorization: this.$auth.user.token,
            },
          }
        )
        .then((result) => {
          this.notifications = result.data;
        })
        .catch((err) => {
          this.notifications = 0;
        });
      axios
        .post("https://backend.yamluck.com/api/favs", {
          user: this.$auth.user.email,
        })
        .then((res) => {
          this.favs = res.data;
        })
        .catch((err) => console.log(err));
    } else {
      this.notifications = 0;
      this.favs = 0;
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      location.href = "/";
    },
    changeLocale: function (e) {
      this.$i18n.setLocale(e);
      window.location.reload(true);
    },
    openNav() {
      document.querySelector(".sidebar").style.display = "flex";
    },
    closeNav() {
      document.querySelector(".sidebar").style.display = "none";
    },
  },
  // async fetch() {
  //   this.limitedCategories = await this.$http.$get(
  //     "https://backend.yammluck.com/api/categories-limited/4"
  //   );
  //   this.categories = await this.$http.$get(
  //     "https://backend.yammluck.com/api/get-categories"
  //   );
  // },
};
</script>

<style>
.navbar {
  background: grey;
}

.carts-count {
  position: absolute;
  background: red;
  color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  top: -10px;
  /* left: 90%; */
  right: 0;
}
</style>
