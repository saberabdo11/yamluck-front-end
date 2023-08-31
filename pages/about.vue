<template>
  <v-app :class="$i18n.locale">
    <DashboardHeader />
    <div class="about-page">
      <div class="container">
        <div class="breadcrumb">
          <span class="page">
            <NuxtLink to="/">{{ $t("home") }}</NuxtLink>
          </span>
          <span class="devider" v-if="$i18n.locale == 'en'"> < </span>
          <span class="devider" v-else> > </span>
          <span class="page">{{ $t("about-yamluck") }}</span>
        </div>
        <div class="text">
          <h4>{{ $t("about-yamluck") }}</h4>
          <p>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا
            كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
            الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص
            العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير
            من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </v-app>
</template>
<script>
export default {
  setup() {},
};
</script>
<style>
@import "~/assets/scss/style.css";
</style>
