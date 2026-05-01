let data;

  async function init(){
let link="collision.json";
info = await fetch(link);
data = await info.json();

let output = document.getElementById("output");
let build ="";

for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    build += `<div class="fitted card">
          
  <h2> ZIP:  ${collision.zip_code}</h2>;
    <p> Date  :   ${collision.crash_date}</p>
    <p> Crash Time:  ${collision.crash_time}</p>
    <p> Street Name:  ${collision.street_name}</p>
    <p> Borough:  ${collision.borough}</p>
    <p>Injured:   ${collision.number_of_persons_injured}</p>

    </div>`
     }
     output.innerHTML=build;
}
function filterByZip(){
  let output = document.getElementById("output");
  let Zip = document.getElementById("Zipcode").value;
   
for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
 if(collision.Zip_code== Zip){

    build += `<div class="fitted card">
          
  <h2> ZIP:  ${collision.zip_code}</h2>;
    <p> Date  :   ${collision.crash_date}</p>
    <p> Crash Time:  ${collision.crash_time}</p>
    <p> Street Name:  ${collision.street_name}</p>
    <p> Borough:  ${collision.borough}</p>
    <p>Injured:   ${collision.number_of_persons_injured}</p>

    </div>`
     }
     output.innerHTML=build;
}
   
 
