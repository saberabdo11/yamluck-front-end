<template>
  <v-app :class="$i18n.locale">
    <DashboardHeader></DashboardHeader>
    <div class="wallet-page">
      <div class="container">
        <div class="sides">
          <Menu />
          <div class="content" style="display: block">
            <div class="heading">
              <span>{{ $t("interests") }}</span>
            </div>
            <div class="interests">
              <div class="cards">
                <div
                  class="card"
                  :class="{ active: selected === cat.id }"
                  @click="chooseCat(cat.id)"
                  v-for="cat in categories"
                  :key="cat.id"
                >
                  <div style="display: flex; gap: 10px">
                    <div class="icon">
                      <img
                        :src="`https://backend.yamluck.com/storage/cats-icons/${cat.icon}`"
                        :alt="cat[`title_${locale}`]"
                      />
                    </div>
                    <div class="title">
                      {{ cat[`title_${locale}`] }}
                    </div>
                  </div>
                  <button class="checkbox"></button>
                </div>
              </div>
              <button class="save-btn" @click="saveInterest">
                {{ $t("save") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </v-app>
</template>
<script>
import DashboardHeader from "~/components/DashboardHeader.vue";

export default {
  middleware: "auth",
  data() {
    return {
      token: this.$auth.user.token,
      categories: [],
      locale: this.$i18n.locale,
      selected: null,
      interest: [],
    };
  },
  async fetch() {
    this.categories = await this.$http.$get(
      "https://backend.yamluck.com/api/get-categories"
    );
  },
  mounted() {
    // this.interest = JSON.stringify(this.$auth.user.interest);
    // console.log(this.interest);
    // this.$auth.user.interest.forEach((element) => {
    //   console.log(element);
    // });
  },
  methods: {
    chooseCat(id) {
      this.selected = id;
    },
    saveInterest() {
      this.$axios
        .$post(
          "https://backend.yamluck.com/api/updateInterest",
          {
            interest: [this.selected],
          },
          {
            headers: {
              Authorization: this.token,
            },
          }
        )
        .then((result) => {
          alert("Interest updated successfully"), location.reload();
        })
        .catch((err) => console.log(err));
    },
  },
  components: { DashboardHeader },
};
</script>
<style>
@import "~/assets/scss/style.css";
</style>
