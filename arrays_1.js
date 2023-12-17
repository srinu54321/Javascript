// let marks=[1,2,3,4,55,6,7,8,9]
// console.log(marks)
// console.log(marks.length,"is the length of the array")
// console.log(marks[2])
// console.log(marks[2]=222)

//LOOPING OVER THE ARRAYS 

// let Names=['radha','krishna','parvathi','shiva','ganesh','seetha','rama']
// for(let i=0; i<Names.length;i++){
//     console.log(Names[i])
// }

//USING THE FOR OF LOOP 
// let Names=['radha','krishna','parvathi','shiva','ganesh','seetha','rama']
// for(let Name of Names){
//     console.log(Name.toUpperCase())
// }
// FOR A GIVEN MARKS OF THE STUDENT ARE [87,97,44,37,76,60] FIND THE AVARAGE OF THE MARKS 

// let MARKS=[87,97,44,37,76,60];
// let sum=0,avg;
// for(let i of MARKS){
//     sum=sum+i;
// }
// console.log(sum);
// console.log(sum/(MARKS.length))

// for a given array with provessof 5 iteams [250,265,300,900,50] all items have an offer of 10% off on them change the array to store final prove after applying offer

// let iteam=[250,265,300,900,50]
// let sum=0;
// for(let i of iteam){
//     sum=sum+i;}
// console.log(sum)
// console.log(sum*0.1);
// console.log(sum-(sum*0.1))

//ARRAY METHODS

// let food_iteam=['apple','tomato','banana','potato','bisket']
// console.log(food_iteam.push("sapotha"))
// console.log(food_iteam)
// console.log(food_iteam.pop())
// console.log(food_iteam)

//SHIFT METHOD 
// let letter=['a','b','c','d','e','f','g']
// letter.shift("xyz");
// console.log(letter)

//create an array to store the company 
//1) remove first company array 

// let company=["blooming",'microsoft','uber','google','IBM','netflex'];
// company.splice(0,1);
// console.log(company)

//2) remove a company and add any other company 

// let company=["blooming",'microsoft','uber','google','IBM','netflex'];
// company.splice(3,1,"ola");
// console.log(company)

//3) add a company at the end 

// let company=["blooming",'microsoft','uber','google','IBM','netflex'];
// company.push("amazon")
// console.log(company)