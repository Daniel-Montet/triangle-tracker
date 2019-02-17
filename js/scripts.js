var inputarray=[];
var equilateral="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaTGLZ9twL_rSpD2lZCFhYuD2Ipu6PMT550F0PiO5yUJpcDyoQg";
var scalene="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-n_VYH8Czz4HDGORWlz3cQxll_wB5Mcs4pZz65DyvtbnFDEs";
var nottriangle="https://qph.fs.quoracdn.net/main-qimg-727e72788cc759de0d719434b6bba920.webp";
var isosceles="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Triangle.Isosceles.svg/1200px-Triangle.Isosceles.svg.png";

function getInput(){//GET INPUT FROM HTML ELEMENT TEXTBOX
  var input1=document.getElementById("input1").value;
  var input1=parseInt(input1);
  inputarray.push(input1);

  var input2=document.getElementById("input2").value;
  var input2=parseInt(input2);
  inputarray.push(input2);


  var input3=document.getElementById("input3").value;
  var input3=parseInt(input3);
  inputarray.push(input3);

  var num1=parseInt(inputarray[0]);
  var num2=parseInt(inputarray[1]);
  var num3=parseInt(inputarray[2]);
  triangilize(num1,num2,num3);
  reset(inputarray);

}


function triangilize(firstnumber,secondnumber,thirdnumber){////BUSINESS LOGIC TAKES IN AND COMPUTES DIFFERENT VALUE ENTERED BY USER

  if ((firstnumber===secondnumber) && (firstnumber===thirdnumber) && (secondnumber===thirdnumber)){
    printtype("an equilateral");
    output(equilateral);
  }
  else if ((firstnumber+secondnumber)<=thirdnumber || (firstnumber+secondnumber)<=thirdnumber || (secondnumber+thirdnumber)<=firstnumber){
    printtype("no");
    output(nottriangle);
  }
  else if(((firstnumber===secondnumber)&&(firstnumber!=thirdnumber)&&(secondnumber!=thirdnumber)) || ((firstnumber===thirdnumber)&&(firstnumber!=secondnumber)&&(thirdnumber!=secondnumber))||((secondnumber===thirdnumber)&& (secondnumber!=firstnumber)&&(thirdnumber!=firstnumber))){
    printtype("an isosceles");
    output(isosceles);
  }
  else{
    do {
      if((firstnumber+secondnumber)>thirdnumber || (firstnumber+thirdnumber)>secondnumber || (secondnumber+thirdnumber)>firstnumber)
      output(scalene);
      break;
    }

    while (firstnumber!=secondnumber && secondnumber!=thirdnumber && firstnumber!=thirdnumber) {
    }
  }
  alert (inputarray);
}


function reset(){//RESET INPUT ARRAY AFTER INPUT SUBMISSION AND PRINTING ON HTML
  inputarray.pop(0);
  inputarray.pop(1);
  inputarray.pop(2);

}

function hideimage(){//INITIALY HIDE IMAGE ONLOADING OF PAGE
  document.getElementById('triangle').
}

function output(src){//function to output image type of triangle from src
  var input=document.getElementById("triangle").src=src;
}

function printtype(triangleoutput){//PRINT IN PARAGRAPH THE TYPE OF TRIANGLE
  var print=document.getElementById("typeoftriangle").innerHTML="The values are a fit for "+ triangleoutput + "Triangle";
}


//function validate(input){//function to validate input values
//    alert(input);
//var input= parseInt(input);
//if ((input+input)!=(input*2)){
//    alert("Wrong type of input")
//    reset(inputarray);
//  }
//  else{
//    getInput();
//  }
//}
