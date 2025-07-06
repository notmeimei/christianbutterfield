document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('header nav');
  if (nav) {
    nav.innerHTML = `
      <button onclick="window.location.href='index.html'">Home</button>
      <button onclick="window.location.href='cv.html'">CV</button>
      <button onclick="window.location.href='exhibitions.html'">Exhibitions</button>
      <button onclick="window.location.href='https://www.instagram.com/cmilanb/?hl=en'">Instagram</button>
    `;
  }
});
