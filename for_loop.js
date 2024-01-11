// const list=[1,2,3,4,5,6];
// let text="";
// function myfunction(value){
//     text+=value+"<br>";
// }

// list.forEach(myfunction);
// document.getElementById('demo').innerHTML=text;

// const list =['ameeena','srinivas','ammu','seena'];
// let text="";
// for(let i of list){
//     text +=i+"<br>";
// }
// document.getElementById('demo').innerHTML=text;


// const list ="baonoth ameena srinivas";
// let text="";
// for(let i of list){
//     text +=i+"<br>";
// }
// document.getElementById('demo').innerHTML=text;


// let i=0;
// text="";
// while(i<=10){
//     text+="<br>"+"this is the no. of index is"+i;
//     i++;
// }
// document.getElementById('demo').innerHTML=text+"<br>";

//do while loop 

// let i=0;
// text="";
// do{
//     text+=i+"<br>";
//     document.getElementById('demo').innerHTML=text;
//     i++;
// }while(i<=10)

const list=['srinivas','banoth','dharavath','ameena'];
let text='';
let i=0;
while(list[i]){
    text+=list[i]+"<br>";
    i++;
}
document.getElementById('demo').innerHTML=text;