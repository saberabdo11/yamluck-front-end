<template>
  <v-app :class="$i18n.locale">
    <DashboardHeader />
    <div class="category-page">
      <!-- <div class="heading">
        <div class="container" style="padding: 20px 0px">


          <swiper
            class="swiper"
            :options="swiperOption"
            :slides-per-view="1"
            :space-between="50"
          >
            <swiper-slide
              class="slide"
              v-for="(slide, index) in slides"
              :key="index"
            >
              <div class="sides">
                <div class="side" style="width: 100%">
                  <img
                    :src="`https://backend.yammluck.com/storage/carousels/${slide.image}`"
                    style="width: 100%; height: 300px; object-fit: contain"
                  />
                </div>
                <div class="side">
                  <h1>{{ slide[`heading_${locale}`] }}</h1>
                  <h2 style="font-weight: 400">
                    {{ slide[`sub_heading_${locale}`] }}
                  </h2>
                  <p>
                    {{ slide[`content_${locale}`] }}
                  </p>
                  <a
                    :href="`${slide[`btn_text_${locale}`]}`"
                    v-if="slide[`btn_text_${locale}`] !== ''"
                  >
                    <v-btn
                      outlined
                      text
                      large
                      rounded
                      style="border-color: white; color: white"
                    >
                      {{ slide[`btn_text_${locale}`] }}
                    </v-btn>
                  </a>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div> -->
      <div class="latest-offers">
        <div class="sub-categories">
          <div class="categories">
            <button class="card active">{{ $t("all") }}</button>
            <div v-for="subCat in subCats" :key="subCat.id">
              <NuxtLink
                :to="`${$route.path}/${subCat.id}`"
                style="color: #d1a125"
              >
                <button class="card">
                  {{ subCat[`title_${locale}`] }}
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="offers">
            <h3>{{ $t("latest-offers") }}</h3>
            <div class="cards">
              <div
                class="card-parent"
                v-for="offer in offers.data"
                :key="offer.id"
              >
                <div class="card">
                  <div class="container">
                    <div style="position: relative">
                      <v-dialog width="500">
                        <template v-slot:activator="{ on, attrs }">
                          <button class="profile-pic" v-bind="attrs" v-on="on">
                            <img
                              :src="`${storageURL}/users/${offer.user.pic}`"
                            />
                          </button>
                        </template>
                        <v-card>
                          <v-card-text>
                            <br />
                            <img
                              :src="`${storageURL}/products/product_id_${offer.id}/${offer.preview}`"
                              style="
                                width: 400px;
                                height: 400px;
                                max-width: 100%;
                                margin: 0px auto;
                                display: block;
                                object-fit: cover;
                              "
                            />
                            <br />
                            <div
                              class="modal-buttons"
                              style="
                                display: flex;
                                align-items: center;
                                gap: 20px;
                                justify-content: center;
                              "
                            >
                              <button class="love" style="display: flex">
                                <img
                                  src="/icons/icons8-heart.svg"
                                  style="max-width: 30px"
                                />
                              </button>
                              <button class="share" style="display: flex">
                                <img
                                  src="/icons/icons8-share-rounded.svg"
                                  style="max-width: 30px"
                                />
                              </button>
                              <button
                                class="plus"
                                style="
                                  background: orange;
                                  padding: 4px 11px;
                                  border-radius: 5px;
                                  color: white;
                                  font-size: 22px;
                                  display: flex;
                                  align-items: center;
                                  justify-content: center;
                                "
                              >
                                <span>+</span>
                              </button>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-dialog>
                      <div class="om-title">
                        <span>
                          {{ $t("om") + " : " }}
                        </span>
                        <span>{{ offer.user.full_name }}</span>
                      </div>
                      <div class="yammluck-pic">
                        <img src="/pics/black tree  png.png" class="" />
                      </div>
                    </div>

                    <h3 class="prod-title">{{ offer[`gift_${locale}`] }}</h3>
                    <button
                      class="fav"
                      @click.prevent="addFavs(offer.id)"
                      v-if="!favs.some((fav) => fav.product.id == offer.id)"
                    >
                      <img src="/icons/icons8-heart-outline.svg" />
                    </button>
                    <button
                      class="fav"
                      @click.prevent="deleteFavs(offer.id)"
                      v-else
                    >
                      <img src="/icons/icons8-heart.svg" />
                    </button>
                    <span class="location">
                      {{ $t("location") }} :
                      {{ offer.country[`name_${locale}`] }}
                      <span v-if="offer.city !== '' && offer.city !== null">
                        {{ " - " + offer.city[`name_${locale}`] }}
                      </span>
                    </span>
                    <img
                      :src="`${storageURL}/products/product_id_${offer.id}/${offer.gift_pic}`"
                      class="product-img"
                      lazy="true"
                    />
                    <div class="primary-product">
                      <div class="product-info">
                        <h4 class="product-name">
                          {{ offer[`title_${locale}`] }}
                        </h4>
                        <a :href="`/product/${offer.id}`" style="color: black">
                          <button class="get-it">
                            {{ $t("get-it-and-join-draw") }}
                          </button>
                        </a>
                        <span class="note">
                          {{
                            offer[`conditions_${locale}`].split(",").join("\n")
                          }}
                        </span>
                      </div>
                      <div class="image">
                        <img
                          :src="`${storageURL}/products/product_id_${offer.id}/${offer.pic_one}`"
                          lazy="true"
                        />
                        <p class="price">{{ offer.price }} {{ $t("r.s") }}</p>
                      </div>
                    </div>
                    <div class="progress-bar">
                      <progress
                        :value="offer.curr_subs"
                        :max="offer.max_subs"
                      ></progress>
                    </div>
                  </div>
                </div>
                <NuxtLink
                  :to="`/category/${offer.category_id}/${offer.sub_category_id}/${offer.sub_sub_category_id}`"
                >
                  <span class="similar-offers">
                    <span class="count">{{ offer.similar.length }}</span>
                    {{ $t("similar-offers") }}
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center" style="direction: ltr">
        <v-container>
          <v-row justify="center">
            <v-col cols="8">
              <v-container class="max-width">
                <v-pagination
                  v-model="page"
                  class="my-4"
                  :length="offers.last_page"
                  :total-visible="7"
                  @input="getResults(page)"
                ></v-pagination>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import axios from "axios";
