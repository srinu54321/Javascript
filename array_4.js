const person =[8,7,6,5,4,3,5,6,7,8,8,7,6,5,4,4];
document.getElementById('demo1').innerHTML=person;
function syna(){
    person.sort(function(a,b){
        return (a-b);
    });
    document.getElementById('demo2').innerHTML=person;
}