// Scroll Progress Indicator
window.onscroll = function() { updateProgressBar(); };

function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressbar").style.width = scrolled + "%";
}

// Scroll-triggered fade-in effect
document.addEventListener("DOMContentLoaded", function() {
    const fadeInSections = document.querySelectorAll(".fade-in-section");
    const fadeUpImages = document.querySelectorAll(".fade-up-img");

    const fadeInOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(fadeInOnScroll, {
        threshold: 0.2
    });

    fadeInSections.forEach(section => {
        observer.observe(section);
    });

    fadeUpImages.forEach(img => {
        observer.observe(img);
    });
});

// FAQ Accordion
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
        const content = item.querySelector(".accordion-content");
        if (item.classList.contains("active")) {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
});

// Testimonials Slider
let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showNextTestimonial() {
    testimonials[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].style.display = "block";
}

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("shrink", window.scrollY > 50);
});


setInterval(showNextTestimonial, 4000); // Changes testimonial every 4 seconds

document.addEventListener("DOMContentLoaded", function() {
    const textArray = ["Finance Fluent"];
    const typingSpeed = 100; // Speed of typing
    const delayBetweenPhrases = 1000; // Delay between repeating the phrase

    let currentText = "";
    let textArrayIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (charIndex < textArray[textArrayIndex].length) {
            currentText += textArray[textArrayIndex].charAt(charIndex);
            document.getElementById("typed-text").innerHTML = currentText;
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(resetText, delayBetweenPhrases);
        }
    }

    typeText();
});
