// let myfunction =(a,b) =>(a*b)
//     document.getElementById('demo').innerHTML=myfunction(5,6);

// class car{
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
// }
// const name1=new car("nano",2024);
// const name2=new car("audi",2027);
// document.getElementById("demo").innerHTML=name1.name+' '+name2.name;

// class car{
//     constructor(Carname,year){
//         this.Carname=Carname;
//         this.year=year;
//     }
//     age(){
//         const date=new Date();
//         return date.getFullYear()-this.year;
//     }
// }
// let s=prompt("enter the year of purchase of the car ");

// const car1=new car("namo",s);
// document.getElementById('demo').innerHTML=car1.age();

class car {
    constructor(carname,year){
        this.carname=carname;
        this.year=year;
    }
    age(x){
        return x-this.year;
    }
}
const car1=new car("audi",2000);

const date=new Date();
let s=date.getFullYear()
document.getElementById('demo').innerHTML=car1.age(s);