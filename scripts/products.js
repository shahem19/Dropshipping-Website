import { addToCart, showConfirmationMessage } from './cart.js';

// Add click event listeners to each product for expanding/collapsing the product card
export function handleProductExpansion() {
    document.querySelectorAll('.product').forEach(product => {
        product.addEventListener('click', () => {
            product.classList.toggle('expanded');
        });
    });
}

// Add-to-cart functionality for each product
export function handleAddToCart() {
    document.querySelectorAll('.cart-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();  // Prevent the click from triggering the product expansion

            const product = e.target.closest('.product');
            const productName = product.getAttribute('data-product-name');
            const productPrice = parseFloat(product.getAttribute('data-price'));
            const productImage = product.querySelector('img').src;

            const quantityInput = product.querySelector('.quantity-input');
            const quantity = parseInt(quantityInput.value) || 1;

            addToCart(productName, productPrice, productImage, quantity);
            showConfirmationMessage(`${quantity} ${productName} added to your cart!`);
        });
    });
}
