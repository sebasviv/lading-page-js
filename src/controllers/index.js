import Home from "./home.controller";
import AboutUs from "./about-us.controller";
import NotFound from "./404.controller";

const pages = {
  home: Home,
  aboutUs: AboutUs,
  notFound: NotFound,
};

export { pages };
