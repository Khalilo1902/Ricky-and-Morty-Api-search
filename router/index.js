import EpisodePage from "../src/page/EpisodePage";
import HomePage from "../src/page/HomePage";
import details from "../src/page/details";
import episode from "../src/page/episode";

const Router = () => {
  const path = window.location.pathname.slice(1);
  console.log(path);
  const route = path.split("/");
  console.log(route);
  if (route[0] === "person") {
    if (route.length > 1) {
      return details(route[1]);
    }
    
    }
    
    if (route[0] === "episodes") {
        if (route.length > 1) {
          return episode(route[1]);
        }
        return EpisodePage ()
  }
  return HomePage();
};

export default Router;
