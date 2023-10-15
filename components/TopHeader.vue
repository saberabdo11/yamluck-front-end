<template>
  <div :class="this.$i18n.locale == 'en' ? 'header' : 'header_ar'">

    <div class="pull-left d-sm-flex d-none">
      <span class="leftInfoDetails border-0">
        <svg fill="#FEC631" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
        <span>+96651681651</span>
      </span>

      <span class="leftInfoDetails border-0">
        <svg fill="#FEC631" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
        <span>inf.yamluck@gmail.com</span>
      </span>

      <span class="leftInfoDetails border-0">
        <svg fill="#FEC631" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
          d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
        <span>Saudia Arabia, Ryadh, Ryad</span>
      </span>
    </div>

    <div class="icons">

      <!---HOME---->
      <NuxtLink class="langBtn" to="/">
        <svg style="margin-right: 0px;" fill="#FEC631" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
          <path
            d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
        </svg>
      </NuxtLink>

      <!---PROFILE---->
      <NuxtLink class="langBtn" to="/profile" v-if="this.$auth.loggedIn">
        <v-icon style="color: #FEC631;">mdi-account</v-icon>
      </NuxtLink>
      <NuxtLink class="langBtn" to="/login" v-else>
        <v-icon style="color: #FEC631;">mdi-account</v-icon>
      </NuxtLink>

      <!---LANGUAGE---->
      <button
        class="langBtn"
        v-if="this.$i18n.locale == 'en'"
        @click="changeLocale('ar')">
        <svg fill="#FEC631" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
          <path
            d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
        </svg>
        <span>ARABIC</span>
      </button>
      <button
        class="langBtn"
        v-else-if="this.$i18n.locale == 'ar'"
        @click="changeLocale('en')">
        <svg fill="#FEC631" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
          <path
            d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
        </svg>
        <span>ENGLISH</span>
      </button>
      <!---LANGUAGE---->

    </div>
  </div>
</template>
<script>
export default {
  setup() {
  },
  methods: {
    //--change lang--//
    changeLocale: function (e) {
      this.$i18n.setLocale(e);
      window.location.reload(true);
    }
  }
};
</script>
<style scoped>
.header {
  padding: 5px 50px 5px 12px !important;
  background: rgb(37, 59, 112);
  height: 48px;
  z-index: 999999999;
  position: relative;
}
.header_ar {
  padding: 5px 9px 5px 12px !important;
  background: rgb(37, 59, 112);
  height: 48px;
  z-index: 999999999;
  position: relative;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header_ar .icons {
  display: flex;
  gap: 15px;
}
.topHeaderLinks {
  color: white;
  font-weight: 600 !important;
}

.langBtn {
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.50196);
  padding: 3px 16px;
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-size: 13px;
  width: max-content;
}

.langBtn:hover {
  color: #253b70;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.72);
}

.langBtn svg{
  margin-right: 9px;
}

.pull-left {
  width: auto;
  display: flex;
  gap: 12px;
}

.leftInfoDetails {
  color: white;
  border: 1px solid #ffffff80;
  padding: 5px 5px;
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-size: 13px;
}

.leftInfoDetails svg {
  margin-right: 9px;
}

</style>
