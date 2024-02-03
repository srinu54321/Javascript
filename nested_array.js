const people={
    firstName:'banoth',
    secondName:'srinivas',
    number:9912352744,
    thanda:[
        {animals:"cow",color:['black','white']},
        {animals:'dog',color:['black','white','light-block']},
        {animals:'hen',color:['block','red','purple']}
    ]    
}
let empty="";
for(let i in people.thanda){
    empty=empty+"<div><b>"+people.thanda[i].animals+"</b></div>";
    for(let j in people.thanda[i].color){
        empty=empty+people.thanda[i].color[j]+"<br>";
    }
}
document.getElementById('demo').innerHTML=empty;