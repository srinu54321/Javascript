const person={
    firstname:'srinvas',
    secondname:'banoth',
    number:9912352744,
    fullname:function(){
        return person.firstname+" "+person.secondname;
    }
}
document.getElementById('demo').innerHTML=person.fullname();