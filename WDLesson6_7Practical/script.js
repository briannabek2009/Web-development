let data;

async function init()

let link="collision.json"
info = await fetch(link);
data = await info.json();

let output = documents.getElementsById("output");
let build ="";

for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    build += `<div class="card">`
          
    <h2> ${collision.name}</h2>
    