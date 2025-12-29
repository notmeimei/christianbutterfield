// Make all images in .freeform-gallery draggable with the mouse (desktop only)
document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.getElementById('freeform-gallery');
  const items = Array.from(gallery.querySelectorAll('.gallery-item'));

  function layoutImages() {
    if (window.innerWidth <= 900) return;
    
    let maxBottom = 0;
    items.forEach(item => {
      const l = item.dataset.left;
      const t = item.dataset.top;
      if (l !== undefined) item.style.left = (/px$/.test(l) ? l : l + 'px');
      if (t !== undefined) item.style.top = (/px$/.test(t) ? t : t + 'px');

      const topNum = parseFloat(item.style.top) || 0;
      const bottom = topNum + item.offsetHeight;
      if (bottom > maxBottom) maxBottom = bottom;
    });

      if (maxBottom > 0) {
      gallery.style.minHeight = (maxBottom + 200) + 'px';
    }
  }

  // Layout immediately after DOM is ready so items are positioned
  layoutImages();

  // Layout again once images have fully loaded or when resizing
  window.addEventListener('load', layoutImages);
  window.addEventListener('resize', layoutImages);

  items.forEach(item => {
    let offsetX = 0, offsetY = 0, startX = 0, startY = 0, dragging = false, movedDuringDrag = false;

    item.addEventListener('mousedown', function (e) {
      // Only allow drag if not on mobile layout
      if (window.innerWidth <= 900) return;
      dragging = true;
      movedDuringDrag = false;
      item.style.zIndex = 999;
      startX = e.clientX;
      startY = e.clientY;
      // Get current top/left in px
      const computed = window.getComputedStyle(item);
      offsetX = startX - parseFloat(computed.left);
      offsetY = startY - parseFloat(computed.top);

      function onMouseMove(e) {
        if (!dragging) return;
        if (!movedDuringDrag) {
          movedDuringDrag = true;
          item.dataset.dragging = 'true';
        }
        item.style.left = (e.clientX - offsetX) + 'px';
        item.style.top = (e.clientY - offsetY) + 'px';
      }

      function onMouseUp() {
        dragging = false;
        item.style.zIndex = '';
        if (movedDuringDrag) {
          // Keep the dragging flag through the click event triggered after mouseup
          requestAnimationFrame(() => {
            delete item.dataset.dragging;
          });
        }
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });

    // Prevent default drag image
    item.addEventListener('dragstart', e => e.preventDefault());
  });
});
