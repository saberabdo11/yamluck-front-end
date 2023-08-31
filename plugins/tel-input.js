import Vue from "vue";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";

Vue.use(VueTelInput, {
  autoFormat: true,
  mode: "international",
  placeholder: "Enter your phone",
  dropdownOptions: {
    showDialCodeInList: false,
    showDialCodeInSelection: true,
    showSearchBox: true,
  },
});
