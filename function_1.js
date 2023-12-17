// function MyFunction(){
//     console.log("hellow this is srinivas ");
//     console.log("hellow this is ammu ")
// }
// MyFunction()

//TO CALCULATE THE SUM OF THE TWO NO. 

// function myFunction(a,b) {
//     console.log(a+b);
// }
// let A=parseInt(prompt("enter the first no. "));
// let B=parseInt(prompt("enter the second no. "));

// myFunction(A,B);

// function srinivas(a,b){
//     s=a+b; 
//     return s;
// }
// let value=parseInt(prompt("enter the fist no."))
// let value1=parseInt(prompt("enter the second no. "))
// let result=srinivas(value,value1);
// console.log(result)

// function srinivas(A){
//     total=0;
//     for(let i of A){
//         if(i==='A'||i==='E'||i==='I'||i==='O'||i==='U'||i==='a'||i==='e'||i==='i'||i==='o'||i==='u'){
//             console.log(i)
//         }
//         total++;
//     }
//     return total;
// }
// let result=srinivas("srinivas");
// console.log(result);

// let arr=[1,2,3,4,5,6,7,8,9]
// arr.forEach(function myFunction(val){
//     console.log(val)
// })

// let arr=[1,2,3,4,5,6,7,8,9];
// arr.forEach((val)=>{
//     console.log(val**2)
// // });
// let val=[1,2,3,4,5,6,7,8,9]
// let calsquare=(val)=>{
//     console.log(val**2);
// };
// val.forEach(calsquare);

// let val=[1,2,3,4,5,6,7,8,9]
// let newarray=val.filter((Num)=>{
//     return Num%2===0;
// });
// console.log(newarray)

// let val=[1,2,3,4,5,6,7,8,9]
// let ammu=val.reduce((be,af)=>{
//     return be+af;
// });
// console.log(ammu)

// let val=[1,2,3,4,5,6,7,8,9];
// let ammu=val.reduce((bf,af)=>{ 
//     return bf>af ? bf:af;
// });
// console.log(ammu)

// let arr = [87,93,64,99,86];
// let ammu=arr.filter((val)=>{
//     return val>=90;
// })
// console.log(ammu)

// let n=prompt("enter the no. for the iteration ")
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr)

let n=prompt("enter the no. for the iteration ")
let arr=[];
sum=1;
for(let i=1;i<=n;i++){
    sum=sum*i;
}
console.log(sum)