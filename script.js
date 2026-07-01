// Ensure 'reviews' array is defined in your script
const reviews = ["Fast shipping!", "Quality is 10/10", "Best service in BB2"]; 
let reviewIdx = 0;

function rotateReviews() {
    const box = document.getElementById("reviewBox");
    if (!box) return;

    // Fix: Force immediate update so "Loading..." disappears
    box.innerText = reviews[0];
    reviewIdx = 1;

    setInterval(() => {
        box.innerText = reviews[reviewIdx];
        reviewIdx = (reviewIdx + 1) % reviews.length;
    }, 3000);
}

function renderProducts() {
    const box = document.getElementById("products");
    if (!box) return;
    box.innerHTML = "";
    
    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<h2>${p.name}</h2><h1>£${p.price}</h1>`;
        
        // Fix: Safer button attachment
        const btn = document.createElement("button");
        btn.className = "btn";
        btn.innerText = "Add to Basket";
        btn.onclick = () => addToCart(p.name, p.price);
        
        card.appendChild(btn);
        box.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    rotateReviews(); // Triggers the review fix
});
