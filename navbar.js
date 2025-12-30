document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('header nav');
  if (nav) {
    nav.innerHTML = `
      <button onclick="window.location.href='cv.html'">CV</button>
        <div class="dropdown">
          <button class="dropbtn">Exhibitions</button>
          <div class="dropdown-content">
            <a href="apricity-2024.html">Apricity - 2024</a>
            <a href="green-light-2021.html">Green Light - 2021</a>
          </div>
        </div>
      <div class="dropdown">
          <button class="dropbtn">Contact</button>
          <div class="dropdown-content">
            <a href="https://www.instagram.com/cmilanb/?hl=en" target="_blank">Instagram</a>
            <a href="mailto:christianbutterfieldstudio@gmail.com" target="_blank">Email</a>
            <a href="https://www.corkingallery.com/artists/32-christian-butterfield/" target="_blank">Gallery</a>
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
