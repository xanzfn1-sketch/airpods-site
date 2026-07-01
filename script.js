/* ==========================================================================
   PRODUCTS DATA
   ========================================================================== */
const products = [
    {name: "1 Pair AirPods", price: 15},
    {name: "2 Pairs AirPods", price: 25},
    {name: "5 Pairs Bundle", price: 60},
    {name: "Bulk Deal", price: 150}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* SAVE CART SYSTEM */
function save(){
    localStorage.setItem("cart", JSON.stringify(cart));
}

/* PREMIUM TOAST SYSTEM */
function toast(msg){
    const t = document.getElementById("toast");
    if(!t) return;

    t.innerText = msg;
    t.style.opacity = 1;

    setTimeout(() => {
        t.style.opacity = 0;
    }, 1500);
}

/* ADD TO BASKET */
function addToCart(name, price){
    let item = cart.find(i => i.name === name);

    if(item){
        item.qty++;
    } else {
        cart.push({name, price, qty: 1});
    }

    save();
    toast(`Added ${name} to basket!`);
}

/* ASYMMETRIC BENTO PRODUCTS RENDER */
function renderProducts(){
    const box = document.getElementById("products");
    if(!box) return;

    box.innerHTML = ""; // Clear existing dummy data

    products.forEach(p => {
        box.innerHTML += `
        <div class="card">
            <div>
                <div class="mini-badge">IN STOCK</div>
                <h2>${p.name}</h2>
            </div>
            <div>
                <h1>£${p.price}</h1>
                <button class="btn" onclick="addToCart('${p.name}', ${p.price})">
                    Add to Basket
                </button>
            </div>
        </div>
        `;
    });
}

/* ROTATING CUSTOMER REVIEWS (2-Second Loop) */
const reviews = [
    "Fast delivery ⭐⭐⭐⭐⭐",
    "Best seller in BB2 ⭐⭐⭐⭐⭐",
    "Very trusted ⭐⭐⭐⭐⭐",
    "Great quality ⭐⭐⭐⭐⭐",
    "Would buy again ⭐⭐⭐⭐⭐"
];

let reviewIndex = 0;

function rotateReviews(){
    const box = document.getElementById("reviewBox");
    if(!box) return;

    box.innerText = reviews[reviewIndex];

    reviewIndex++;
    if(reviewIndex >= reviews.length) {
        reviewIndex = 0;
    }

    setTimeout(rotateReviews, 2000);
}

/* INITIALIZE APPLICATION ENGINE */
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    rotateReviews();
});
