var inputarray=[];//ARRAY TO STORE  USER INPUTS


var equilateral="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIaTGLZ9twL_rSpD2lZCFhYuD2Ipu6PMT550F0PiO5yUJpcDyoQg";//SRC IMAGE
var scalene="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-n_VYH8Czz4HDGORWlz3cQxll_wB5Mcs4pZz65DyvtbnFDEs";//SRC IMAGE
var nottriangle="https://qph.fs.quoracdn.net/main-qimg-727e72788cc759de0d719434b6bba920.webp";//SRC IMAGE
var isosceles="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Triangle.Isosceles.svg/1200px-Triangle.Isosceles.svg.png";//SRC IMAGE


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
//FIRST HIDE ALL ELEMENTS TO RESET PAGE FOR RECURRENT INPUT
    hideElem("IscoscelesTriangle");
    hideElem("EquilateralTriangle");
    hideElem("NotaTriangle");
    hideElem("ScaleneTriangle");
//

  if ((firstnumber===secondnumber) && (firstnumber===thirdnumber) && (secondnumber===thirdnumber)){//CHECK IF VALUES EQUILATERAL
    printtype("an equilateral");
    output(equilateral);
    unhideElem("triangle");
    unhideElem("listheader");
    unhideElem("EquilateralTriangle");

  }
  else if ((firstnumber+secondnumber)<=thirdnumber || (firstnumber+secondnumber)<=thirdnumber || (secondnumber+thirdnumber)<=firstnumber){//CHECK IF VALUES ARE A TRIANGLE AT ALL
    printtype("no");
    output(nottriangle);
    unhideElem("triangle",);
    unhideElem("listheader");
    unhideElem("NotaTriangle");
  }
  else if(((firstnumber===secondnumber)&&(firstnumber!=thirdnumber)&&(secondnumber!=thirdnumber)) || ((firstnumber===thirdnumber)&&(firstnumber!=secondnumber)&&(thirdnumber!=secondnumber))||((secondnumber===thirdnumber)&& (secondnumber!=firstnumber)&&(thirdnumber!=firstnumber))){//CHECK IF ISOSCELES

    printtype("an isosceles");
    output(isosceles);
    unhideElem("triangle");
    unhideElem("listheader");
    unhideElem("IscoscelesTriangle");

  }
  else{//CHECK IF VALUES SCALENE
    do {
      if((firstnumber+secondnumber)>thirdnumber || (firstnumber+thirdnumber)>secondnumber || (secondnumber+thirdnumber)>firstnumber)
      output(scalene);
      unhideElem("triangle");
      unhideElem("listheader");
      unhideElem("ScaleneTriangle");
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

function hideElem(){//TAKE ELEMENT ID AND INITIALY HIDE IMAGE ONLOADING OF PAGE
  //LIST ID VALUES
  var triangleobject=document.getElementById('triangle').style.display='none';
  var listheaderobject=document.getElementById('listheader').style.display='none';
  var EquilateralTriangleobject=document.getElementById('EquilateralTriangle').style.display='none';
  var IscoscelesTriangleobject=document.getElementById('IscoscelesTriangle').style.display='none';
  var ScaleneTriangleoobject=document.getElementById('ScaleneTriangle').style.display='none';
  var NotaTriangleobject=document.getElementById('NotaTriangle').style.display='none';

}

function unhideElem(arg){//TAKE ELEMENT ID AND UNHIDE ELEMENT AFTER EXCECUTION
    document.getElementById(arg).style.display='block';
    alert("un-hidden")
}

function output(src){//function to output of triangle image type  from srC ONLINE
  var input=document.getElementById("triangle").src=src;
}

function printtype(triangleoutput){//PRINT IN PARAGRAPH THE TYPE OF TRIANGLE ON EXCECUTION
  var print=document.getElementById("typeoftriangle").innerHTML="The values are a fit for "+ triangleoutput + " Triangle";
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
