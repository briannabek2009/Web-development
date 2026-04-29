let data;
async function init(){

let link="collision.json";
info = await fetch(link);
data = await info.json();

let output = document.getElementById("output");
let build ="";

for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    build += `<div class="card">
          
    build+=`<h2> ${collision.name}</h2>;
    <p> ${collision.crash_date}</p>
    <p> ${collision.crash_time}</p>
                 
    
    </div>
    `
}
output.innerHTML= build;
}