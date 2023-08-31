import Vue from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 800,
    easing: "ease",
    once: false, // Animate elements only once
    mirror: false,
    anchorPlacement: "top-bottom",
  })
);
