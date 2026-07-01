/* ======================= PRODUCTS CONTROLLER ======================= */
const products = [
    { id: "p1", name: "1 Pair AirPods", price: 15 },
    { id: "p2", name: "2 Pairs AirPods", price: 25 },
    { id: "p3", name: "5 Pairs Bundle", price: 60 },
    { id: "p4", name: "Bulk Deal", price: 150 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

/* TOAST CONTROLLER */
function toast(msg) {
    const t = document.getElementById("toast");
    if (!t) return;
    t.innerText = msg;
    t.style.opacity = 1;
    setTimeout(() => t.style.opacity = 0, 1500);
}

/* DRAWER TOGGLE AUTOMATION */
function toggleCart(open) {
    const drawer = document.getElementById("cart-drawer");
    if (!drawer) return;
    if (open) {
        drawer.classList.add("active");
    } else {
        drawer.classList.remove("active");
    }
}

/* CART ACTIONS */
function addToCart(name, price) {
    let item = cart.find(i => i.name === name);
    if (item) {
        item.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }
    saveCart();
    renderCart();
    toast(`Added ${name} to basket!`);
}

function updateQuantity(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    renderCart();
}

/* RENDERING INTERFACES */
function renderProducts() {
    const box = document.getElementById("products");
    if (!box) return;
    box.innerHTML = "";
    
    products.forEach(p => {
        box.innerHTML += `
        <div class="card">
            <h2>${p.name}</h2>
            <h1>£${p.price}</h1>
            <button class="btn" onclick="addToCart('${p.name}', ${p.price})">
                Add to Basket
            </button>
        </div>
        `;
    });
}

function renderCart() {
    const container = document.getElementById("cart-items-container");
    const totalBox = document.getElementById("total");
    const countBadge = document.getElementById("cart-count");

    if (!container) return;
    container.innerHTML = "";
    
    let total = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        container.innerHTML = `<div class="empty-cart-state">Your basket is empty.</div>`;
        if (totalBox) totalBox.innerText = "£0";
        if (countBadge) countBadge.innerText = "0";
        return;
    }

    cart.forEach((item, index) => {
        total += item.price * item.qty;
        totalItems += item.qty;

        container.innerHTML += `
        <div class="cart-item">
            <div class="item-info">
                <h3>${item.name}</h3>
                <p>£${item.price} each</p>
            </div>
            <div class="quantity-controls">
                <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
                <span class="qty-val">${item.qty}</span>
                <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
            </div>
        </div>
        `;
    });

    if (totalBox) totalBox.innerText = "£" + total;
    if (countBadge) countBadge.innerText = totalItems;
}

function checkout() {
    if (cart.length === 0) {
        toast("Your basket is empty!");
        return;
    }
    
    // Auto-formatting order string for easy local processing
    let orderText = "Hello! I want to place an order:%0A";
    cart.forEach(item => {
        orderText += `- ${item.qty}x ${item.name} (£${item.price * item.qty})%0A`;
    });
    orderText += `%0ATotal: ${document.getElementById("total").innerText}`;
    
    toast("Redirecting to WhatsApp...");
    setTimeout(() => {
        window.location.href = `https://wa.me/447463399522?text=${orderText}`;
        cart = [];
        saveCart();
        renderCart();
        toggleCart(false);
    }, 1000);
}

/* REVIEWS AUTOMATION */
const reviews = [
    "Fast delivery ⭐⭐⭐⭐⭐",
    "Best AirPods seller in BB2 area ⭐⭐⭐⭐⭐",
    "Extremely reliable service ⭐⭐⭐⭐⭐",
    "Excellent quality item received"
];
let reviewIdx = 0;
function rotateReviews() {
    const box = document.getElementById("reviewBox");
    if (!box) return;
    box.innerText = reviews[reviewIdx];
    reviewIdx = (reviewIdx + 1) % reviews.length;
    setTimeout(rotateReviews, 3000);
}

/* ENGINE BOOT */
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    renderCart();
    rotateReviews();
});
