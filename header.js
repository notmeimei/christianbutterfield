// Populate the page header so it only needs to be maintained in one place
// Inserts the logo-based title and navigation buttons into the first <header>
// element found on the page.

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');
  if (header) {
    header.innerHTML = `
      <div class="header-content">
        <div>
          <h1><a href="index.html"><img src="images/CMB Font Solvent.png" alt="Christian Milan Butterfield" class="logo"></a></h1>
        </div>
        <nav></nav>
      </div>
    `;

    const nav = header.querySelector('nav');
    if (nav) {
      nav.innerHTML = `
        <button onclick="window.location.href='cv.html'">CV</button>
        <button onclick="window.location.href='exhibitions.html'">Exhibitions</button>
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
  }
});
