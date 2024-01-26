const d= new Date();
let s=d.getHours();
let v;
if(s>20){
    v="good night";
}
else{
    v="good day ";
}
document.getElementById("demo").innerHTML=v;