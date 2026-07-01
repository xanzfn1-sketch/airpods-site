const products = [
{name:"Quantum AirPods", price:15},
{name:"Neural AirPods", price:25},
{name:"Hyper Pods X", price:60},
{name:"BB2 Ultra Pack", price:150}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function save(){
localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name,price){

let item = cart.find(i => i.name === name);

if(item){
item.qty++;
}else{
cart.push({name,price,qty:1});
}

save();
alert("Added: " + name);
}

function render(){
const box = document.getElementById("products");

products.forEach(p=>{
box.innerHTML += `
<div class="card">
<h2>${p.name}</h2>
<h1>£${p.price}</h1>
<button class="btn" onclick="addToCart('${p.name}',${p.price})">
Add
</button>
</div>
`;
});
}

render();
