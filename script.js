document.addEventListener("DOMContentLoaded", () => {
    // Only try to render if the elements exist on the current page
    if (document.getElementById("products")) renderProducts();
    if (document.getElementById("cart-items-container")) renderCart();
    
    // Only start review rotation if the review box exists
    if (document.getElementById("reviewBox")) rotateReviews();

    // Smoother Intro Fade-out
    const intro = document.getElementById("intro-screen");
    if (intro) {
        setTimeout(() => {
            intro.classList.add("fade-out");
            setTimeout(() => intro.remove(), 600);
        }, 1800);
    }
});
