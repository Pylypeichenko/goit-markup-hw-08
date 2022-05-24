(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mob-menu__open-button"),
    closeMenuBtn: document.querySelector(".mob-menu__close-button"),
    menu: document.querySelector(".mob__menu"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
