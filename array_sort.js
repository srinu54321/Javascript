const names=['srinivas','banoth','syna','ameena','ammu'];
document.getElementById('demo1').innerHTML=names;
function syna(){
    document.getElementById('demo2').innerHTML=names.sort();
    document.getElementById('demo3').innerHTML=names.reverse();
}