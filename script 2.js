function order(){
    alert("Contact Rayyan Adam to order (BB2 only)");
}
const vouches = [
    "⭐ “Fast delivery, legit AirPods 🔥” — Liam",
    "⭐ “Best prices I’ve seen, came next day” — Jayden",
    "⭐ “100% trust, bought 3 pairs” — Marcus",
    "⭐ “Good quality and quick replies” — Ayaan",
    "⭐ “Reliable seller, smooth deal” — Daniel"
];

let i = 0;

setInterval(() => {
    i = (i + 1) % vouches.length;
    document.getElementById("vouch").style.opacity = 0;

    setTimeout(() => {
        document.getElementById("vouch").innerText = vouches[i];
        document.getElementById("vouch").style.opacity = 1;
    }, 300);

}, 2500);