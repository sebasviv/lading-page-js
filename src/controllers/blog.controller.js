import view from "../views/blog.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

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



  return divElement;
};
