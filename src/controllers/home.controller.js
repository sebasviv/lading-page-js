import view from "../views/home.html";
import newBlogController from "./newBlog.controller";

export default () => {
    const divElement = document.createElement("div");
  divElement.innerHTML = view;



const dropDownOpen = divElement.querySelector('#dropdown-open');
const dropDownClose = divElement.querySelector('#dropdown-close');
dropDownOpen.addEventListener('click', () => {
    const inputsGroup = divElement.querySelector('#inputs-group-header');
    inputsGroup.style.display = "flex";
    inputsGroup.classList.add('slide-in-right-dropdown');
    dropDownOpen.style.display = "none";
    dropDownClose.style.display = "flex";
});

dropDownClose.addEventListener('click', () => {
    const inputsGroup = divElement.querySelector('#inputs-group-header');
    inputsGroup.style.display = "none";
    dropDownClose.style.display = "none";
    dropDownOpen.style.display = "flex";

});

const logInButton = divElement.querySelector('#btn-login');

logInButton.addEventListener('click', () => {
    const form = divElement.querySelector('#login-form');
    if(form.style.display === "block") {
        form.style.display = "none";
    }else {
        form.style.display = "block";
    }
});

const closeButtonForm = divElement.querySelector('#btn-close-login-form');
closeButtonForm.addEventListener('click', () => {
    const form = divElement.querySelector('#login-form');
    form.style.display = "none";
});

const cardBlog = divElement.querySelectorAll(".card-blog");
if (cardBlog) {
  cardBlog.forEach(function (div) {
    div.addEventListener("click", function () {
      newBlogController(div.id);
    });
  });
}

  return divElement;
};

