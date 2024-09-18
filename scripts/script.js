import { updateCartTracker, updateCartCount } from '../cart.js';
import { handleProductExpansion, handleAddToCart } from '../products.js';
import { handleSearch, handleCategoryFilter } from '../searchFilter.js';

// Initialize cart, products, and search/filter functionalities
document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart display on page load
    updateCartTracker();
    updateCartCount();

    // Initialize product expansion and add-to-cart
    handleProductExpansion();
    handleAddToCart();

    // Initialize search and category filter
    handleSearch();
    handleCategoryFilter();
});
