import { pages } from "../controllers/index";

const router = async (route) => {
  let content = document.getElementById("root");
  content.innerHTML = "";

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
    default: {
      return content.appendChild(pages.notFound());
    }
  }
};

export { router };