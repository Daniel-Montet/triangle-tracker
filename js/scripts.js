var list=[];
function getInput1(){

  var input1=document.getElementById("input1").value;
  var input1=parseInt(input1);
  alert(input1);
  list.push(input1);

}
function getInput2(){

  var input2=document.getElementById("input2").value;
  var input2=parseInt(input2);
  alert(input2);
  list.push(input2);
}
function getInput3(){

  var input3=document.getElementById("input3").value;
  var input3=parseInt(input3);
  alert(input3);
  list.push(input3);
  var num1=parseInt(list[0]);
  var num2=parseInt(list[1]);
  var num3=parseInt(list[2]);
  triangilize(num1,num2,num3);


  function triangilize(firstnumber,secondnumber,thirdnumber){

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

  }


}
