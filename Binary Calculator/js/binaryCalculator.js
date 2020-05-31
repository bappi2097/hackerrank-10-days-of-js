var opr = "";
function btn(num){
    document.querySelector("#res").innerHTML+=num;
}
function btnClr(){
    document.querySelector("#res").innerHTML="";
    opr="";
}
function btnSum(){
    if(opr==""){
        document.querySelector("#res").innerHTML+="+";
        opr="+";
    }
}
function btnSub(){
    if(opr==""){
        document.querySelector("#res").innerHTML+="-";
        opr="-";
    }
}
function btnMul(){
    if(opr==""){
        document.querySelector("#res").innerHTML+="*";
        opr="*";
    }
}
function btnDiv(){
    if(opr==""){
        document.querySelector("#res").innerHTML+="/";
        opr="/";
    }
}
function btnEql(){
    if(!opr==""){
        let text = document.querySelector("#res").textContent;
        let num = text.split(opr);
        let a = parseInt(num[0], 2);
        let b = parseInt(num[1], 2);
        let res=0;
        switch(opr){
            case "+":
                res = a+b;
                break;
            case "-":
                res = a-b;
                break;
            case "*":
                res = a*b;
                break;
            case "/":
                res = parseInt(a/b);
                break;
        }
        document.querySelector("#res").innerHTML=res.toString(2);
        opr="";
    }
}