
import { AuthProvider } from "./auth/context/AuthProvider";
import { AppRouter } from "./router/appRouter";
import injectContext from "./store/appContext.js";

function HeroesApp() {
  return (
    <AuthProvider>
      <AppRouter />

    </AuthProvider>
  );
}

export default injectContext(HeroesApp);
