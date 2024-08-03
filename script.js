// script.js

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Product 1',
            description: 'This is a great product.',
            price: '$19.99',
            image: 'https://via.placeholder.com/150'
        },
        {
            name: 'Product 2',
            description: 'This is another great product.',
            price: '$29.99',
            image: 'https://via.placeholder.com/150'
        },
        {
            name: 'Product 3',
            description: 'Yet another great product.',
            price: '$39.99',
            image: 'https://via.placeholder.com/150'
        }
    ];

    const productListing = document.getElementById('product-listing');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;

        productListing.appendChild(productItem);
    });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Automatic Slideshow - change image every 3 seconds
let slideInterval = setInterval(function() {
    plusSlides(1);
}, 3000);
