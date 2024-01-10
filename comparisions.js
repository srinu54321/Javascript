function myfunction(){
    let a=document.getElementById("age").value;
    let veriable=(a>=18) ? "able to vote " : "not able to vote ";
    document.getElementById("demo").innerHTML=veriable;
}