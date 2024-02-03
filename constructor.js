function person(firstname,secondname,age,city){
    this.firstname=firstname;
    this.secondname=secondname;
    this.age=age;
    this.city;
    this.name='english';
}
const myfather=new person('srinivas','banoth',22,'medak');
const mymother=new person('dharavath','ameena',24,'medak');
document.getElementById('demo').innerHTML=myfather.name+"<br>"+mymother.name;