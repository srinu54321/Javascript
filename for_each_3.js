// const num=[1,2,3,4,5,6,9,7,8,10];
// let s="";
// function myfunction(value){
//     s=s+value+"<br>";
// }
// num.forEach(myfunction);
// document.getElementById("demo").innerHTML=s;

const num=[1,2,3,4,5,6,9,7,8,10];
let s="";
function myfunction(value){
    s=s+value+"<br>";
}
num.map(myfunction);
document.getElementById('demo').innerHTML=s;