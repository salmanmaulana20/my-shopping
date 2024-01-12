// navbar scroll
const navbar = document.querySelector(".navbar");

window.onscroll = function () {
    if (window.scrollY > 20) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// togle class active
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
}

// click di luar sidebar untuk menghilangka menu nya

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
})

// rating bintang

document.addEventListener("DOMContentLoaded", function () {
    const ratingContainers = document.querySelectorAll('.rating-container');

    ratingContainers.forEach(function (container) {
        const rating = parseFloat(container.getAttribute('data-rating'));
        const roundedRating = Math.round(rating * 2) / 2; // Pembulatan ke 0.5 terdekat

        for (let i = 0; i < 5; i++) {
            const star = document.createElement('i');
            if (i + 1 <= roundedRating) {
                star.classList.add('fas', 'fa-star');
            } else if (i + 0.5 <= roundedRating) {
                star.classList.add('fas', 'fa-star-half-alt');
            } else {
                star.classList.add('far', 'fa-star');
            }
            container.appendChild(star);
        }
    });
});
