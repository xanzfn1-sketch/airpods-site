/**
 * BB2 Store | Production Script
 */

// Global State
const state = {
    cart: JSON.parse(localStorage.getItem("bb2_cart")) || []
};

// Add to Cart Function
function updateCart(product, price) {
    state.cart.push({ product, price, id: Date.now() });
    localStorage.setItem("bb2_cart", JSON.stringify(state.cart));
    alert(product + " added to basket!");
    renderCartUI();
}

// Cart Drawer Toggle
function toggleCart(show) {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) {
        drawer.style.display = show ? 'block' : 'none';
    }
}

// UI Update
function renderCartUI() {
    const container = document.getElementById('cart-items-container');
    if (container) {
        container.innerHTML = state.cart.map(item => `
            <div class="cart-item">
                <span>${item.product}</span>
                <span>£${item.price}</span>
            </div>
        `).join('');
    }
}

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
    renderCartUI();
});
