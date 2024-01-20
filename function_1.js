function myfunction(){
    const person={
        name_first:"banoth",
        second_name:"srinivas",
        number:9912352744,
        full_name:function(){
            return person.name_first+" "+person.second_name;
    }
};
document.getElementById("demo").innerHTML=person.full_name();
}