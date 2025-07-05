// Make all images in .freeform-gallery draggable with the mouse (desktop only)
document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.getElementById('freeform-gallery');
  const images = gallery.querySelectorAll('.gallery-img');

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