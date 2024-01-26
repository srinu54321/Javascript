const names=['srinvas','seena','babya','babu','syna'];
let text="<ul>";
for(let i=0;i<names.length;i++){
    text += "<li>" + names[i] + "</li>";
    // text += "<li>" + fruits[i] + "</li>";
}
text+='</ul>';
document.getElementById('demo').innerHTML=text;