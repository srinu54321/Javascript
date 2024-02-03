const person ={
    firstname:'banoth',
    secondname:'srinivas',
    roll:'1234567'
}
person.name=function(){
    return (this.firstname+" "+this.secondname).toUpperCase();
}
document.getElementById("demo").innerHTML=person.name();