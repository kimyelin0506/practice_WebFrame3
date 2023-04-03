function doSomething(){
   let inputA = document.getElementById("inputA").value;
   let inputB = document.getElementById("inputB").value;

   document.getElementById("valueA").innerHTML = inputA;
   document.getElementById("valueB").innerHTML = inputB;
   document.getElementById("valueC").innerHTML = parseInt(inputA) + parseInt(inputB)
}