const hamburger = document.querySelector(".hamburger"); //Hamburger
const navMenu = document.querySelector(".nav-menu"); //Nav Menu
const navLinks = document.querySelectorAll(".nav-link");//Link

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => {
    n.addEventListener("click", (event) => {
        event.preventDefault();
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






/*

// Temples
const temples = [
    { templeName: imageUrl: "images/porfolio1.webp", },
    { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
    { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
    { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
    { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
    { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
    { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
    { templeName: "Buenos Aires Argentina", location: "Buenos Aires, Argentina", dedicated: "1986", area: 30659, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg" },
    { templeName: "Stockholm Sweden", location: "Stockholm, Sweden", dedicated: "1984", area: 31000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/stockholm-sweden-temple/stockholm-sweden-temple-30267-main.jpg" },
    { templeName: "Denver Colorado", location: "Denver, Colorado, United States", dedicated: "1984", area: 5728, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/denver-colorado-temple/denver-colorado-temple-42455-main.jpg" }
];

//Display
function displayTemples(filteredTemples) {
    container.innerHTML = "";
    filteredTemples.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");
        templeCard.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;
        container.appendChild(templeCard);
    });
}

displayTemples(temples);

//Filter
function filterTemples(category) {
    let filtered;
    switch (category) {
        case "Old":
            filtered = temples.filter(temple => parseInt(temple.dedicated) < 1900);
            break;
        case "New":
            filtered = temples.filter(temple => parseInt(temple.dedicated) > 2000);
            break;
        case "Large":
            filtered = temples.filter(temple => temple.area > 90000);
            break;
        case "Small":
            filtered = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filtered = temples;
    }
    displayTemples(filtered);
}



const countries = ["Canada", "Chili", "Colombia", "Croatia", "Costa Rica"];
const countriesLong = countries.filter((country) => country.length > 7);

console.log(countriesLong);


*/