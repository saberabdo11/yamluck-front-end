import colors from "vuetify/es5/util/colors";
import redirectSSL from "redirect-ssl";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      {
        hid: "description",
        name: "description",
        content:
          "يملك هو التطبيق الذي يتيح للجميع فرصة تحقيق الأمنيات الكبيرة كالمساكن والسيارات والمجوهرات وأيضا وسائل الترفيه.",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Yammluck - Fulfill your big wishes",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon-32x32.png" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
      },
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js",
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/style.scss"],

  env: {
    VUE_APP_STORAGE_URL: process.env.VUE_APP_STORAGE_URL,
    VUE_APP_API_URL: process.env.VUE_APP_API_URL,
    VUE_APP_API_KEY: process.env.VUE_APP_API_KEY,
    VUE_APP_FACEBOOK_APP_ID: process.env.VUE_APP_FACEBOOK_APP_ID,
    VUE_APP_GOOGLE_APP_ID: process.env.VUE_APP_GOOGLE_APP_ID,
  },

  globals: {},

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/swiper.js",
    "~/plugins/lazyload.js",
    "~/plugins/moment.js",
    "~/plugins/tel-input.js",
    "~/plugins/lodash.js",
    "~/plugins/momentCountdown.js",
    "~/plugins/themask.js",
    "~/plugins/vue-countdown.js",
    "~/plugins/vue-social-sharing.js",
    "~/plugins/aos.client.js",
  ],

  components: true,

  buildModules: [
    "@nuxtjs/vuetify",
    "@nuxtjs/dotenv",
    "@nuxtjs/google-analytics",
  ],

  googleAnalytics: {
    id: "UA-224926042-1",
  },

  router: {
    // middleware: ["checkPhone"],
  },

  // serverMiddleware: ["redirect-ssl"],

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/i18n",
    "@nuxt/http",
    "@nuxtjs/auth-next",
    "@nuxtjs/proxy",
  ],

  axios: {
    baseURL: "https://backend.yamluck.com/api",
  },

  auth: {
    plugins: [{ src: "~/plugins/provider" }],
    redirect: {
      login: "/login",
      logout: "/",
      home: "/",
      callback: "/login",
    },
    strategies: {
      local: {
        token: {
          property: "token",
          type: false,
          maxAge: 7000,
        },
        endpoints: {
          login: {
            url: "/login",
            method: "post",
          },
          user: {
            url: "/profile",
            method: "post",
          },
          logout: { url: "/logout", method: "delete" },
        },
        user: {
          property: false,
        },
        watchLoggedIn: true,
      },
      facebook: {
        endpoints: {
          userInfo:
            "https://graph.facebook.com/v6.0/me?fields=id,name,email,picture{url}",
        },
        clientId: process.env.VUE_APP_FACEBOOK_APP_ID,
        scope: ["public_profile", "email"],
        token_type: false,
      },
      google: {
        clientId: process.env.VUE_APP_GOOGLE_APP_ID,
        scope: ["profile", "email"],
        codeChallengeMethod: "",
        token_type: false,
        responseType: "token id_token",
      },
    },
  },

  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en.json",
        dir: "ltr",
        name: "English",
      },
      { code: "ar", iso: "ar-EG", file: "ar.json", dir: "rtl", name: "Arabic" },
    ],
    defaultLocale: "ar",
    fallbackLocale: "ar",
    seo: true,
    langDir: "~/locales/",
    strategy: "no_prefix",
    lazy: true,
  },

  vuetify: {
    // customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
    icons: {
      iconfont: "mdi",
    },
  },

  build: {
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: "file-loader",
      });
      if (isDev) {
        config.mode = "development";
      }
    },
  },
};
