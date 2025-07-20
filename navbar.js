document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('header nav');
  if (nav) {
    nav.innerHTML = `
      <button onclick="window.location.href='cv.html'">CV</button>
      <button onclick="window.location.href='exhibitions.html'">Exhibitions</button>
      <div class="dropdown">
        <button class="dropbtn">Contact</button>
        <div class="dropdown-content">
          <a href="https://www.instagram.com/cmilanb/?hl=en">Instagram</a>
          <a href="mailto:christian.m.butterfield@gmail.com">Email</a>
          <a href="https://www.corkingallery.com/artists/32-christian-butterfield/">Gallery</a>
        </div>
      </div>
    `;
  }
  
  const headerTitle = document.querySelector('header h1');
  if (headerTitle && headerTitle.textContent.trim()) {
    const text = headerTitle.textContent.trim();
    headerTitle.innerHTML = `<a href="index.html">${text}</a>`;
  }
});
