// let text="this is srinivas nayak";
// document.getElementById('demo').innerHTML=text.length;

// let x="srinivas";
// let y=new String("srinivas");
// console.log(typeof x);
// console.log(typeof y)

// let txt = "We are \"Vikings\"";
// alert(txt);

//REPLACE THE WORDS IN THE STRING BY PRESHING THE BUTTON 

// function myfunction(){
//     let text=document.getElementById("demo").innerHTML;
//     document.getElementById("demo").innerHTML=text.replace(/SRINIVAS/i,"syna nayak");
// }

// function myfunction(){
//         let text=document.getElementById("demo").innerHTML;
//         document.getElementById("demo").innerHTML=text.replaceAll("srinivas","syna nayak");
// }

// TO CHANGE THE STRING INTO UPPER CASE 

// let text1="banoth srinivas is the devotee of the lord sri rama ";
// document.getElementById("demo").innerHTML=text1.toUpperCase()

// PLACE THE ZEROES BEFORE THE ZEROES BEFORE THE A NO. THAT YOU SHOULD GIVEN 

// let a="4";
// a=a.padEnd(4,"6");
// document.getElementById("demo").innerHTML=a;

//ACCESSING THE SINGLE ELEMENTS FORM THE STRING
// let a="srinivas";
// document.getElementById("demo").innerHTML=a.slice(3,5);

//JAVASCRIPT ELEMTNTS SPLIT() ELEMENT 

// let syna="srinivas nayak from aurangabad thanda and he is the my fevorate person";
// let A=syna.split(" ");
// text="";
// for(let i=0;i<A.length;i++){
//     text=text+A[i]+"<br>";
// }
// document.getElementById("demo").innerHTML=text;

//RETURN THE MATCHED ELEMENTS

// let syna="The rain in SPAIN stays mainly in the plain";
// let s=syna.match(/ain/g);
// document.getElementById('demo').innerHTML=s.length;

let text = "The rain in SPAIN stays mainly in the plain"; 
const myArr = text.match(/ain/gi);
document.getElementById("demo").innerHTML = myArr.length + " " + myArr;
