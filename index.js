const Main_navbar = `<nav class="navbar navbar-expand-lg navbar-dark container-fluid fixed-top animate up py-2 border-bottom border-dark border-2">
        <div class="container ">
            <a class="navbar-brand" href="#"><img src="logo/logo1.jpg" alt="logo"
                    class="d-inline-block align-text-center logo rounded-circle img-fluid" width="150"> </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse  " id="navbarNav">
                <ul class="navbar-nav ms-auto py-1 p-3">
                    <li class="nav-item">
                        <a class="nav-link slide-hover active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link slide-hover " href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link slide-hover" href="projects.html">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link slide-hover" href="skill.html">Skills</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link slide-hover" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`

document.getElementById("My-nav").innerHTML = Main_navbar;

const Main_footer = `<footer class="bg-dark text-white py-2">
  <div class="container text-center mt-3">
    <div class="row">
      <div class="col-md-6 mb-3">
        <ul class="list mb-0 list-unstyled  d-flex  gap-3">
          <li class="list-item"><a href="about.html" class="text-white px-2 text-decoration-none">About</a></li>
          <li class="list-item"><a href="projects.html" class="text-white px-2 text-decoration-none">Projects</a></li>
          <li class="list-item"><a href="skill.html" class="text-white px-2 text-decoration-none">Skills</a></li>
        </ul>
      </div>
      <div class="col-md-6">
        <ul class="list-unstyled d-flex justify-content-center gap-2 mb-0">
          <li class="list-inline-item">
            <a href="https://wa.me/919769624087" class="text-white" target="_blank" aria-label="Whatsapp">
              <i class="bi bi-whatsapp"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="https://www.instagram.com/_aniketayre_/" class="text-white" target="_blank" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="linkedin.com/in/aniket-ayare90744127a" class="text-white" target="_blank" aria-label="Linkdin">
              <i class="bi bi-linkedin"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="mailto:aniayre10@gmail.com" class="text-white" target="_blank" aria-label="Email">
              <i class="bi bi-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
<footer class="bg-dark text-center py-1">
  <p class="mb-0">© 2025 Aniket Ayare | All Rights Reserved</p>
</footer>`

document.getElementById("Footer").innerHTML = Main_footer;



// animation
const elements = document.querySelectorAll('.animate');

function handleScroll() {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
handleScroll();


// owl coursel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }  // Shows 3 items at a time
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  let scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});


// Function to observe elements when scrolling
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });
