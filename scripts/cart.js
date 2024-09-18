// Retrieve cart from localStorage or initialize an empty cart if none exists
let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

// Function to update the cart tracker (number of items and total price)
export function updateCartTracker() {
    const cartTracker = document.getElementById('cart-tracker');
    const cartTrackerCount = document.getElementById('cart-tracker-count');
    const cartTrackerTotal = document.getElementById('cart-tracker-total');

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    cartTrackerCount.textContent = `Items: ${totalItems}`;
    cartTrackerTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;

    cartTracker.style.display = totalItems > 0 ? 'block' : 'none';
}

// Function to update the cart count (items) in the header
export function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCount.textContent = `(${totalItems})`;
}

// Function to add an item to the cart
export function addToCart(productName, productPrice, productImage, quantity) {
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: quantity
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTracker();
    updateCartCount();
}

// Function to display a temporary confirmation message
export function showConfirmationMessage(message) {
    const confirmation = document.createElement('div');
    confirmation.className = 'confirmation-message';
    confirmation.textContent = message;
    document.body.appendChild(confirmation);

    setTimeout(() => {
        confirmation.remove();
    }, 2000);
}
