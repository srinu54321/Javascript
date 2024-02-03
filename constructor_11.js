function person(first,second,age,city){
    this.first=first;
    this.second=second;
    this.age=age;
    this.city=city;
    this.syna=function(){
        return this.first+" "+this.second;
    }
}

const syyna=new person('banoth','srinivas',22,'medak');
document.getElementById('demo').innerHTML=syyna.syna();