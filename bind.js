const person1={
    fistname:'srinivas',
    secondname:"banoth",
    fullname:function(){
        return this.fistname+" "+this.secondname;
    }
} 
const person2={
    fistname:"dharavath",
    secondname:"ameena"
}
let x=person1.fullname.bind(person2);
document.getElementById("demo").innerHTML=x();
