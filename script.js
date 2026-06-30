
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
