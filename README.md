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
                <div class="gallery-item img1" data-caption="art1.jpg">
          <img src="art1.jpg" alt="Artwork 1" draggable="false">
          <span class="caption">art1.jpg</span>
        </div>
        <div class="gallery-item img2" data-caption="art2.jpg">
          <img src="art2.jpg" alt="Artwork 2" draggable="false">
          <span class="caption">art2.jpg</span>
        </div>
        <div class="gallery-item img3" data-caption="art3.jpg">
          <img src="art3.jpg" alt="Artwork 3" draggable="false">
          <span class="caption">art3.jpg</span>
        </div>
        <div class="gallery-item img4" data-caption="art4.jpg">
          <img src="art4.jpg" alt="Artwork 4" draggable="false">
          <span class="caption">art4.jpg</span>
        </div>
        <div class="gallery-item img5" data-caption="art5.jpg">
          <img src="art5.jpg" alt="Artwork 5" draggable="false">
          <span class="caption">art5.jpg</span>
        </div>
        <div class="gallery-item img6" data-caption="art6.jpg">
          <img src="art6.jpg" alt="Artwork 6" draggable="false">
          <span class="caption">art6.jpg</span>
        </div>
        <div class="gallery-item img7" data-caption="art7.jpg">
          <img src="art7.jpg" alt="Artwork 7" draggable="false">
          <span class="caption">art7.jpg</span>
        </div>
        <div class="gallery-item img8" data-caption="art8.jpg">
          <img src="art8.jpg" alt="Artwork 8" draggable="false">
          <span class="caption">art8.jpg</span>
        </div>
        <div class="gallery-item img9" data-caption="art9.jpg">
          <img src="art9.jpg" alt="Artwork 9" draggable="false">
          <span class="caption">art9.jpg</span>
        </div>
        <div class="gallery-item img10" data-caption="art10.jpg">
          <img src="art10.jpg" alt="Artwork 10" draggable="false">
          <span class="caption">art10.jpg</span>
        </div>
        <div class="gallery-item img11" data-caption="art11.jpg">
          <img src="art11.jpg" alt="Artwork 11" draggable="false">
          <span class="caption">art11.jpg</span>
        </div>
        <div class="gallery-item img12" data-caption="art12.jpg">
          <img src="art12.jpg" alt="Artwork 12" draggable="false">
          <span class="caption">art12.jpg</span>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <p>&copy; 2025 Christian Milan Butterfield</p>
  </footer>
  <script src="drag-images.js"></script>
</body>
</html>
