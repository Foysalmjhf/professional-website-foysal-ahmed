


// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // Active section for Animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll this
        else {
            sec.classList.remove('show-animate');
        }
    });


    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}


    // Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 800,
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

