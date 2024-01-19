function myfunction(){
    const message=document.getElementById('po1');
    message.innerHTML="";
    let x=document.getElementById('demo').value;
    try{
        if(x.trim()=="") throw "it is empty ";
        if(isNaN(x)) throw "this is not a no. ";
        x=Number(x);
        if(x>=5) throw "the no. is too high ";
        if(x<=10) throw "the no. is too low ";
    }
    catch(err){
            message.innerHTML="the input is "+err;
        }
    }
