export default function ({redirect, app}) {
  if (app.$auth.loggedIn) {
    redirect("/");
  }
}
