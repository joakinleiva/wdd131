document.addEventListener("DOMContentLoaded", function () {
    const productArray = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" },
      { id: 4, name: "Product 4" },
    ];
  
    const productSelect = document.getElementById("productName");
  
    productArray.forEach((product) => {
      let option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
});

function updateReviewCount() {
    let reviewCount = localStorage.getItem("reviewCount");
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem("reviewCount", reviewCount);
    alert(`Thanks! You have submitted ${reviewCount} reviews.`);
    setTimeout(() => {
        location.reload();
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        updateReviewCount();
        form.submit();
    });
});


// Time
function updateDateTime() {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = new Date().toLocaleString();
}
updateDateTime();
