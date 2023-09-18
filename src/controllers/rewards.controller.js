import view from "../views/rewards.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  const logInButton = divElement.querySelector("#btn-login");
  const logInButton2 = divElement.querySelector("#btn-login-2");
  const logInButton3 = divElement.querySelector("#btn-login-3");

  logInButton.addEventListener("click", () => {
    const form = divElement.querySelector("#login-form");
    if (form.style.display === "block") {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
  });

  logInButton2.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    const form = divElement.querySelector("#login-form");
    if (form.style.display === "block") {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
  });

  logInButton3.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
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



  return divElement;
};
