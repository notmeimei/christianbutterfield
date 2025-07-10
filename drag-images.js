// Make all images in .freeform-gallery draggable with the mouse (desktop only)
document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.getElementById('freeform-gallery');
  const images = Array.from(gallery.querySelectorAll('.gallery-img'));

  function layoutImages() {
    if (window.innerWidth <= 900) return;
    
    let maxBottom = 0;
    images.forEach(img => {
      const l = img.dataset.left;
      const t = img.dataset.top;
      if (l !== undefined) img.style.left = (/px$/.test(l) ? l : l + 'px');
      if (t !== undefined) img.style.top = (/px$/.test(t) ? t : t + 'px');

      const topNum = parseFloat(img.style.top) || 0;
      const bottom = topNum + img.offsetHeight;
      if (bottom > maxBottom) maxBottom = bottom;
    });

      if (maxBottom > 0) {
      gallery.style.minHeight = (maxBottom + 200) + 'px';
    }
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
