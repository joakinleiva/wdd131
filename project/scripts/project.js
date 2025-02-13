const hamburger = document.querySelector(".hamburger"); //Hamburger
const navMenu = document.querySelector(".nav-menu"); //Nav Menu
const navLinks = document.querySelectorAll(".nav-link");//Link

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => {
    n.addEventListener("click", (event) => {
        
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        filterTemples(event.target.textContent.trim());
    });
});


// Time
function updateDateTime() {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = new Date().toLocaleString();
}
updateDateTime();

/* GALLERY */

// Rotate
window.addEventListener('load', () => {
    gsap.to(".image img", { opacity: 1, rotation: 360, duration: 1, stagger: 0.2 });
});
// Title
window.addEventListener('load', () => {
    gsap.from(".page-title ", { x: -300, opacity: 0, duration: 1 });
    gsap.to(".page-title", { opacity: 1, duration: 2 });
});
// Button
window.addEventListener('load', () => {
    gsap.from(".hero-btn", { x: -300, opacity: 0, duration: 1 });
    gsap.to(".hero-btn", { opacity: 1, duration: 2 });
});
// Zoom
const images = document.querySelectorAll(".image img");
images.forEach(image => {
  image.addEventListener("mouseenter", () => {
    gsap.to(image, { scale: 1.1, duration: 0.3 }); 
  });
  
  image.addEventListener("mouseleave", () => {
    gsap.to(image, { scale: 1, duration: 0.3 }); 
  });
});

// Clients
// Array of image paths
const logos = [
    "images/logo1.png",
    "images/logo2.png",
    "images/logo3.png",
    "images/logo4.png",
    "images/logo5.png",
    "images/logo6.png"
];

// Function to create logo elements
function createLogos() {
    const wrapper = document.querySelector('.client-logos-wrapper');
    
    // Add logos twice for continuous scrolling effect
    logos.forEach(logo => {
        const logoDiv = document.createElement('div');
        logoDiv.classList.add('client-logo');
        const img = document.createElement('img');
        img.src = logo;
        img.alt = `Client logo`;
        logoDiv.appendChild(img);
        wrapper.appendChild(logoDiv);
    });

    // Duplicate logos for continuous effect
    logos.forEach(logo => {
        const logoDiv = document.createElement('div');
        logoDiv.classList.add('client-logo');
        const img = document.createElement('img');
        img.src = logo;
        img.alt = `Client logo`;
        logoDiv.appendChild(img);
        wrapper.appendChild(logoDiv);
    });
}

// Call the function to add logos
createLogos();

// Add CSS animation for scrolling
const style = document.createElement('style');
style.innerHTML = `
    .client-logos-container {
        overflow: hidden;
        width: 100%;
    }
    .client-logos-wrapper {
        display: flex;
        animation: scrollLeft 30s linear infinite; /* Slower speed */
    }
    .client-logo {
        margin-right: 20px; /* Adjust gap between logos */
    }
    .client-logo img {
        width: 100px; /* Adjust size of logos */
        height: auto;
    }
    @keyframes scrollLeft {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%); /* Adjust this to the width of the wrapper */
        }
    }

    /* Media query for smaller screens */
    @media screen and (max-width: 768px) {
        .client-logo img {
            width: 60px; /* Smaller size for mobile devices */
        }
    }
`;
document.head.appendChild(style);
