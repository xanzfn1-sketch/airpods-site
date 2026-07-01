const products = [
{name:"1 Pair", price:15},
{name:"2 Pairs", price:25},
{name:"5 Pairs", price:60},
{name:"Bulk Deal", price:150}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* SAVE SYSTEM */
function save(){
localStorage.setItem("cart", JSON.stringify(cart));
}

/* ADD */
function addToCart(name, price){
cart.push({name, price});
save();
alert(name + " added");
renderProducts();
}

/* REMOVE */
function removeItem(i){
cart.splice(i,1);
save();
}

/* CLEAR */
function clearCart(){
cart = [];
save();
}

/* RENDER PRODUCTS */
function renderProducts(){
const box = document.getElementById("products");
if(!box) return;

box.innerHTML = "";

products.forEach(p=>{
const div = document.createElement("div");
div.className = "card";

div.innerHTML = `
<h2>${p.name}</h2>
<h1>£${p.price}</h1>
<button class="btn" onclick="addToCart('${p.name}',${p.price})">
Add to Basket
</button>
`;

box.appendChild(div);
});
}

/* CHAT SYSTEM */
document.getElementById("chatBtn").onclick = ()=>{
document.getElementById("chatBox").style.display="block";
};

function closeChat(){
document.getElementById("chatBox").style.display="none";
}

/* INIT */
renderProducts();
