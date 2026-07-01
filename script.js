// Lightweight Cart/Store Logic
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() { localStorage.setItem("cart", JSON.stringify(cart)); }

function toast(msg) {
    const t = document.getElementById("toast");
    if (t) {
        t.innerText = msg;
        t.style.opacity = 1;
        setTimeout(() => t.style.opacity = 0, 1500);
    }
}

// Optimized Startup
document.addEventListener("DOMContentLoaded", () => {
    // Only run functions if elements exist
    if (document.getElementById("products")) renderProducts();
    if (document.getElementById("cart-items-container")) renderCart();
    if (document.getElementById("reviewBox")) rotateReviews();
    
    // Safety cleanup: If JS takes too long, CSS has already handled the fade-out
    const intro = document.getElementById("intro-screen");
    if (intro) {
        setTimeout(() => intro.remove(), 2500);
    }
});

// [Insert your existing renderProducts, renderCart, and rotateReviews functions here...]
