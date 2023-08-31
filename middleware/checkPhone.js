export default function ({ app, redirect }) {
  if (app.$auth.loggedIn) {
    if (app.$auth.user.verified == 0 && app.$auth.user.phone !== null) {
      redirect("/verify");
    } else if (app.$auth.user.verified == 0 && app.$auth.user.phone == null) {
      redirect("/update-phone");
    }
  } else {
    redirect("/");
  }
}
