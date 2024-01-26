function syna(){
     let number=2;
     let s="";
     while(number !=Infinity){
        number=number*number;
        s=s+number+"<br>";
        document.getElementById('demo').innerHTML=s;
        }
}