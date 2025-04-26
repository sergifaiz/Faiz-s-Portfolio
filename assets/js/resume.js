let pdfDoc = null,
    pageNum = 1,
    pageRendering = false,
    pageNumPending = null,
    scale = 1.5,
    canvas = null,
    ctx = null;

window.addEventListener('load', () => {
  canvas = document.getElementById('pdf-canvas');
  ctx = canvas.getContext('2d');

  pdfjsLib.getDocument('assets/pdf/Faiz_Zailan_Resume_PowerPlatform.pdf').promise.then(function(pdfDoc_) {
    pdfDoc = pdfDoc_;
    document.getElementById('page-info').textContent = `Page ${pageNum} of ${pdfDoc.numPages}`;
    renderPage(pageNum);
  });
});

function renderPage(num) {
  pageRendering = true;
  pdfDoc.getPage(num).then(function(page) {
    const viewport = page.getViewport({ scale: scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };
    const renderTask = page.render(renderContext);

    renderTask.promise.then(function() {
      pageRendering = false;
      if (pageNumPending !== null) {
        renderPage(pageNumPending);
        pageNumPending = null;
      }
    });
  });

  document.getElementById('page-info').textContent = `Page ${num} of ${pdfDoc.numPages}`;
}

function showPage(offset) {
  if (!pdfDoc || pageRendering) {
    return;
  }

  const newPage = pageNum + offset;
  if (newPage >= 1 && newPage <= pdfDoc.numPages) {
    pageNum = newPage;
    renderPage(pageNum);
  }
}
