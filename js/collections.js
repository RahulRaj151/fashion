$(document).ready(function() {
    // Sample product data
    const products = [
        {
            id: 1,
            name: 'Floral Summer Dress',
            price: 89.99,
            category: 'dresses',
            size: ['xs', 's', 'm', 'l'],
            image: 'images/product-1.jpg',
            popularity: 4.5
        },
        {
            id: 2,
            name: 'Classic White Shirt',
            price: 49.99,
            category: 'tops',
            size: ['s', 'm', 'l', 'xl'],
            image: 'images/product-2.jpg',
            popularity: 4.2
        },
        // Add more products as needed
    ];

    let filteredProducts = [...products];

    // Function to render products
    function renderProducts(products) {
        const productsGrid = $('.products-grid');
        productsGrid.empty();

        products.forEach(product => {
            const productCard = `
                <div class="product-card" data-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="product-price">$${product.price.toFixed(2)}</p>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            `;
            productsGrid.append(productCard);
        });
    }

    // Initialize products
    renderProducts(products);

    // Filter functionality
    function applyFilters() {
        const selectedCategories = $('input[type="checkbox"]:checked')
            .map(function() { return $(this).val(); })
            .get();

        const minPrice = parseFloat($('#min-price').val());
        const maxPrice = parseFloat($('#max-price').val());

        filteredProducts = products.filter(product => {
            const matchesCategory = selectedCategories.length === 0 || 
                selectedCategories.includes(product.category);
            const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

            return matchesCategory && matchesPrice;
        });

        // Apply current sort
        applySorting();
    }

    // Sorting functionality
    function applySorting() {
        const sortBy = $('#sort-select').val();

        filteredProducts.sort((a, b) => {
            switch(sortBy) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'popular':
                    return b.popularity - a.popularity;
                case 'newest':
                default:
                    return b.id - a.id;
            }
        });

        renderProducts(filteredProducts);
    }

    // Event listeners
    $('#apply-filters').click(applyFilters);
    $('#sort-select').change(applySorting);

    // Price range slider
    $('#price-slider').on('input', function() {
        const value = $(this).val();
        $('#max-price').val(value);
    });

    $('.price-inputs input').on('change', function() {
        const minPrice = parseFloat($('#min-price').val());
        const maxPrice = parseFloat($('#max-price').val());
        $('#price-slider').val(maxPrice);
    });

    // Add to cart functionality
    $(document).on('click', '.add-to-cart', function() {
        const productId = $(this).closest('.product-card').data('id');
        const product = products.find(p => p.id === productId);
        
        if (product) {
            // Implement cart functionality here
            console.log(`Added ${product.name} to cart`);
            // Show success message
            alert('Product added to cart!');
        }
    });

    // Pagination functionality
    $('.page-btn').click(function() {
        $('.page-btn').removeClass('active');
        $(this).addClass('active');
        // Implement pagination logic here
        const page = $(this).data('page');
        console.log(`Loading page ${page}`);
    });
});