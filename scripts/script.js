// Importing functions from the modular JS files
import { updateCartTracker, updateCartCount } from './cart.js';
import { handleProductExpansion, handleAddToCart } from './products.js';
import { handleSearch, handleCategoryFilter } from './searchFilter.js';

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart display on page load
    updateCartTracker();
    updateCartCount();

    // Initialize product expansion and add-to-cart functionality
    handleProductExpansion();
    handleAddToCart();

    // Initialize search and category filter functionalities
    handleSearch();
    handleCategoryFilter();
});

