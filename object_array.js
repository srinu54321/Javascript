const list=['srinivas','banoth','ameena','ammu','dharavath'];
let txt='';
for(let i in list){
    txt+=list[i]+"<br>";
}
document.getElementById('demo').innerHTML=txt;