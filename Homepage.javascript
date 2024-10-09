// Sample products data
const products = [
    {
        id: 1,
        name: "Product 1",
        description: "Description of Product 1.",
        price: 20.00,
        image: "path/to/image1.jpg"
    },
    {
        id: 2,
        name: "Product 2",
        description: "Description of Product 2.",
        price: 25.00,
        image: "path/to/image2.jpg"
    },
    {
        id: 3,
        name: "Product 3",
        description: "Description of Product 3.",
        price: 30.00,
        image: "path/to/image3.jpg"
    }
];

// Function to display products
function displayProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Simulate adding to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`${product.name} has been added to your cart!`);
}

// Login and Signup
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    // Handle login logic (e.g., validate credentials)
    alert(`Logged in as ${username}`);
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    // Handle signup logic (e.g., save user data)
    alert(`Signed up as ${username}`);
});

// Call displayProducts on page load
window.onload = displayProducts;
