// --- Configuration ---
const products = [
    { id: "p1", name: "1 Pair AirPods", price: 15 },
    { id: "p2", name: "2 Pairs AirPods", price: 25 },
    { id: "p3", name: "5 Pairs Bundle", price: 60 },
    { id: "p4", name: "Bulk Deal", price: 150 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// --- Core Functions ---
function saveCart() { localStorage.setItem("cart", JSON.stringify(cart)); }

function renderProducts() {
    const box = document.getElementById("products");
    if (!box) return;
    box.innerHTML = products.map(p => `
        <div class="card">
            <h2>${p.name}</h2>
            <h1>£${p.price}</h1>
            <button class="btn" onclick="addToCart('${p.name}', ${p.price})">Add to Basket</button>
        </div>
    `).join('');
}

function addToCart(name, price) {
    let item = cart.find(i => i.name === name);
    item ? item.qty++ : cart.push({ name, price, qty: 1 });
    saveCart();
    renderCart();
}

function renderCart() {
    const container = document.getElementById("cart-items-container");
    const totalBox = document.getElementById("total");
    if (!container) return;
    
    container.innerHTML = cart.length === 0 ? "Your basket is empty." : "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.qty;
        container.innerHTML += `<div>${item.name} x${item.qty}</div>`;
    });
    if (totalBox) totalBox.innerText = "£" + total;
}

// --- Init ---
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    renderCart();
    
    // Auto-remove intro after 2.5s if not already gone
    setTimeout(() => {
        const intro = document.getElementById("intro-screen");
        if (intro) intro.style.display = "none";
    }, 2500);
});
