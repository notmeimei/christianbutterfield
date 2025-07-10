<!DOCTYPE html>
<html lang="en">
<head>  
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Minimal Artist Portfolio</title>
  <!-- Just Me Again Down Here -->
  <link href="https://fonts.googleapis.com/css2?family=Just+Me+Again+Down+Here&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="header-content">
      <div>
        <h1>christian milan butterfield</h1>
        <p class="tagline">Minimal Artist Portfolio</p>
      </div>
      <nav>
        <button onclick="alert('I am a visual artist exploring form, color, and minimal design. Welcome to my portfolio.')">About</button>
        <button onclick="window.location.href='mailto:your.email@example.com'">Contact</button>
      </nav>
    </div>
  </header>
  <main>
    <section id="gallery">
      <h2>Gallery</h2>
      <div class="freeform-gallery" id="freeform-gallery">
        <img src="art1.jpg" alt="Artwork 1" class="gallery-img img1" draggable="false" data-caption="art1.jpg">
        <img src="art2.jpg" alt="Artwork 2" class="gallery-img img2" draggable="false" data-caption="art2.jpg">
        <img src="art3.jpg" alt="Artwork 3" class="gallery-img img3" draggable="false" data-caption="art3.jpg">
        <img src="art4.jpg" alt="Artwork 4" class="gallery-img img4" draggable="false" data-caption="art4.jpg">
        <img src="art5.jpg" alt="Artwork 5" class="gallery-img img5" draggable="false" data-caption="art5.jpg">
        <img src="art6.jpg" alt="Artwork 6" class="gallery-img img6" draggable="false" data-caption="art6.jpg">
        <img src="art7.jpg" alt="Artwork 7" class="gallery-img img7" draggable="false" data-caption="art7.jpg">
        <img src="art8.jpg" alt="Artwork 8" class="gallery-img img8" draggable="false" data-caption="art8.jpg">
        <img src="art9.jpg" alt="Artwork 9" class="gallery-img img9" draggable="false" data-caption="art9.jpg">
        <img src="art10.jpg" alt="Artwork 10" class="gallery-img img10" draggable="false" data-caption="art10.jpg">
        <img src="art11.jpg" alt="Artwork 11" class="gallery-img img11" draggable="false" data-caption="art11.jpg">
        <img src="art12.jpg" alt="Artwork 12" class="gallery-img img12" draggable="false" data-caption="art12.jpg">
      </div>
    </section>
  </main>
  <footer>
    <p>&copy; 2025 Christian Milan Butterfield</p>
  </footer>
  <script src="drag-images.js"></script>
</body>
</html>
