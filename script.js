// ==============================
// BB2 AirPods Website Script
// ==============================

// Rotating customer vouches
const vouches = [
    "⭐⭐⭐⭐⭐ Fast delivery - L••••",
    "⭐⭐⭐⭐⭐ Great quality - J••••",
    "⭐⭐⭐⭐⭐ Trusted seller - M••••",
    "⭐⭐⭐⭐⭐ Would definitely buy again - A••••",
    "⭐⭐⭐⭐⭐ Quick replies and smooth deal - D••••",
    "⭐⭐⭐⭐⭐ Legit AirPods - S••••",
    "⭐⭐⭐⭐⭐ Seller was really helpful - K••••",
    "⭐⭐⭐⭐⭐ Arrived the same day - T••••",
    "⭐⭐⭐⭐⭐ Best prices in BB2 - H••••",
    "⭐⭐⭐⭐⭐ Highly recommend - C••••"
];

const vouchBox = document.getElementById("vouch");

if (vouchBox) {

    let current = 0;

    setInterval(() => {

        vouchBox.style.opacity = "0";

        setTimeout(() => {

            current++;

            if (current >= vouches.length) {
                current = 0;
            }

            vouchBox.textContent = vouches[current];
            vouchBox.style.opacity = "1";

        }, 300);

    }, 3000);

}

// Fade cards in on page load
window.addEventListener("load", () => {

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";

        setTimeout(() => {

            card.style.transition = "0.6s";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 150);

    });

});

// Smooth hover glow on buttons
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

});

// Small console message
console.log("BB2 AirPods website loaded successfully.");

// load cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// add item

// load cart from storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// update basket counter
function updateCart(){
    const count = document.getElementById("cartCount");

    if(count){
        count.textContent = cart.length;
    }
}

// add item to cart
function addToCart(item){
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

// run on page load
updateCart();
