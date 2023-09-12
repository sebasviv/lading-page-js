import Home from "./home.controller";
import AboutUs from "./about-us.controller";
import PreRegister from "./pre-register.controller";
import NotFound from "./404.controller";
import Rewards from "./rewards.controller";
import CheckIn from "./check-in.controller";
import Blog from "./blog.controller";
import BlogArticle from "./blog-article.controller";

const pages = {
  home: Home,
  aboutUs: AboutUs,
  preRegister: PreRegister,
  rewards: Rewards,
  checkIn: CheckIn,
  blog: Blog,
  notFound: NotFound,
  blogArticle: BlogArticle,
};



export { pages };
