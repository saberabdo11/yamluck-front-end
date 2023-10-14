<template>
  <nav class="navbar bg-white navbar-expand-lg p-0" :class="$i18n.locale">
    <div class="container">
      <!--LOGO-->
      <a class="navbar-brand px-3" href="/">
        <img src="../assets/images/newLogo.png" width="140px" alt=""/>
      </a>

      <!--TOGGLER BTN-->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <v-icon class="text-black">mdi-menu</v-icon>
      </button>

      <!--REAL MENU-->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="col-8 navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
          <li>
            <NuxtLink class="navItem active" to="/">{{ $t("home") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="navItem" to="/products">{{ $t("products") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="navItem" to="/offers">{{ $t("offers") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="navItem" to="/gift">{{ $t("gifts") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink class="navItem" to="/gift">{{ $t("finished Rooms") }}</NuxtLink>
          </li>
        </ul>


        <div>
          <div class="d-flex align-item-center rightBtnActions">
            <form
              style="    display: none !important;"
              class="d-flex d-none"
              method="POST"
              :action="`/search/${search.input}`">
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
                style="width: 40px; height: 40px; padding: 20px; background: #f7f7f7;">
                <v-icon style="font-size: 20px">mdi-magnify</v-icon>
              </button>
            </form>


            <!---CART---->
            <NuxtLink
              to="/carts" v-if="$auth.loggedIn"
              class="roundedBtns rounded-circle ms-2 position-relative d-flex align-items-center justify-content-center">
              <v-icon style="font-size: 20px">mdi-cart</v-icon>
              <div class="carts-count" v-if="carts.length > 0">
                {{ carts.length }}
              </div>
            </NuxtLink>
            <NuxtLink
              to="/login" v-else
              class="roundedBtns rounded-circle ms-2 position-relative d-flex align-items-center justify-content-center">
              <v-icon style="font-size: 20px">mdi-cart</v-icon>
            </NuxtLink>

            <!---SEARCH---->
            <button
              class="roundedBtns rounded-circle ms-2 position-relative d-flex align-items-center justify-content-center">
              <v-icon style="font-size: 20px">mdi-magnify</v-icon>
            </button>

            <!---FAV---->
            <NuxtLink
              to="/favs" v-if="$auth.loggedIn"
              class="roundedBtns rounded-circle ms-2 position-relative d-flex align-items-center justify-content-center">
              <svg fill="white" width="22px" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/login" v-else
              class="roundedBtns rounded-circle ms-2 position-relative d-flex align-items-center justify-content-center">
              <svg fill="white" width="22px" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
              </svg>
            </NuxtLink>

            <NuxtLink to="/profile" class="login ms-2" v-if="$auth.loggedIn">
              <img class="profileFav" :src="`${storageURL}/users/${$auth.user.pic}`"/>
            </NuxtLink>
            <button
              class="rounded-circle ms-2 d-flex align-items-center justify-content-center"
              style="width: 40px; height: 40px; background: #f7f7f7"
              @click="logout"
              v-if="$auth.loggedIn">
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
import {Swiper, SwiperSlide} from "vue-awesome-swiper";
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

    if (this.$auth.user) {
      this.carts = await this.$axios.$post("https://backend.yamluck.com/api/carts", {
          user: this.$auth.user.id,
        }
      );
    } else
      this.carts = 0;

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
  background: #00ca5a;
  font-weight: bold;
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

.navItem {
  color: #2B3C6B !important;
  font-size: 19px;
  font-weight: 600 !important;
  word-wrap: break-word;
  letter-spacing: 1.5px;
  overflow: hidden;
  padding: 6px 20px;
}

.navItem:hover {
  color: #FF7162 !important;
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid #FF7162;
  font-weight: 900 !important;
}

.navItem.active {
  color: #FF7162;
  border-bottom: 2px solid #FF7162;
  font-weight: 700 !important;
}

ul.navbar-nav {
  display: flex;
}

.profileFav {
  width: 40px;
  max-width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
}

.roundedBtns {
  padding: 9px;
  background: #FEC631;
}

.roundedBtns svg, .roundedBtns i {
  fill: white !important;
  color: white !important;
}

.rightBtnActions {
  gap: 7px;
  margin-right: 21px;
}

@media screen and (max-width: 768px) {
  .navbar-toggler {
    border: 1px solid #2d2d2d2d !important;
  }

  ul.navbar-nav li {
    height: 49px;
    text-align: center !important;
  }

  .rightBtnActions {
    background: #e6e6e6;
    padding: 20px 13px;
    margin: auto;
  }
}
</style>
