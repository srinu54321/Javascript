function newdate(){
    let d=new Date()
    let days=["sunday",'monday','tuesday','wednesday','thursday','friday','saturday',]
    document.getElementById('demo').innerHTML=
    d+"<br>"
    +d.getFullYear()+"<br>"
    +Number(d)+"<br>"
    +d.toUTCString()+"<br>"
    +d.getDay()+"<br>"
    +days[d.getDay()];
    // document.getElementById('demo1').innerHTML=
    
}