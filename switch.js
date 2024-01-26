const d=new Date();
let s=d.getDay()
let day;
switch(s){
    case 0:
        day='sunday';
        break;
    case 1:
        day='monday';
        break;
    case 2:
        day='tuesday';
        break;
    case 3:
        day='wednesday';
        break;
    case 4:
        day='thursday';
        break;
    case 5:
        day='friday';
        break;    
    case 6:
        day='saturday';
        break;
    default:
        day="this is not the currect day ";
        break;
}
document.getElementById("demo").innerHTML=day;