const syna=[
    {names:'banoth srinivas',year:7},
    {names:'srinvas',year:2},
    {names:'banoth ',year:3},
    {names:'syna',year:0},
    {names:'seena',year:4},
    {names:'babya',year:8},
];
syna.sort(function(a,b){
    return a.year-b.year;
})
function praveen(){
    let sa='';
    for(let i=0;i<syna.length;i++){
        sa+=i+"   "+syna[i].year+" "+syna[i].names+"<br>";
    }
    document.getElementById('demo').innerHTML=sa;
}

