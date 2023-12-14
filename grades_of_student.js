let marks=prompt("the marks of the student is ")
if(marks>=90 && marks<=100){
    console.log("the student is scored the A");
}
else if(marks>=70 && marks<=89){
    console.log("the student is scred B grade ");
}
else if(marks>=60 && marks<=69){
    console.log("the student is scored the C grade")
}
else if(marks>=50 && marks<=59){
    console.log("the student is scored the D grade")
}
else if(marks>=0 && marks<=49){
    console.log("the student is failed ")
}
else{
    console.log("you are entered the wrong marks")
}
