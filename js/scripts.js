var inputarray=[];
function getInput(){//get input from  textboxes
  var input1=document.getElementById("input1").value;
  var input2=parseInt(input1);
  inputarray.push(input1);
  alert(input1);

  var input2=document.getElementById("input2").value;
  var input2=parseInt(input2);
  inputarray.push(input2);
  alert(input2);

  var input3=document.getElementById("input3").value;
  var input3=parseInt(input3);
  inputarray.push(input3);
  alert(input3);

  var num1=parseInt(inputarray[0]);
  var num2=parseInt(inputarray[1]);
  var num3=parseInt(inputarray[2]);
  triangilize(num1,num2,num3);
  reset(inputarray);

}
function triangilize(firstnumber,secondnumber,thirdnumber){////BUSINESS LOGIC

  if ((firstnumber===secondnumber) && (firstnumber===thirdnumber) && (secondnumber===thirdnumber)){
    alert("equilateral");
  }
  else if ((firstnumber+secondnumber)<=thirdnumber || (firstnumber+secondnumber)<=thirdnumber || (secondnumber+thirdnumber)<=firstnumber){
    alert("cannot form triangle");
  }
  else{
    do {
      if((firstnumber+secondnumber)>thirdnumber || (firstnumber+thirdnumber)>secondnumber || (secondnumber+thirdnumber)>firstnumber)
      alert("scalene")
      break;
    }

    while (firstnumber!=secondnumber && secondnumber!=thirdnumber && firstnumber!=thirdnumber) {
    }
  }
  alert (inputarray);
}

function reset(){
  inputarray.pop(0);
  inputarray.pop(1);
  inputarray.pop(2);
  alert(inputarray)

}
