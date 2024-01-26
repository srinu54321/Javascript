const num=[40, 100, 1, 5, 25, 10];
document.getElementById('demo').innerHTML=num;

function syna2(){
    num.sort(function(a,b){
        return(0.5-Math.random());
    });
    document.getElementById('demo').innerHTML=num;
}
