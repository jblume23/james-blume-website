(() => {
  "use strict";

  const PDF_PATH = "files/cv.pdf";
  const PDF_VIEW_OPTIONS = "#view=FitH&toolbar=1&navpanes=0";

  const frame = document.getElementById("cv-pdf-frame");
  const status = document.getElementById("pdf-status");
  const fullScreenLink = document.getElementById("cv-fullscreen-link");
  const downloadLink = document.getElementById("cv-download-link");

  if (!frame || !status || !fullScreenLink || !downloadLink) {
    return;
  }

  // Resolving against the current page keeps the path valid on both user sites
  // and GitHub Pages project sites hosted below /repository-name/.
  const pdfUrl = new URL(PDF_PATH, window.location.href);
  const viewerUrl = `${pdfUrl.href}${PDF_VIEW_OPTIONS}`;

  fullScreenLink.href = pdfUrl.href;
  downloadLink.href = pdfUrl.href;

  const showError = () => {
    status.classList.add("is-error");
    status.innerHTML =
      "The embedded CV could not be displayed. " +
      `<a href="${pdfUrl.href}" target="_blank" rel="noopener noreferrer">Open the PDF directly</a>.`;
  };

  frame.addEventListener(
    "load",
    () => {
      // Ignore the initial about:blank load.
      if (frame.src === "about:blank") {
        return;
      }

      frame.classList.add("is-ready");
      status.hidden = true;
    },
    { once: false }
  );

  frame.addEventListener("error", showError);

  // Assign after event listeners are registered. An iframe is more reliable
  // than <object> for invoking the browser's built-in PDF viewer.
  frame.src = viewerUrl;

  // A clear fallback remains available if a browser blocks inline PDF viewing.
  window.setTimeout(() => {
    if (!frame.classList.contains("is-ready")) {
      showError();
    }
  }, 8000);
})();
