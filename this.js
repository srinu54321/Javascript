const person1={
    firstname:'srinivas',
    secondname:'banoth'
}
const person2={
    fullname:function(){
        return this.firstname+" "+this.secondname;
    }
}
document.getElementById("demo").innerHTML=person2.fullname.call(person1);