// let text="";
// for(let i=0;i<=10;i++){
//     if(i===7){
//         continue;
//     }
//     text+=i+"\n";
// }
// console.log(text)

// const list ='banoth ameenasrinivas';
// let text='';
// for(let i of list){
//     text+=i+"<br>";
// }
// document.getElementById('demo').innerHTML=text;

// const list=new Set();
// const a='A';
// const b='B';
// const c='C';
// list.add(a);
// list.add(b);
// list.add(c);
// document.getElementById('demo').innerHTML=list.size;

// const list =new Set(['a','b','c','d','e','f']);
// let text="";
// list.forEach(function(value){
//     text+=value+"<br>";
// });
// document.getElementById('demo').innerHTML=text;

//USING STIRING REPLACE WITH STRING 

// function myfunction(){
//     let text=document.getElementById('demo').innerHTML;
//     document.getElementById('demo').innerHTML=text.replace(/srinivas/i,"ameena");
// }

//THIS IS FOR THE GLOBAL MATCHING 
// let namee ='gopal is good boy,and gopal is good worker and gopal is good speaker';
// document.getElementById('demo').innerHTML=namee.match(/gopal/g,"krishna");


// IT IS FOR THE MULTILINE SEARCH 

// let namee ='\ngopal is good boy\n,and gopal is good\n worker and\n gopal is good \n is speaker';
// document.getElementById('demo').innerHTML=+namee.match(/^is/m);

// let ram='sriram is the husbend of the matha sitha ';
// document.getElementById('demo').innerHTML=ram.match(/[h]/g);

// let rama ="1234512345678901234aaabcabbdbfbshsabc5678";
// document.getElementById('demo').innerHTML=rama.match(/[a-c||1-5]/g);

//TO CHECK THE GOVEN LETTER IS HAVE IN THE NOT IT WILL RETURN THE TRUE OR FALSE 

const rama='matha seetha is the wife of the lord rama ';
