const names={
    firstname:'banoth',
    secondname:'srinivas',
    roll:'20211A0309',
    no:9912352744
};

let s="";
for(let i in names){
      
    s=s+names[i]+"<br>";
}
document.getElementById('demo').innerHTML=s;