export default {
  name: "IndexPage",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [],
      locale: this.$i18n.locale,
      swiperOption: {
        draggable: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 6000,
          disableOnInteraction: true,
        },
        loop: true,
      },
      offers: [],
      subCats: [],
      favs: [],
      param: this.$route.params.id,
      locale: this.$i18n.locale,
      storageURL: process.env.VUE_APP_STORAGE_URL,
      page: 1,
    };
  },
  async fetch() {
    await this.$http
      .$get(`https://backend.yamluck.com/api/get-offers/${this.param}`)
      .then((succ) => {
        this.offers = succ;
        this.page = succ.current_page;
      })
      .catch();
    this.subCats = await this.$http.$get(
      `https://backend.yamluck.com/api/get-subcategory/${this.param}`
    );
    if (this.$auth.loggedIn) {
      this.favs = await this.$axios.$post(
        "https://backend.yamluck.com/api/favs",
        {
          user: this.$auth.user.email,
        }
      );
    }
  },
  mounted() {
    axios
      .get(`https://backend.yamluck.com/api/carousels/${this.param}`)
      .then((res) => (this.slides = res.data))
      .catch((err) => console.log(err));
  },
  methods: {
    getResults(page) {
      this.$axios
        .$get(
          `https://backend.yamluck.com/api/get-offers/${this.param}?page=${page}`
        )
        .then((result) => {
          this.offers = result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addFavs(id) {
      if (!this.$auth.loggedIn) {
        window.location.href = "/login";
      } else {
        this.$axios
          .$post("https://backend.yamluck.com/api/addFav", {
            user: this.$auth.user.email,
            product_id: id,
          })
          .then((res) => {
            location.reload();
          })
          .catch((err) => {
            alert("This Offer Added Before");
          });
      }
    },
    deleteFavs(id) {
      if (!this.$auth.loggedIn) {
        window.location.href = "/login";
      } else {
        this.$axios
          .$post("https://backend.yamluck.com/api/deleteFav", {
            user: this.$auth.user.email,
            product_id: id,
          })
          .then((res) => {
            location.reload();
          })
          .catch((err) => {
            alert("This Offer Added Before");
          });
      }
    },
  },
};
</script>
