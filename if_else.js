// const d1=new Date().getHours();
// const d2=new Date().getMinutes();
// const d3=new Date().getSeconds();
// const d4=new Date().getMilliseconds();
// console.log(d1+":"+d2+':'+d3+":"+d4);

let day;
switch (new Date().getDay()) {
    case 0:
        day="sunday";
        break;
    case 1:
        day="Monday";
        break;
        default:
        day="this is not the currect day";
        break;
    case 2:
        day="Tuesday";
        break;
    case 3:
        day="Wednesday";
        break;
    case 4:
        day="Thursday";
        break;
    case 5:
        day="Friday";
        break;
    case 6:
        day="Saturday";
        break;  
    
}
document.getElementById("demo").innerHTML='thsi is '+day;