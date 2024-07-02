fetch('./component/navbar.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('navbar-container').innerHTML = html;
  });

fetch('./component/hero.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('hero-container').innerHTML = html;
  });

fetch('./component/content.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('content-container').innerHTML = html;
  });

fetch('./component/banner.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('banner-container').innerHTML = html;
  });

fetch('./component/gallery.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('gallery-container').innerHTML = html;
  });

fetch('./component/footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer-container').innerHTML = html;
  });