const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const DB_FILE = "./db.json";

/* LOAD DB */
function loadDB(){
return JSON.parse(fs.readFileSync(DB_FILE));
}

/* SAVE DB */
function saveDB(data){
fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

/* CREATE ORDER */
app.post("/api/order", (req,res)=>{
const db = loadDB();

const order = {
id: "BB2-" + Math.floor(Math.random()*999999),
items: req.body.items,
status: "Processing",
created: Date.now()
};

db.orders.push(order);
saveDB(db);

res.json(order);
});

/* GET ORDER */
app.get("/api/order/:id",(req,res)=>{
const db = loadDB();

const order = db.orders.find(o => o.id === req.params.id);

if(!order){
return res.json({error:"Not found"});
}

res.json(order);
});

/* UPDATE STATUS (admin simulation) */
app.post("/api/update-status",(req,res)=>{
const db = loadDB();

const order = db.orders.find(o => o.id === req.body.id);

if(order){
order.status = req.body.status;
saveDB(db);
}

res.json(order);
});

app.listen(3000, ()=>{
console.log("BB2 Store running on port 3000");
});
