<template>
  <footer class="py-3">
    <div class="d-flex align-items-center justify-content-center">
      <div class="w-100 container-footer pt-2">
        <div class="container">
          <div class="row d-flex justify-content-between">

            <!--ROW1--->
            <div class="row">

              <div class="col-6">
                <div style="justify-content: center;display: flex;align-items: center;">
                  <span class="iconSpanFooter">
                    <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="1.6em"
                         viewBox="0 0 448 512">
                      <path
                        d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                    </svg>
                  </span>
                  <p class="pTextFooter">{{ $t('ENJOY') }} <br> {{ $t('SHOPPING') }} </p>
                </div>
              </div>

              <div class="col-6">
                <div style="justify-content: center;display: flex;align-items: center;">
                  <span class="iconSpanFooter">
                    <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="1.6em" viewBox="0 0 640 512">
                      <path
                        d="M200.6 32C205 19.5 198.5 5.8 186 1.4S159.8 3.5 155.4 16L144.7 46.2l-9.9-29.8C130.6 3.8 117-3 104.4 1.2S85 19 89.2 31.6l8.3 25-27.4-20c-10.7-7.8-25.7-5.4-33.5 5.3s-5.4 25.7 5.3 33.5L70.2 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H200.6c-5.4-9.4-8.6-20.3-8.6-32V256c0-29.9 20.5-55 48.2-62c1.8-31 17.1-58.2 40.1-76.1C271.7 104.7 256.9 96 240 96H217.8l28.3-20.6c10.7-7.8 13.1-22.8 5.3-33.5s-22.8-13.1-33.5-5.3L192.5 55.1 200.6 32zM363.5 185.5L393.1 224H344c-13.3 0-24-10.7-24-24c0-13.1 10.8-24 24.2-24c7.6 0 14.7 3.5 19.3 9.5zM272 200c0 8.4 1.4 16.5 4.1 24H272c-26.5 0-48 21.5-48 48v80H416V256h32v96H640V272c0-26.5-21.5-48-48-48h-4.1c2.7-7.5 4.1-15.6 4.1-24c0-39.9-32.5-72-72.2-72c-22.4 0-43.6 10.4-57.3 28.2L432 195.8l-30.5-39.6c-13.7-17.8-35-28.2-57.3-28.2c-39.7 0-72.2 32.1-72.2 72zM224 464c0 26.5 21.5 48 48 48H416V384H224v80zm224 48H592c26.5 0 48-21.5 48-48V384H448V512zm96-312c0 13.3-10.7 24-24 24H470.9l29.6-38.5c4.6-5.9 11.7-9.5 19.3-9.5c13.4 0 24.2 10.9 24.2 24z"/>
                    </svg>
                  </span>
                  <p class="pTextFooter">{{ $t('DAILY') }} <br> {{ $t('GIFTS') }} </p>
                </div>
              </div>

            </div>

            <!--ROW2--->
            <div class="row bg-white mx-auto">

              <div class="col-sm-4">
                <h3 class="footerHeading">{{ $t('aboutus') }}</h3>
                <p>{{ $t('lorem') }}</p>
              </div>

              <div class="col-sm-4">
                <div class="d-flex align-items-center justify-content-center">
                  <a href="#" class="socialsIcons">
                    <img src="../assets/images/social-media-1.png"/>
                  </a>
                  <a href="#" class="socialsIcons">
                    <img src="../assets/images/social-media-2.png"/>
                  </a>
                  <a href="#" class="socialsIcons">
                    <img src="../assets/images/social-media-3.png"/>
                  </a>
                </div>
              </div>

              <div class="col-sm-4">
                <h3 class="footerHeading">{{$t('ourcontacts')}}</h3>
                <p class="footerText">{{$t('alryadh')}}</p>
                <p class="footerText">Yamluck@example.com</p>
                <p class="footerText">+966 123 123 123</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      locale: this.$i18n.locale,
    };
  },
};
</script>

<style>
.container-footer,
.copyright {
  background: #FF7162;
}

.copyright {
  background: #ffc122;
  margin-top: 4rem;
  border-radius: 5px;
}

.iconSpanFooter {
  margin-right: 15px;
  border: 2px solid white;
  border-radius: 50%;
  height: fit-content;
  padding: 11px;
}

.footerHeading {
  padding-top: 10px;
  color: rgba(51, 51, 51, 0.90);
  font-size: 20px;
  font-weight: bold;
}

.footerText {
  color: rgba(51, 51, 51, 0.70);
  font-size: 12px;
  font-weight: 400;
  line-height: 19.55px;
}

.socialsIcons {
  background-color: #FF7162;
  width: 50px;
  border-radius: 50%;
  height: 50px;
  padding: 7px 6px;
  margin: 10px;
}

.socialsIcons img {
  width: 40px;
  text-align: center;
}

.pTextFooter {
  color: white;
  font-weight: bold;
  font-size: 32px;
}

@media screen and (max-width: 767px) {
  .pTextFooter {
    font-size: 17px;
    margin-top: 15px;
  }
}


</style>
