
// Order button (ONLY works if you still use onclick somewhere)
function order(){
    window.location.href = "order.html";
}

// Reviews button scroll (if you use onclick="goReviews()")
function goReviews(){
    const section = document.getElementById("reviews");
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Vouch slider (safe version)
const vouches = [
    "⭐ Fast delivery, legit AirPods — L••••",
    "⭐ Best prices in BB2 — J••••",
    "⭐ Trusted seller, smooth deal — M••••",
    "⭐ Good quality, quick replies — A••••",
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
