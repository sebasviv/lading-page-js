import Home from "./home.controller";
import AboutUs from "./about-us.controller";
import PreRegister from "./pre-register.controller";
import NotFound from "./404.controller";
import Rewards from "./rewards.controller";
import hamburgersMenu from "./hamburguer-menu.controller";

const pages = {
  home: Home,
  aboutUs: AboutUs,
  preRegister: PreRegister,
  rewards: Rewards,
  notFound: NotFound,
};



export { pages };
