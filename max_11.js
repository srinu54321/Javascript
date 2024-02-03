function myfunction(...syna){
    let max=Infinity;
    for(let i of syna){
        if(i<max){
            max=i;
        }
    }
    return max;
}
document.getElementById('demo').innerHTML=myfunction(1123,2,3,4,5,6,7,8,9);