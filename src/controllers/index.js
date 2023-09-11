import Home from "./home.controller";
import AboutUs from "./about-us.controller";
import PreRegister from "./pre-register.controller";
import NotFound from "./404.controller";
import Rewards from "./rewards.controller";
import hamburgersMenu from "./hamburguer-menu.controller";
import CheckIn from "./check-in.controller";

const pages = {
  home: Home,
  aboutUs: AboutUs,
  preRegister: PreRegister,
  rewards: Rewards,
  checkIn: CheckIn,
  notFound: NotFound,
};



export { pages };
