<template>
  <v-app :class="$i18n.locale">
    <SemiHeader />
    <div class="messages">
      <div class="page-title">
        <div>
          <h3>{{ $t("notifications") }} ({{ notifications.length }})</h3>
        </div>
        <!-- <div>
          <v-btn color="primary" elevation="2" outlined>
            <v-icon>mdi-notification-clear-all</v-icon> Clear All
          </v-btn>
        </div> -->
      </div>
      <div class="cards">
        <div
          class="cardd"
          v-for="notification in notifications"
          :key="notification.id"
          style="text-align: inherit"
        >
          <div class="icon">
            <v-icon>mdi-bell-badge-outline</v-icon>
          </div>
          <div style="display: flex; flex-direction: column; gap: 5px">
            <div class="subject">{{ notification[`subject_${locale}`] }}</div>
            <div class="content">{{ notification[`content_${locale}`] }}</div>
          </div>
          <!-- <span>{{ notification.date | currTimestamp }}</span> -->
        </div>
      </div>
    </div>
    <Footer />
  </v-app>
</template>
<script>
import axios from "axios";
import moment from "moment";
export default {
  data() {
    return {
      notifications: [],
      locale: this.$i18n.locale,
    };
  },
  // filters: {
  //   currTimestamp(endDate) {
  //     var end = endDate;
  //     var currTime = moment().format("YYYY-MM-DD HH:mm:ss").valueOf();
  //     var duration = moment.duration(end.diff(currTime));
  //     var hours = duration.hours();
  //     console.log(hours);
  //   },
  // },
  mounted() {
    axios
      .post(
        "https://backend.yamluck.com/api/get-notifications",
        {},
        {
          headers: {
            Authorization: this.$auth.user.token,
          },
        }
      )
      .then((res) => {
        this.notifications = res.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>
<style>
@import "~/assets/scss/style.css";
</style>
