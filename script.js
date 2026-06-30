// Order button


// Simple vouch slider (if you use it)
const vouches = [
    "⭐ Fast delivery, legit AirPods — L••••",
    "⭐ Best prices, came next day — J••••",
    "⭐ Trusted seller, smooth deal — M••••",
    "⭐ Good quality, fast replies — A••••",
    "⭐ Reliable and quick — D••••"
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
