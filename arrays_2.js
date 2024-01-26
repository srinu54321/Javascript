const cars=['volvo','audi','tata','suzuki'];
document.getElementById("demo").innerHTML=cars;
function syna(){
    cars[cars.length]='srjina';
    document.getElementById("demo").innerHTML=cars;
}