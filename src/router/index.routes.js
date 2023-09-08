import { pages } from "../controllers/index";
import { closeMenu } from "../controllers/hamburguer-menu.controller";

const router = async (route) => {
  let content = document.getElementById("root");
  content.innerHTML = "";
  closeMenu();

  console.log("route: ", route);

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
    default: {
      return content.appendChild(pages.notFound());
    }
  }
};

export { router };
