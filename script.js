
function orderNow(){
    window.location.href = "order.html";
}

function goReviews(){
    const reviews = document.getElementById("reviews");
    if (reviews) {
        reviews.scrollIntoView({ behavior: "smooth" });
    }
}

// vouch slider
const vouches = [
    "⭐ Fast delivery — L••••",
    "⭐ Best prices in BB2 — J••••",
    "⭐ Trusted seller — M••••",
    "⭐ Smooth deal — A••••",
    "⭐ Reliable seller — D••••"
];

let i = 0;

setInterval(() => {
    const box = document.getElementById("vouch");
    if (!box) return;

    i = (i + 1) % vouches.length;

    box.style.opacity = 0;

    setTimeout(() => {
        box.innerText = vouches[i];
        box.style.opacity = 1;
    }, 300);

}, 2500);

// generate hundreds of reviews automatically
const names = ["L••••","J••••","M••••","A••••","D••••","S••••","K••••"];

const comments = [
    "Fast delivery, legit AirPods",
    "Best prices in BB2",
    "Trusted seller",
    "Very good quality",
    "Quick replies",
    "Smooth deal",
    "100% recommended"
];

const container = document.getElementById("reviewsContainer");

for(let i = 0; i < 200; i++){
    const div = document.createElement("div");
    div.className = "review";

    const name = names[Math.floor(Math.random() * names.length)];
    const comment = comments[Math.floor(Math.random() * comments.length)];

    div.innerText = `⭐⭐⭐⭐⭐ ${comment} — ${name}`;

    container.appendChild(div);
}

// scroll animation
const reviews = document.querySelectorAll(".review");

function showReviews(){
    const triggerBottom = window.innerHeight * 0.85;

    reviews.forEach(r => {
        const top = r.getBoundingClientRect().top;

        if(top < triggerBottom){
            r.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showReviews);
showReviews();
