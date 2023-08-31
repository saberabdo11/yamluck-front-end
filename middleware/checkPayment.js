export default function ({ app, route, $axios, redirect }) {
  if (route.name === "payment-offer-id") {
    $axios
      .get(`${process.env.VUE_APP_API_URL}/product/${route.params.id}`)
      .then()
      .catch((err) => redirect(`/`));
  }
}
