// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// Image Slider
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slider = document.querySelector(".slider");

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Form Validation
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const message = document.getElementById("message").value.trim();
    const responseMessage = document.getElementById("responseMessage");

    // Validation patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numberRegex = /^\d{10}$/;

    if (!name || !email || !number || !message) {
        showMessage("All fields are required!", "red");
    } else if (!emailRegex.test(email)) {
        showMessage("Please enter a valid email address!", "red");
    } else if (!numberRegex.test(number)) {
        showMessage("Please enter a valid 10-digit phone number!", "red");
    } else {
        showMessage("Message sent successfully!", "green");
        document.getElementById("form").reset();
    }
});

function showMessage(text, color) {
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.style.color = color;
    responseMessage.textContent = text;
    setTimeout(() => {
        responseMessage.textContent = '';
    }, 3000);
}