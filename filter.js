const num=[8,7,6,5,4,3,2,2,1,2,3,4,5];
function myfunction(value){
    return value%2==0;
}
document.getElementById('demo').innerHTML=num.filter(myfunction);