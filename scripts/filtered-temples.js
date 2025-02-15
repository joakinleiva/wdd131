const hamburger = document.querySelector(".hamburger"); //Hamburger
const navMenu = document.querySelector(".nav-menu"); //Nav Menu
const container = document.getElementById("temple-cards-container");//Card
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