document.addEventListener("DOMContentLoaded", () => {
  const navigation = document.querySelector(".site-nav");
  const menuButton = document.querySelector(".nav-toggle");

  if (navigation && menuButton) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });
  }

  document.querySelectorAll(".abstract-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const paper = button.closest(".paper");
      const abstract = paper?.querySelector(".abstract");
      const symbol = button.querySelector(".toggle-symbol");

      if (!abstract) return;

      const willOpen = abstract.hasAttribute("hidden");
      abstract.toggleAttribute("hidden", !willOpen);
      button.setAttribute("aria-expanded", String(willOpen));

      if (symbol) {
        symbol.textContent = willOpen ? "−" : "+";
      }
    });
  });

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
});
