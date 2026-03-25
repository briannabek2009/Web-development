function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361",
  }
  let output = document.getElementById("output");
  //Challenge 1: Create and display a card of the information contained in the JSON variable school

let build =`
      <div class="card">
        <h2> ${ school.name } </h2>
        <img src="${school.image}">
          <p>${school.address}</p>
      </div>
`

    output.innerHTML= build;
}  


function artist(){
  //Challenge 2: Fill the JSON below with the specified information
  let artist = {
    "name":"Bad Bunny",
    "image":"https://i.pinimg.com/originals/f3/d6/97/f3d697a61a7b8e6f5182bec79190cbb9.jpg",
    "album":"https://th.bing.com/th/id/OIP.hcdcHvG-rmsY_Ec3l3w5_AHaJ4?w=130&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    "url":"https://youtu.be/Vw_lols-BZA?si=cObdCv3Yf_p7sJzv",
  }
  let output = document.getElementById("output");
  //Challenge 3: Build a card for the information in the JSON.  Make the image a hyperlink to the url provided.

let build =`
      <div class="card">
        <h2> ${ artist.name } </h2>
        <img src="${artist.image}">
          <p>${artist.url}</p>
      </div>
`
output.innerHTML = build;
}


