

var CarnoX = 250;
var CarnoY = 250;



document.addEventListener("keydown", function(e) {
if(e.keyCode == 37 || e.keyCode == 65){
    CarnoX -=10;
 document.getElementById("Carno").setAttribute("x", CarnoX)
  }
  else if(e.keyCode == 39|| e.keyCode == 68){
    CarnoX +=10;
 document.getElementById("Carno").setAttribute("x", CarnoX)
  }
  if(e.keyCode == 40 || e.keyCode == 83){
    CarnoY +=10;
 document.getElementById("Carno").setAttribute("y", CarnoY)
  }
  else if(e.keyCode == 38|| e.keyCode == 87){
   CarnoY -=10;
 document.getElementById("Carno").setAttribute("y", CarnoY)
}


foodY = Number(document.getElementById("Food").getAttribute("y"));
foodX = Number(document.getElementById("Food").getAttribute("x"));

if (CarnoX > foodX && CarnoX < foodX + 20 && CarnoY > foodY && CarnoY < foodY + 20) {
console.log("Test")
}



  })
