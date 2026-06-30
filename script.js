
// =====================
// CART SYSTEM
// =====================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(item){
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function updateCart(){
    const cartCount = document.getElementById("cartCount");

    if(cartCount){
        cartCount.textContent = cart.length;
    }
}

// run on load
updateCart();


// =====================
// VOUCH SLIDER
// =====================

const vouches = [
    "⭐⭐⭐⭐⭐ Fast delivery — L••••",
    "⭐⭐⭐⭐⭐ Great quality — J••••",
    "⭐⭐⭐⭐⭐ Trusted seller — M••••",
    "⭐⭐⭐⭐⭐ Best prices in BB2 — A••••",
    "⭐⭐⭐⭐⭐ Quick replies — D••••",
    "⭐⭐⭐⭐⭐ Very reliable — S••••",
    "⭐⭐⭐⭐⭐ Would buy again — K••••"
];

let index = 0;

const vouchBox = document.getElementById("vouch");

if(vouchBox){

    setInterval(() => {

        index++;
        if(index >= vouches.length){
            index = 0;
        }

        vouchBox.style.opacity = "0";

        setTimeout(() => {
            vouchBox.textContent = vouches[index];
            vouchBox.style.opacity = "1";
        }, 300);

    }, 3000);

}


// =====================
// BUTTON ANIMATION
// =====================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });

});


// =====================
// DEBUG
// =====================

console.log("BB2 Store script loaded");
