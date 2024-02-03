function person(first,second,age,city){
    this.firstname=first;
    this.secondname=second;
    this.age=age;age;
    this.city=city;
}
const syna=new person('srinivas','banoth',22,"medak");
document.getElementById('demo').innerHTML=syna.firstname;