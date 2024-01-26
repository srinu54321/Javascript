const person =[
    {names:'srinvas',year:2001},
    {names:'babya',year:2015},
    {names:'syna nayak',year:200888},
    {names:'sriynvas',year:7},
    {names:'baubya',year:20165},
    {names:'synau nayak',year:20702}
];
person.sort(function(a,b){
    return b.year-a.year;
});
function syna(){    
    let output="";
    for(let i=0;i<person.length;i++){
        output=output+person[i].names+" "+person[i].year+"<br>";     
        }
        document.getElementById('demo').innerHTML=output;
}