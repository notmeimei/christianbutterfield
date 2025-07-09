// Make all images in .freeform-gallery draggable with the mouse (desktop only)
document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.getElementById('freeform-gallery');
  const images = Array.from(gallery.querySelectorAll('.gallery-img'));

  function layoutImages() {
    if (window.innerWidth <= 900) return;
    const verticalGap = 200; // ensure at least 200px vertical space
    const baseHorizontalGap = 180;
    const offsetRange = baseHorizontalGap * 0.4; // scatter range for each image
    const galleryWidth = gallery.clientWidth;

    // Build rows first so each row can be centered
    const rows = [];
    let current = [];
    let rowWidth = 0;
    let rowHeight = 0;

    images.forEach(img => {
      const width = img.offsetWidth;
      const height = img.offsetHeight;
      const extra = current.length ? baseHorizontalGap : 0;

      if (rowWidth + extra + width > galleryWidth && current.length) {
        rows.push({ imgs: current, width: rowWidth, height: rowHeight });
        current = [];
        rowWidth = 0;
        rowHeight = 0;
      }
      
      if (rowWidth > 0) rowWidth += baseHorizontalGap;
      rowWidth += width;
      rowHeight = Math.max(rowHeight, height);
      current.push(img);
    });

    if (current.length) {
      rows.push({ imgs: current, width: rowWidth, height: rowHeight });
    }

    let y = 0;
    rows.forEach(row => {
      let x = (galleryWidth - row.width) / 2;
      row.imgs.forEach(img => {
        const offsetX = (Math.random() - 0.5) * 2 * offsetRange;
        const offsetY = (Math.random() - 0.5) * 2 * offsetRange;
        img.style.left = (x + offsetX) + 'px';
        img.style.top = (y + offsetY) + 'px';
        x += img.offsetWidth + baseHorizontalGap + Math.random() * baseHorizontalGap;
      });
      y += row.height + verticalGap;
    });

    gallery.style.minHeight = y + 'px';
  }

  // Layout once images have loaded
  window.addEventListener('load', layoutImages);
  window.addEventListener('resize', layoutImages);

  images.forEach(img => {
    let offsetX = 0, offsetY = 0, startX = 0, startY = 0, dragging = false;

    img.addEventListener('mousedown', function (e) {
      // Only allow drag if not on mobile layout
      if (window.innerWidth <= 900) return;
      dragging = true;
      img.style.zIndex = 999;
      startX = e.clientX;
      startY = e.clientY;
      // Get current top/left in px
      const computed = window.getComputedStyle(img);
      offsetX = startX - parseFloat(computed.left);
      offsetY = startY - parseFloat(computed.top);

      function onMouseMove(e) {
        if (!dragging) return;
        img.style.left = (e.clientX - offsetX) + 'px';
        img.style.top = (e.clientY - offsetY) + 'px';
      }

      function onMouseUp() {
        dragging = false;
        img.style.zIndex = '';
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });

    // Prevent default drag image
    img.addEventListener('dragstart', e => e.preventDefault());
  });
});
