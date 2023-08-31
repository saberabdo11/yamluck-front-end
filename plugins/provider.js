export default async function ({ app }) {
  if (!app.$auth.loggedIn) {
    return;
  } else {
    const auth = app.$auth;
    const authStrategy = auth.strategy.name;
    if (authStrategy === "facebook") {
      let facebookData = {
        facebook_id: auth.strategy.token.get().slice(7),
        full_name: auth.user.name,
        email: auth.user.email,
      };
      try {
        const response = await app.$axios.$post(
          `${process.env.VUE_APP_API_URL}/auth/facebook`,
          facebookData
        );
        await auth.setStrategy("local");
        await auth.strategy.token.set(response.token);
        await auth.fetchUser();
      } catch (e) {
        console.log(e);
      }
    } else if (authStrategy === "google") {
      let dataGoogle = {
        google_id: auth.strategy.token.get().slice(7),
        full_name: auth.user.name,
        email: auth.user.email,
      };
      try {
        const response = await app.$axios.$post(
          `${process.env.VUE_APP_API_URL}/auth/google`,
          dataGoogle
        );
        await auth.setStrategy("local");
        await auth.strategy.token.set(response.token);
        await auth.fetchUser();
      } catch (e) {
        console.log(e);
      }
    }
  }
}
