// let array=['srinivas','banoth','nayak','syna'];
// console.log(array);

//SPECIFY THE ELEMENTS
//ACCESSING THE ARRAY ELEMENTS 

// const names=['srinivas','ameena','ammu','anameeka'];
// names[0]='babya';
// console.log(names)

//CONSERTING THE ARRAY INTO THE STRING 

// const names=['srinivas','ameena','ammu','anameeka'];
// document.getElementById('demo').innerHTML=names.toString()

// TO MAKE THE ARRAY ELEMENTS INTO A LIST 

// let fruits=['mango','banana','orange','apple'];
// let l=fruits.length;
// let text="<ul>";
// for(let i=0;i<l;i++){
//     text+="<li>"+fruits[i]+"</li>"
// }
// text+="</ul>";
// document.getElementById('demo').innerHTML=text

// //TO MAKE THE ARRAY ELEMENTS INTO THE LIST 
// let ARRAY=[111,22,33,444,5,555,,666,,77788,888,89];
// form='<ul>';
// for(let i =0; i<ARRAY.length;i++){
//     form=form+"<li>"+ARRAY[i]+"</li>"
// }
// form=form+"</ul>";
// document.getElementById("demo").innerHTML=form;

//TO MAKE THE ARRAY ELEMENTS INTO THE LIST 

// let ARRAY=[111,22,33,444,5,555,,666,,77788,888,89];
// from="<ul>";
// ARRAY.forEach(myFunction)
//     from=from+"</ul";
// document.getElementById("demo").innerHTML=from;
// function myFunction(value){
//     from=from+"<li>"+value+"</li>";
// };

//CONVERTING THE ARRAY INTO THE STIRNG 

// const ARRAY=['srinivas','banoth','ameena','ammu','dharavath','syna'];
// document.getElementById('demo').innerHTML=ARRAY.toString()

//JOINING THE THE SYMBAL WITH THE WORD 

// const ARRAY=['srinivas','banoth','ameena','ammu','dharavath','syna'];
// document.getElementById('demo').innerHTML=ARRAY.join("*")

//POP THE ELEMENT FROM THE ARRAY 

// const ARRAY=['srinivas','banoth','ameena','ammu','dharavath','syna'];
// let s=ARRAY.pop();
// console.log(ARRAY)

//PUSH THE ELEMENT INTO THE ARRAY 
// const fruits=['mango','orange','apple','banana'];
// console.log(fruits.push('kiwi'))
// document.getElementById('demo').innerHTML=fruits.

//CONCATINATION OF THE TWO ARRAYS INTO ONE ARRAY

// const boys=['srinivas','syna','sene'];
// const girls=['ameena','ammu','anamena'];
// const guys =boys.concat(girls)
// console.log(guys)

const myArr = [[1,2],[3,4],[5,6]];

const newArr = myArr.flat();
console.log(myArr);
console.log(newArr)
