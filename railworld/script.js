const slides = document.querySelector('.slides');
const images = slides.querySelectorAll('img');
let index = 0;

function showNextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(showNextImage, 2000);

const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

const modal = document.getElementById("modal");
const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");
const signupForm = document.getElementById("signup-form");

openModalButton.addEventListener('click', () => {
    modal.style.display = "flex";
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    modal.style.display = "none";
    
    // Reset form values
    signupForm.reset();
});
