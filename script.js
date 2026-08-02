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

  const pdfFrame = document.getElementById("cv-pdf-frame");
  const pdfStatus = document.getElementById("cv-viewer-status");
  const fullScreenLink = document.getElementById("cv-fullscreen-link");
  const downloadLink = document.getElementById("cv-download-link");

  if (!pdfFrame || !pdfStatus || !fullScreenLink || !downloadLink) return;

  // Relative URLs remain valid on both a root GitHub Pages site
  // and a project site hosted under /repository-name/.
  const pdfUrl = new URL("files/cv.pdf", document.baseURI);

  fullScreenLink.href = pdfUrl.href;
  downloadLink.href = pdfUrl.href;

  pdfFrame.addEventListener("load", () => {
    pdfStatus.hidden = true;
  });

  pdfFrame.addEventListener("error", () => {
    pdfStatus.classList.add("is-error");
    pdfStatus.innerHTML =
      "The embedded CV could not be displayed. " +
      `<a href="${pdfUrl.href}" target="_blank" rel="noopener noreferrer">Open the PDF directly</a>.`;
  });
});
