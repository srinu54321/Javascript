const names={
    firstname:'srinivas',
    second:'banoth',
    number:9912352744,
    car:[
    {name:'srinivas',rename:['syna','seena','babya','babu']},
    {name:'ameena',rename:['ammu','anamika','eddi']},
    {name:'srinivas',rename:['bhooli','ravinder','vittal','saritha']},
    ]
}
let x="";
for(let i in names.car){
    x+="<h1>"+names.car[i].name+"</h1>";
    for(let j in names.car[i].rename){
        x+=names.car[i].rename[j]+"<br>";
    }
}
document.getElementById('demo').innerHTML=x;