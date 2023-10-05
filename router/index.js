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
      return Details(route[1]);
    }
    else if (route[0] === "episode") {
      if (route.length > 1) {
        return episode(route[1]);
      }
    }
    return HomePage();
  }
};

export default Router;
