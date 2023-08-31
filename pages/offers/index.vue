<template>
  <div>
    <DashboardHeader></DashboardHeader>
    <section class="latest-offers mt-5">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div
            v-for="(offer, index) in limitedOffers"
            class="col-12 col-lg-4 mt-3 offers-col"
            :key="offer.id"
          >
            <div
              class="mb-2 d-flex justify-content-between"
              v-if="offer.distinct != null"
            >
              <img
                :src="`https://backend.yamluck.com/public/storage/logos/${offer.distinct.image}`"
                style="width: 40%"
                class="rounded"
              />
              <div class="user-of-offer" style="transform: translate(14%, 50%)">
                <a
                  :href="`/offers/${offer.distinct.user.id}`"
                  class="text-black"
                >
                  <div class="d-flex align-items-center">
                    <span style="font-size: 11px" class="fw-bold">{{
                      offer.distinct.user.full_name
                    }}</span>
                    <img
                      :src="`${storageURL}/users/${offer.distinct.user.pic}`"
                      class="user-image"
                    />
                  </div>
                </a>
              </div>
            </div>

            <!-- This Div for style  -->
            <div
              class="mb-2 d-flex justify-content-between"
              style="visibility: hidden"
              v-else
            >
              <img
                src="../../assets/images/logo.png"
                style="width: 40%"
                class="rounded"
              />
              <div class="user-of-offer" style="transform: translate(14%, 50%)">
                <div class="d-flex align-items-center">
                  <span style="font-size: 11px" class="fw-bold"> Yamluck </span>
                  <img src="../../assets/images/fav.png" class="user-image" />
                </div>
              </div>
            </div>
            <!-- This Div for style  -->

            <div class="offer-body">
              <div class="offer-image text-center pt-5">
                <h5>{{ offer[`gift_${locale}`] }}</h5>
                <picture>
                  <source
                    :srcset="`${storageURL}/products/product_id_${offer.id}/${offer.preview}`"
                  />
                  <source
                    :srcset="`${storageURL}/products/product_id_${offer.id}/${offer.preview}`"
                  />
                  <img
                    :src="`${storageURL}/products/product_id_${offer.id}/${offer.preview}`"
                    @error="
                      (error) => {
                        error.target.style.display = 'none';
                      }
                    "
                  />
                  <video
                    :src="`${storageURL}/products/product_id_${offer.id}/${offer.preview}`"
                    autoplay
                    loop
                    @error="
                      (error) => {
                        error.target.style.display = 'none';
                      }
                    "
                  />
                </picture>
              </div>

              <div class="latest-offer-info d-flex px-3">
                <div class="related-product">
                  <img
                    :src="`${storageURL}/products/product_id_${offer.id}/${offer.pic_one}`"
                    class="related-product-img"
                  />
                  <h6 class="text-center">{{ offer[`title_${locale}`] }}</h6>
                </div>
                <div class="related -product-info" style="width: 100%">
                  <div
                    class="progress-offer mt-2 d-flex ms-2 align-items-center"
                  >
                    <div
                      class="progress"
                      role="progressbar"
                      aria-label="Example with label"
                      :aria-valuenow="(offer.curr_subs / offer.max_subs) * 100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 55%"
                    >
                      <div
                        class="progress-bar"
                        :style="{
                          width: `${(offer.curr_subs / offer.max_subs) * 100}%`,
                        }"
                      >
                        {{ offer.max_subs - offer.curr_subs }}
                      </div>
                    </div>
                    <span class="ms-2">{{ offer.max_subs }}</span>
                  </div>
                  <p
                    :class="['mt-2', { 'text-end': locale == 'ar' }]"
                    style="font-size: 14px"
                  >
                    {{ offer[`details_${locale}`] }}
                  </p>
                  <div :class="[{ 'text-end': locale == 'ar' }]">
                    <a
                      :href="`/product/${offer.id}`"
                      class="btn btn-dark text-white px-4 rounded-pill mt-2"
                      style="font-size: 11px"
                    >
                      {{ $t("get-it-and-join-draw") }}
                    </a>
                  </div>
                </div>
              </div>

              <div class="offer-links p-2 text-center mt-2">
                <a
                  class="ms-2"
                  @click="share(offer.id, offer[`title_${locale}`])"
                >
                  <img
                    src="../../assets/images/upload.png"
                    width="40px"
                    height="40px"
                    style="border-radius: 50%"
                    alt=""
                  />
                </a>
                <a
                  href="#"
                  class="ms-2"
                  @click.prevent="addFavs(offer.id)"
                  v-if="!favs.some((fav) => fav.product.id == offer.id)"
                >
                  <img
                    src="../../assets/images/heart.png"
                    width="40px"
                    height="40px"
                    style="border-radius: 50%"
                    alt=""
                  />
                </a>
                <a
                  href="#"
                  class="ms-2"
                  @click.prevent="addFavs(offer.id)"
                  v-if="!favs.some((fav) => fav.product.id == offer.id)"
                >
                  <img
                    src="../../assets/images/list.png"
                    width="40px"
                    height="40px"
                    style="border-radius: 50%"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import DashboardHeader from "~/components/DashboardHeader.vue";
import Footer from "~/components/Footer.vue";

export default {
  data() {
    return {
      offers: [],
      favs: [],
      limitedOffers: [],
      locale: this.$i18n.locale,
      storageURL: process.env.VUE_APP_STORAGE_URL,
      offersArray: [],
      swiperOption: {
        draggable: true,
        navigation: {
          nextEl: ".carousel-control-next",
          prevEl: ".carousel-control-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 35,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
        autoplay: {
          delay: 7000,
          disableOnInteraction: true,
        },
      },
    };
  },
  async fetch() {
    // this.ad = await this.$http.$get("https://backend.yammluck.com/api/get-ad");
    if (this.$auth.loggedIn) {
      // this.limitedOffers = await this.$axios.$post(
      //   "https://backend.yammluck.com/api/offers/10",
      //   {},
      //   {
      //     headers: {
      //       Authorization: this.$auth.user.token,
      //     },
      //   }
      // );
      this.favs = await this.$axios.$post(
        "https://backend.yamluck.com/api/favs",
        {
          user: this.$auth.user.email,
        }
      );
    }
    const response = await this.$axios.$get(
      "https://backend.yamluck.com/api/products"
    );
    this.limitedOffers = response;
    // this.offers = await this.$axios.$get(
    //   "https://backend.yamluck.com/api/latest-offers"
    // );
    // this.offersArray = Object.keys(this.offers);
  },
  methods: {
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
    share(id, title) {
      navigator
        .share({
          title: `${title}`,
          url: `https://yamluck.com/product/${id}`,
        })
        .then(() => console.log("Successful share"))
        .catch(console.error);
    },
  },
  components: { DashboardHeader, Footer },
};
</script>

<style>
@media screen and (max-width: 767px) {
  .offers-col {
    max-width: 90%;
  }
}
</style>
