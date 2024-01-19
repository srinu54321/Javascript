const person={
    first_name:"srinivas",
    second_name:"banoth",
    roll_no:"20211A0309",
    phone_no:9912352744,
    full_name:function(){
        return this.first_name+" "+this.second_name;
    }
};
document.getElementById("demo").innerHTML=person.full_name();