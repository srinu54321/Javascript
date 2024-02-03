const person ={
    name:'srinivas',
    secondname:'banoth',
    get lang(){
        return this.secondname;
    }
}
document.getElementById('demo').innerHTML=person.lang;