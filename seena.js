function syna(first,second,age,city){
    this.firstname=first;
    this.second=second;
    this.age=age;
    this.city=city;
}

const eena=new syna('banoth','srinivas',22,'medak');
eena.name=function(){
    return this.firstname+" "+this.second;
}
document.getElementById('demo').innerHTML=eena.name();