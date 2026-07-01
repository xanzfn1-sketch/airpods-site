// --- Data ---
const products = [
    { id: "p1", name: "1 Pair AirPods", price: 15 },
    { id: "p2", name: "2 Pairs AirPods", price: 25 },
    { id: "p3", name: "5 Pairs Bundle", price: 60 },
    { id: "p4", name: "Bulk Deal", price: 150 }
];
const reviews = ["Fast shipping!", "Quality is 10/10", "Best service in BB2"];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// --- Functions ---
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
        // Directly attaching the click event
        btn.onclick = () => {
            let item = cart.find(i => i.name === p.name);
            item ? item.qty++ : cart.push({ name: p.name, price: p.price, qty: 1 });
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(p.name + " added to basket!");
        };
        
        card.appendChild(btn);
        box.appendChild(card);
    });
}

function rotateReviews() {
    const box = document.getElementById("reviewBox");
    if (!box) return;

    let reviewIdx = 0;
    // Set immediately so it doesn't show "Loading..."
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
});
