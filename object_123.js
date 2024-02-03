const people={
    firstname:'srinivas',
    secondname:"banoth",
    roll_no:"20211A0309",
};
let text="";
for(let i in people){
    text+=people[i]+"<br>";
}
document.getElementById('demo').innerHTML=text;