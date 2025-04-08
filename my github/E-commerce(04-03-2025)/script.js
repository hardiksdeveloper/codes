document.addEventListener("DOMContentLoaded", () => {
    const cartBtn = document.getElementById("cart-btn");
    const cartCount = document.getElementById("cart-count");
    const cartItemsList = document.getElementById("cart-items");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const product = e.target.closest(".product");
            const productId = product.getAttribute("data-id");
            const productName = product.getAttribute("data-name");
            const productPrice = parseFloat(product.getAttribute("data-price"));

            const item = cart.find(i => i.id === productId);
            if (item) {
                item.quantity += 1;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
            }
            updateCart();
        });
    });

    function updateCart() {
        cartItemsList.innerHTML = "";
        let totalItems = 0;

        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
            cartItemsList.appendChild(li);
            totalItems += item.quantity;
        });

        cartCount.textContent = totalItems;
    }
});
