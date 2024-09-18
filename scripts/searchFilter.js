// Search functionality with debounce to reduce frequent filtering on every keypress
export function handleSearch() {
    let debounceTimeout;
    document.getElementById('search').addEventListener('input', (e) => {
        clearTimeout(debounceTimeout); // Clear previous debounce timer

        debounceTimeout = setTimeout(() => {
            const searchTerm = e.target.value.toLowerCase();
            document.querySelectorAll('.product').forEach(product => {
                const productName = product.getAttribute('data-product-name').toLowerCase();
                product.style.display = productName.includes(searchTerm) ? 'block' : 'none';
            });
        }, 300); // 300ms delay for debounce
    });
}

// Category filtering functionality to show/hide products by category
export function handleCategoryFilter() {
    document.querySelectorAll('.category-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');

            // Show/hide products based on the selected category
            document.querySelectorAll('.product').forEach(product => {
                if (category === 'all' || product.getAttribute('data-category') === category) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });

            // Remove the active class from all category links
            document.querySelectorAll('.category-link').forEach(link => link.classList.remove('active'));

            // Add the active class to the clicked category link
            link.classList.add('active');
        });
    });
}
