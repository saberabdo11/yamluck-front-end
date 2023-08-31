<template>
  <v-app :class="$i18n.locale">
    <SemiHeader />
    <div class="favs">
      <div class="page-title">
        <div>
          <h3>{{ $t("favorites") }} ({{ favs.length }})</h3>
        </div>
        <!-- <div>
          <v-btn color="primary" elevation="2" outlined>
            <v-icon>mdi-notification-clear-all</v-icon> Clear All
          </v-btn>
        </div> -->
      </div>
      <div class="cards">
        <div class="cardd" v-for="fav in favs" :key="fav.id">
          <div style="display: flex; align-items: center; gap: 10px">
            <div class="icon">
              <img
                :src="`https://backend.yammluck.com/storage/products/product_id_${fav.product.id}/${fav.product.pic_one}`"
              />
            </div>
            <div style="display: flex; flex-direction: column; gap: 5px">
              <NuxtLink :to="`/product/${fav.product.id}`">
                <div class="subject">{{ fav.product[`title_${locale}`] }}</div>
              </NuxtLink>
              <div class="content">{{ fav.product.price }} {{ $t("r.s") }}</div>
            </div>
          </div>
          <button @click.prevent="deleteFav(fav.product.id)">
            <v-icon>mdi-delete-forever-outline</v-icon>
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </v-app>
</template>
<script>
import axios from "axios";
import SemiHeader from "~/components/SemiHeader.vue";
export default {
  components: { SemiHeader },
  data() {
    return {
      favs: [],
      locale: this.$i18n.locale,
    };
  },
  mounted() {
    axios
      .post("https://backend.yamluck.com/api/favs", {
        user: this.$auth.user.email,
      })
      .then((res) => {
        this.favs = res.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    deleteFav(id) {
      axios
        .post("https://backend.yamluck.com/api/deleteFav", {
          user: this.$auth.user.email,
          product_id: id,
        })
        .then((res) => {
          alert("Product deleted successfully"), window.location.reload();
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style>
@import "~/assets/scss/style.css";
</style>
