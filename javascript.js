function srinivas(a,b){
    return a+b;
}
let x=parseInt(prompt("enter the first value "));
let y=parseInt(prompt("enter the second value "))
let A=srinivas(x,y);
document.getElementById("demo").innerHTML=A;
