<template>
  <v-app :class="$i18n.locale">
    <DashboardHeader></DashboardHeader>
    <div class="wallet-page">
      <div class="container">
        <div class="sides">
          <Menu />
          <div class="content" style="display: block">
            <div class="heading">
              <span>{{ $t("wallet") }}</span>
              <NuxtLink to="recharge">
                <span>{{ $t("recharge") }}</span>
              </NuxtLink>
            </div>
            <div class="balance">
              <div class="amount">
                <span style="color: #d1a125">
                  {{ $t("wallet-balance") }} :
                  <span class="amount">{{ amount }}</span>
                </span>
              </div>
              <div class="last-activity">
                <h4>{{ $t("last-activities") }}</h4>
                <div class="activities">
                  <div
                    class="activity"
                    v-for="activity in activities"
                    :key="activity.id"
                  >
                    <div class="details">
                      <div class="icon">
                        <v-icon style="color: #d1a125">
                          mdi-wallet-plus-outline
                        </v-icon>
                      </div>
                      <div class="detail">
                        <div class="title">
                          <span v-if="activity.type == 'add-balance'">
                            {{ $t("add-balance") }}
                          </span>
                          <span v-else>
                            {{ $t("withdraw-balance") }}
                          </span>
                        </div>
                        <div class="date">
                          <span>{{ activity.date }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="amount">
                      <span
                        class="increase"
                        v-if="activity.type == 'add-balance'"
                      >
                        +{{ activity.amount }}
                      </span>
                      <span class="decrease" v-else>
                        -{{ activity.amount }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </v-app>
</template>
<script>
import axios from "axios";
import DashboardHeader from "~/components/DashboardHeader.vue";
export default {
    middleware: "auth",
    data() {
        return {
            token: this.$auth.user.token,
            amount: "",
            activities: [],
        };
    },
    mounted() {
        this.$axios
            .$post("https://backend.yamluck.com/api/wallet/activities", {
            Authorization: this.token,
        })
            .then((response) => (this.activities = response))
            .catch((err) => console.log(err));
        this.$axios
            .$post("https://backend.yamluck.com/api/wallet/amount", {
            Authorization: this.token,
        })
            .then((response) => (this.amount = response[0].amount))
            .catch((err) => console.log(err));
    },
    components: { DashboardHeader }
};
</script>
<style>
@import "~/assets/scss/style.css";
</style>
