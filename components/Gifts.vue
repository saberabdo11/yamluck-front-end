<template>
  <section
    data-aos="fade-left"
    data-aos-easing="ease-in-out-cubic"
    class="latest-offers mt-5">
    <div class="container mt-5 p-0 m-0 mx-auto">
      <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 210" version="1.1"
           xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(254, 198, 49, 0.2)" offset="0%"></stop>
            <stop stop-color="rgba(255, 185, 0, 0.3411764705882353)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)"
              d="M0,189L21.8,157.5C43.6,126,87,63,131,49C174.5,35,218,70,262,91C305.5,112,349,119,393,129.5C436.4,140,480,154,524,147C567.3,140,611,112,655,105C698.2,98,742,112,785,119C829.1,126,873,126,916,105C960,84,1004,42,1047,52.5C1090.9,63,1135,126,1178,126C1221.8,126,1265,63,1309,63C1352.7,63,1396,126,1440,126C1483.6,126,1527,63,1571,59.5C1614.5,56,1658,112,1702,115.5C1745.5,119,1789,70,1833,56C1876.4,42,1920,63,1964,91C2007.3,119,2051,154,2095,168C2138.2,182,2182,175,2225,161C2269.1,147,2313,126,2356,112C2400,98,2444,91,2487,105C2530.9,119,2575,154,2618,157.5C2661.8,161,2705,133,2749,122.5C2792.7,112,2836,119,2880,119C2923.6,119,2967,112,3011,94.5C3054.5,77,3098,49,3120,35L3141.8,21L3141.8,210L3120,210C3098.2,210,3055,210,3011,210C2967.3,210,2924,210,2880,210C2836.4,210,2793,210,2749,210C2705.5,210,2662,210,2618,210C2574.5,210,2531,210,2487,210C2443.6,210,2400,210,2356,210C2312.7,210,2269,210,2225,210C2181.8,210,2138,210,2095,210C2050.9,210,2007,210,1964,210C1920,210,1876,210,1833,210C1789.1,210,1745,210,1702,210C1658.2,210,1615,210,1571,210C1527.3,210,1484,210,1440,210C1396.4,210,1353,210,1309,210C1265.5,210,1222,210,1178,210C1134.5,210,1091,210,1047,210C1003.6,210,960,210,916,210C872.7,210,829,210,785,210C741.8,210,698,210,655,210C610.9,210,567,210,524,210C480,210,436,210,393,210C349.1,210,305,210,262,210C218.2,210,175,210,131,210C87.3,210,44,210,22,210L0,210Z"></path>
      </svg>
      <div class="row m-0 mx-auto GiftsContainer">
        <h3 class="ourGifts">
          <span class="bullet"></span>
          {{ $t('ourGifts') }}
          <span class="bullet" style="position: absolute !important;right: 3px !important;"></span>
          <span class="bullet"
                style="position: absolute !important; right: 276px !important; bottom: 218px; background: #87ebff;"></span>
          <span class="bullet"
                style="position: absolute !important; left: 225px !important; bottom: 318px; background: #a173f4;"></span>
          <span class="bullet"
                style="position: absolute !important; left: 18px !important; bottom: 118px; background: #2bf497b5;"></span>
          <span class="bullet"
                style="position: absolute !important; bottom: 18px; right: 561px; background: #fe317d9c;"></span>
        </h3>

        <div class="row">
          <a v-for="(offer,index) in offers"
             :key="offer.id"
             v-if="index < 4"
             :href="`/product/${offer.id}`"
             class="col-md-3 col-sm-6 p-2 pb-5">
            <div class="realBox text-center">
              <div v-if="index == 2" class="ranOut alert alert-warning">Ran Out</div>
              <img :src="`${storageURL}/products/product_id_${offer.id}/${offer.gift_pic}`" class="img-fluid">
              <p class="pImage">{{ offer[`gift_${locale}`] }}</p>
            </div>
          </a>
        </div>
      </div>


    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      storageURL: process.env.VUE_APP_STORAGE_URL,
      offers: [],
      locale: this.$i18n.locale,
    };
  },
  async fetch() {
    this.offers = await this.$axios.$get(
      "https://backend.yamluck.com/api/products"
    );
  },
};
</script>

<style scoped>
.GiftsContainer {
  background: #fec63133;
  padding-bottom: 50px;
  margin-bottom: 50px !important;
}

.ourGifts {
  margin-bottom: 30px;
  color: #2B3C6B;
  font-size: 40px;
  text-align: center;
  font-weight: 600;
}

.bullet {
  width: 40px;
  height: 40px;
  opacity: 0.50;
  background: #FEC631;
  border-radius: 9999px;
  position: relative;
  display: inline-block;
  right: -2px;
}

.realBox {
  height: 200px;
}

.realBox img {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  margin-top: 20px;
}

.pImage {
  color: rgba(0, 0, 0, 0.70);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1.10px;
  margin-top: 12px;
}

.ranOut {
  background: linear-gradient(#FFBC5F, #FF9400);
  color: #2B3C6B;
  font-size: 22px;
  font-weight: 600;
  width: -moz-fit-content;
  width: fit-content;
  position: absolute;
  transform: rotate(338deg);
  padding: 3px 29px;
}
</style>
