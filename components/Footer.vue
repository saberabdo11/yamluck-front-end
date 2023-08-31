<template>
  <footer class="py-3">
    <div class="d-flex align-items-center justify-content-center">
      <div class="container-footer p-3">
        <div class="container">
          <div class="row d-flex justify-content-between">
            <div class="col-12 col-lg-6">
              <div class="text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <a href="#">
                    <img
                      src="../assets/images/social-media-1.png"
                      width="40px"
                      class="ms-2"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="../assets/images/social-media-2.png"
                      width="40px"
                      class="ms-2"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="../assets/images/social-media-3.png"
                      width="40px"
                      class="ms-2"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="../assets/images/social-media-4.png"
                      width="40px"
                      class="ms-2"
                    />
                  </a>
                </div>
                <p class="text-white mt-4" style="font-size: 15px">
                  {{ $t("footer-p") }}
                </p>

                <div class="d-flex align-items-center justify-content-center">
                  <a href="#">
                    <img
                      src="../assets/images/app1.png"
                      width="100px"
                      class="ms-2"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="../assets/images/app2.png"
                      width="100px"
                      class="ms-2"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div :class="['col-12 col-lg-6', { 'text-end': locale == 'ar' }]">
              <div>
                <ul class="list-unstyled">
                  <li class="mt-2">
                    <a href="#" class="text-white-50" style="font-size: 14px">
                      {{ $t("contatc-us") }}
                    </a>
                  </li>
                  <li class="mt-2">
                    <a href="#" class="text-white-50" style="font-size: 14px">
                      {{ $t("customers-support") }}
                    </a>
                  </li>
                  <li class="mt-2">
                    <a href="#" class="text-white-50" style="font-size: 14px">
                      {{ $t("Effective-raffle-coupons") }}
                    </a>
                  </li>
                  <li class="mt-2">
                    <a href="#" class="text-white-50" style="font-size: 14px">
                      {{ $t("Working-principle") }}
                    </a>
                  </li>
                  <li class="mt-2">
                    <a href="#" class="text-white-50" style="font-size: 14px">
                      {{ $t("common-questions") }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-center">
      <div class="copyright text-center">
        <p class="mt-3" style="font-size: 14px">{{ $t("copyright") }}</p>
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
  width: 80%;
  background: #000;
  border-radius: 12px;
}

.copyright {
  background: #ffc122;
  margin-top: 4rem;
  border-radius: 5px;
}

@media screen and(max-width: 767px) {
  .container-footer,
  .copyright {
    width: 95%;
  }
}
</style>
