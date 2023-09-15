import article_1 from "../views/articles/article_1.html";
import article_2 from "../views/articles/article_2.html";
import article_3 from "../views/articles/article_3.html";
import article_4 from "../views/articles/article_4.html";

export default (id) => {
  if (id) {
    window.location.hash = "#/blog-article";
    setTimeout(() => {
      blogRender(id);
    }, 100);
  }else {
    window.location.hash = "#/blog";
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
