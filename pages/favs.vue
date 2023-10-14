<template>
  <v-app :class="$i18n.locale">
    <TopHeader/>
    <div class="container pb-4" style="background: #F3F6F9">
      <div class="favs">

        <div class="page-title">
          <div class="col-12 d-flex justify-content-between">
            <h3 class="favHeading">{{ $t("favorites") }} ({{ favs.length }})</h3>
            <a class="btn btn-warning font-weight-bold text-white rounded border"
               style="background: #F2AC4B;" href="#">Continue Shopping</a>
          </div>
        </div>

        <div class="cards" style="height: fit-content; margin-bottom: 19px;">
          <table class="text-center d-none d-sm-block">
            <thead>
            <tr class="border-bottom" style="height: 54px; color: gray;border-color:#2d2d2d2d !important;">
              <th>#</th>
              <th>Products</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(fav,index) in favs" :key="fav.id" class="border-bottom"
                style="border-color:#2d2d2d2d !important;">
              <td>{{ ++index }}</td>
              <td style="width: 157px;">
                <NuxtLink :to="`/product/${fav.product.id}`">
                  <img class="favImg"
                       :src="`https://backend.yamluck.com/storage/products/product_id_${fav.product.id}/${fav.product.pic_one}`"/>
                </NuxtLink>
              </td>
              <td style="width: 177px;">
                <NuxtLink :to="`/product/${fav.product.id}`">
                  <span style="color:#333333E5;font-weight: bold;font-size: 20px;">
                    {{ fav.product[`title_${locale}`] }}
                  </span>
                  <br>
                  <span style="color:#333333;font-size: 18px;">{{ fav.product.price }} SAR</span> <br>
                  <span style="color:#F2AC4B;font-weight: bold;font-size: 18px;">{{ fav.product.price }} Item</span>
                </NuxtLink>
              </td>
              <td style="color: #F2AC4B;font-weight: bold;font-size: 16px;">SAR 500</td>
              <td>
                <button style="font-size: 12px; font-weight: bold;"
                        class="btn btn-danger rounded border text-white p-1 pr-3 pl-3"
                        @click.prevent="deleteFav(fav.product.id)">
                  remove
                </button>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="row mobileView d-flex d-sm-none" v-for="(fav,index) in favs" :key="fav.id">
            <div class="col-4">
              <NuxtLink :to="`/product/${fav.product.id}`">
                <img class="img-fluid" style="max-height: 115px !important;"
                     :src="`https://backend.yamluck.com/storage/products/product_id_${fav.product.id}/${fav.product.pic_one}`"/>
              </NuxtLink>
            </div>
            <div class="col-8 d-flex justify-content-between">
              <NuxtLink :to="`/product/${fav.product.id}`">
                  <span style="color:#333333E5;font-weight: bold;font-size: 20px;">
                    {{ fav.product[`title_${locale}`] }}
                  </span>
                <br>
                <span style="color:#333333;font-size: 18px;">{{ fav.product.price }} SAR</span> <br>
                <span style="color:#F2AC4B;font-weight: bold;font-size: 18px;">{{ fav.product.price }} Item</span>
              </NuxtLink>
              <button style="font-size: 12px; font-weight: bold;"
                      class="btn btn-danger rounded border mobileViewBtn text-white p-1 pr-3 pl-3"
                      @click.prevent="deleteFav(fav.product.id)">
                remove
              </button>
            </div>
          </div>
        </div>
        <a class="btn btn-warning font-weight-bold text-white rounded border"
           style="background: #1DC3BF;width: fit-content;float: right;" href="#">Proceed To Checkout</a>
      </div>
    </div>
    <Footer/>
  </v-app>
</template>
<script>
import axios from "axios";
import SemiHeader from "~/components/SemiHeader.vue";
import DashboardHeader from "~/components/DashboardHeader";

export default {
  components: {DashboardHeader, SemiHeader},
  data() {
    return {
      favs: [],
      locale: this.$i18n.locale,
    };
  },
  mounted() {
    axios
      .post("https://backend.yamluck.com/api/favs", {
        user: this.$auth.user.email
      }).then((res) => {
      this.favs = res.data;
    }).catch((err) => console.log(err));
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
.favHeading {
  color: rgba(51, 51, 51, 0.90);
  font-size: 21px;
  font-weight: 700;
  letter-spacing: 1.05px;
  word-wrap: break-word
}

.favImg {
  height: 91px;
  border-radius: 14px;
  margin: 8px;
}

.mobileView {
  background: white;
  border: 1px solid rgba(45,45,45,0.07059);
  margin: -7px 6px;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
  border-radius: 7px;
}

.mobileViewBtn {
  font-size: 12px;
  font-weight: bold;
  height: fit-content;
  top: 50px;
  position: relative;
}
</style>
