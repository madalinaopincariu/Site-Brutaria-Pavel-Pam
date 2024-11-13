function reserveProduct(product_id) {
    // Assuming you have a function to fetch product details from the server based on the product_id
    fetchProductDetails(product_id)
        .then(productDetails => {
            // Display the reservation form with the product details
            displayReservationForm(productDetails);
        })
        .catch(error => {
            console.error('Error fetching product details:', error);
            // Handle error, such as displaying an error message to the user
        });
}

function fetchProductDetails(product_id) {
    // Here you would typically make an AJAX request to your server to fetch product details based on the product_id
    // For this example, I'll simulate an AJAX request using fetch API
    return fetch('/getProductDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ product_id: product_id })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch product details');
            }
            return response.json();
        });
}

function displayReservationForm(productDetails) {
    // Assuming you have a reservation form in your HTML with fields for name, email, quantity, etc.
    // You can populate these fields with the product details
    document.getElementById("product-name").value = productDetails.name;
    document.getElementById("product-description").value = productDetails.description;
    document.getElementById("product-price").value = productDetails.price;

    // Display the reservation form (assuming it has an ID of "reservation-form")
    document.getElementById("reservation-form").style.display = "block";
}
