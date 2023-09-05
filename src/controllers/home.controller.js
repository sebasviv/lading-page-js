import view from "../views/home.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  const hamburguerMenu = divElement.querySelector("#hamburger-menu");
  hamburguerMenu.addEventListener("click", () => {
    const menu = divElement.querySelector("#hamburger-menu-content");
    menu.style.display = "flex";
  });

const closeButtonMenu = divElement.querySelector('#close-btn-menu');

closeButtonMenu.addEventListener('click', () => {
    const menu = divElement.querySelector('#hamburger-menu-content')
    menu.classList.add('slide-out-right');
    setTimeout(() => {
        menu.style.display = 'none';
        menu.classList.remove('slide-out-right');
    }, 1000);
});

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


  return divElement;
};

