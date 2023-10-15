export default function ({redirect, app}) {
  if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
  }
  if (app.$auth.loggedIn) {
    redirect("/");
  }
}
