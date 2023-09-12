import { pages } from "../controllers/index";
import { closeMenu } from "../controllers/hamburguer-menu.controller";


const router = async (route) => {
  let content = document.getElementById("root");
  content.innerHTML = "";
  closeMenu();
  switch (route) {
    case "": {
      return content.appendChild(pages.home());
    }
    case "#/": {
      return content.appendChild(pages.home());
    }
    case "#/about-us": {
      return content.appendChild(pages.aboutUs());
    }
    case "#/pre-register": {
      return content.appendChild(pages.preRegister());
    }
    case "#/rewards": {
      return content.appendChild(pages.rewards());
    }
    case "#/check-in": {
      return content.appendChild(pages.checkIn());
    }
    case "#/blog": {
      return content.appendChild(pages.blog());
    }
    case "#/blog-article": {
      return content.appendChild(pages.blog());
    }
    default: {
      return content.appendChild(pages.notFound());
    }
  }
};

export { router };
