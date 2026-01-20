// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function average(){
    let g1 = parseFloat(document.getElementById("g1").value);
     let g2 = parseFloat(document.getElementById("g2").value);
      let g3 = parseFloat(document.getElementById("g3").value);
      let output = document.getElementById("output_average");

average = (g1 + g2 + g3)/3;
output.innerHTML= "average is" + average
}

// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
 function Slope(){
          let x1 = parseFloat(document.getElementById("x1").value);
          let y1 = parseFloat(document.getElementById("y1").value);
          let x2 = parseFloat(document.getElementById("x2").value);
          let y2 = parseFloat(document.getElementById("y2").value);
          let output = document.getElementById("output_Slope");
          let m=(y1-y2)/(x1-x2)
        
output.innerHTML= "Slope is" + Slope
 }

// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
      function BMI (){
         let ht= parseFloat(document.getElementById("ht").value);
         let wt = parseFloat(document.getElementById("wt").value);
         let output = document.getElementById("output_BMI");
      }
