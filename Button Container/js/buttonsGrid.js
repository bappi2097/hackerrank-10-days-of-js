  function rotate(){
      let temp = document.querySelector("#btn1").innerHTML;
     document.querySelector("#btn1").innerHTML=document.querySelector("#btn4").innerHTML;
     document.querySelector("#btn4").innerHTML=document.querySelector("#btn7").innerHTML;
     document.querySelector("#btn7").innerHTML=document.querySelector("#btn8").innerHTML;
     document.querySelector("#btn8").innerHTML=document.querySelector("#btn9").innerHTML;
     document.querySelector("#btn9").innerHTML=document.querySelector("#btn6").innerHTML;
     document.querySelector("#btn6").innerHTML=document.querySelector("#btn3").innerHTML;
     document.querySelector("#btn3").innerHTML=document.querySelector("#btn2").innerHTML;
     document.querySelector("#btn2").innerHTML=temp;
  }