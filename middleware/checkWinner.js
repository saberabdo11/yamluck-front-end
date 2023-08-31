export default function ({ app, route, $axios, redirect }) {
  $axios
    .post(
      `${process.env.VUE_APP_API_URL}/offer/winner`,
      {
        product_id: route.params.id,
      },
      {
        headers: {
          Authorization: app.$auth.user.token,
          "x-api-key": process.env.VUE_APP_API_KEY,
        },
      }
    )
    .then((success) => redirect(`/product/${route.params.id}/winner`))
    .catch((error) => redirect(`/product/${route.params.id}/confirm`));
}
