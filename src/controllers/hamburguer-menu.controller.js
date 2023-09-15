const hamburguerMenu = document.getElementById("hamburger-menu");
const closeButtonMenu = document.getElementById("close-btn-menu");

hamburguerMenu.addEventListener("click", () => {
  const menu = document.getElementById("hamburger-menu-content");
  menu.style.display = "flex";

  setTimeout(() => {
    console.log("cargo root");
    const body = document.body;
    if (body.style.overflowY !== "hidden") {
      body.style.overflowY = "hidden";
    }
  }, 1000);
});

closeButtonMenu.addEventListener("click", () => {
  const body = document.body;
  const menu = document.getElementById("hamburger-menu-content");
  menu.classList.add("slide-out-right");
  setTimeout(() => {
    if (body.style.overflowY === "hidden") {
      body.style.overflowY = "auto";
    }
    menu.style.display = "none";
    menu.classList.remove("slide-out-right");
  }, 1000);
});

export const closeMenu = () => {
  if (document.getElementById("hamburger-menu-content")) {
    if (
      document.getElementById("hamburger-menu-content").style.display === "flex"
    ) {
      const menu = document.getElementById("hamburger-menu-content");
      const body = document.body;
      menu.classList.add("slide-out-right");
      setTimeout(() => {
        menu.style.display = "none";
        body.style.overflowY = "auto";
        menu.classList.remove("slide-out-right");
      }, 1000);
    }
  }
};
