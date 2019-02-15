var list=[];
var firstnumber=list[0];
var secondnumber=list[1];
var thirdnumber=list[2];
function getInput() {//get submitted inputs

  var input=document.getElementById("input").value;
  var input=parseInt(input);
  list.push(input);
  pushValue();
//  document.getElementById(id="num1").addEventListener("click",pushValue());
//  document.getElementById(id="num2").addEventListener("click",pushValue());
//  document.getElementById(id="num3").addEventListener("click",pushValue());
}
//add value

function pushValue(){
  alert(list);
  alert(firstnumber);
  alert(secondnumber);
}
