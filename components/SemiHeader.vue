<template>
  <div class="dashboard-header">

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

    <div class="box" style="min-height: 0; background: transparent">
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
    </div>

  </div>
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
  },
  mounted() {
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
      this.$router.push({
        path: "/",
      });
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
};
</script>
