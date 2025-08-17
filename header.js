// Populate the page header so it only needs to be maintained in one place
// Inserts the logo-based title and navigation buttons into the first <header>
// element found on the page.

document.addEventListener('DOMContentLoaded', function () {
      const existingFavicon = document.querySelector("link[rel='icon']");
    if (!existingFavicon) {
      const favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/png';
      favicon.href = 'images/Website-Eye-Favicon.png';
      document.head.appendChild(favicon);
    }

  const header = document.querySelector('header');
  if (header) {
    header.innerHTML = `
      <div class="header-content">
        <div class="logo-container">
          <h1><a href="index.html"><img src="images/CMB - Font TT Nooks.png" alt="Christian Milan Butterfield" class="logo"></a></h1>
        </div>
        <nav></nav>
      </div>
    `;

    const nav = header.querySelector('nav');
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
            <a href="mailto:christian.m.butterfield@gmail.com" target="_blank">Email</a>
            <a href="https://www.corkingallery.com/artists/32-christian-butterfield/" target="_blank">Gallery</a>
          </div>
        </div>
      `;
    }
    const logoContainer = header.querySelector('.logo-container');
    let lastScroll = window.scrollY;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        logoContainer.classList.add('blurred');
      } else {
        logoContainer.classList.remove('blurred');
      }
      lastScroll = currentScroll;
    });
  }
});
