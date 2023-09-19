
const btnLoginMobile = document.getElementById("login-mobile");
const loginFormMobile = document.getElementById("login-form-mobile");
const loginFormClose = document.getElementById("btn-close-login-form-mobile");

if(btnLoginMobile) btnLoginMobile.addEventListener("click", () => {

  loginFormMobile.style.display = "flex";
});

if(loginFormClose) loginFormClose.addEventListener("click", () => {
  loginFormMobile.classList.add("slide-out-right");
  setTimeout(() => {
    loginFormMobile.style.display = "none";
    loginFormMobile.classList.remove("slide-out-right");
  }, 1000);

});