let selectedProductPrice = 0;

function orderProduct(name, price) {
    selectedProductPrice = price;  // Store the product price
    document.getElementById('orderForm').style.display = 'block';  // Show order form
    document.getElementById('totalPrice').innerText = '';  // Clear previous total
    document.getElementById('orderConfirmation').style.display = 'none';
}

function updateTotal() {
    const quantity = parseInt(document.getElementById('quantity').value);
    if (!isNaN(quantity) && quantity > 0) {
        const total = quantity * selectedProductPrice;
        document.getElementById('totalPrice').innerText = `Total: ${total} EGP`;  // Update total price
    } else {
        document.getElementById('totalPrice').innerText = '';  // If quantity is invalid
    }
}

function submitOrder(event) {
    event.preventDefault();

    const name = document.getElementById('customerName').value;
    const address = document.getElementById('address').value;
    const quantity = document.getElementById('quantity').value;
    const payment = document.getElementById('paymentMethod').value;

    const total = quantity * selectedProductPrice;

    console.log("Order Details:", { name, address, quantity, payment, total });  // Log order details
    document.getElementById('orderConfirmation').style.display = 'block';  // Show order confirmation
    event.target.reset();  // Reset form after submission
    document.getElementById('totalPrice').innerText = '';  // Clear total
    selectedProductPrice = 0;
}