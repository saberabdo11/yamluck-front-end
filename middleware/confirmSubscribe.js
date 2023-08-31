export default function ({ app, $axios, route, redirect }) {
  if (app.$auth.loggedIn) {
    $axios
      .post(
        `${process.env.VUE_APP_API_URL}/offer/subscribers`,
        { product_id: route.params.id },
        {
          headers: {
            Authorization: app.$auth.user.token,
            "x-api-key": process.env.VUE_APP_API_KEY,
          },
        }
      )
      .then((success) => redirect(`/product/${route.params.id}/confirm`));
  } else {
    redirect("/");
  }
}
