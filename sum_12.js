function myfunction(...seena){
    let sum=0;
    for(let i of seena){
        sum+=i;
    }
    return sum;
}
const x=myfunction(1,2,3,4,5,6,7,8,9,10);
document.getElementById('demo').innerHTML=x;

