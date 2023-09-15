import view from "../views/blog-article.html";
import article_1 from "../views/articles/article_1.html";
import article_2 from "../views/articles/article_2.html";
import article_3 from "../views/articles/article_3.html";
import article_4 from "../views/articles/article_4.html";

export default (id) => {
  let content = document.getElementById("root");
  content.innerHTML = "";

  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  content.appendChild(divElement);

  blogRender(id);

  const logInButton = divElement.querySelector("#btn-login");

  logInButton.addEventListener("click", () => {
    const form = divElement.querySelector("#login-form");
    if (form.style.display === "block") {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
  });

  const closeButtonForm = divElement.querySelector("#btn-close-login-form");
  closeButtonForm.addEventListener("click", () => {
    const form = divElement.querySelector("#login-form");
    form.style.display = "none";
  });

  const cardBlog = divElement.querySelectorAll(".card-blog");
  if (cardBlog) {
    cardBlog.forEach(function (div) {
      div.addEventListener("click", function () {
        blogRender(div.id);
      });
    });
  }
};

const blogRender = (id) => {
  const bodyArticle = document.querySelector("#body-blog-article");
  if (bodyArticle) {
    switch (id) {
      case "card-blog-1":
        bodyArticle.innerHTML = article_1;
        break;
      case "card-blog-2":
        bodyArticle.innerHTML = article_2;
        break;
      case "card-blog-3":
        bodyArticle.innerHTML = article_3;
        break;
      case "card-blog-4":
        bodyArticle.innerHTML = article_4;
        break;
      default:
        break;
    }
  }
};
