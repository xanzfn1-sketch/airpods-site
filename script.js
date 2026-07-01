// --- Data ---
const products = [
    { id: "p1", name: "1 Pair AirPods", price: 15 },
    { id: "p2", name: "2 Pairs AirPods", price: 25 },
    { id: "p3", name: "5 Pairs Bundle", price: 60 },
    { id: "p4", name: "Bulk Deal", price: 150 }
];
const reviews = ["Fast shipping!", "Quality is 10/10", "Best service in BB2"];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// --- Basket & UI Functions ---

function toggleCart(show) {
    const drawer = document.getElementById("cart-drawer");
    if (drawer) drawer.style.display = show ? "flex" : "none";
    if (show) renderCart();
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.innerText = msg;
    toast.style.opacity = "1";
    setTimeout(() => { toast.style.opacity = "0"; }, 2000);
}

function renderCart() {
    const container = document.getElementById("cart-items-container");
    const totalEl = document.getElementById("total");
    const countEl = document.getElementById("cart-count");
    if (!container) return;

    container.innerHTML = "";
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        count += item.qty;
        container.innerHTML += `<p>${item.name} x${item.qty} - £${item.price * item.qty}</p>`;
    });

    totalEl.innerText = "£" + total;
    countEl.innerText = count;
}

function checkout() {
    const total = document.getElementById("total").innerText;
    let message = "Hi, I'd like to order: ";
    cart.forEach(i => message += `${i.name} (x${i.qty}), `);
    message += `Total: ${total}`;
    window.location.href = `https://wa.me/447463399522?text=${encodeURIComponent(message)}`;
}

// --- Original Store Functions ---

function renderProducts() {
    const box = document.getElementById("products");
    if (!box) return;
    box.innerHTML = "";
    
    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h2>${p.name}</h2><h1>£${p.price}</h1>`;
        
        const btn = document.createElement("button");
        btn.className = "btn";
        btn.innerText = "Add to Basket";
        btn.onclick = () => {
            let item = cart.find(i => i.name === p.name);
            item ? item.qty++ : cart.push({ name: p.name, price: p.price, qty: 1 });
            localStorage.setItem("cart", JSON.stringify(cart));
            showToast(p.name + " added!");
            renderCart(); // Update drawer badge/total
        };
        card.appendChild(btn);
        box.appendChild(card);
    });
}

function rotateReviews() {
    const box = document.getElementById("reviewBox");
    if (!box) return;
    let reviewIdx = 0;
    box.innerText = reviews[reviewIdx]; 
    setInterval(() => {
        reviewIdx = (reviewIdx + 1) % reviews.length;
        box.innerText = reviews[reviewIdx];
    }, 3000);
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    rotateReviews();
    renderCart(); // Initialize badge count
});
