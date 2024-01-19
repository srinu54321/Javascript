function myfunction(){
    const message=document.getElementById('p01');message.innerHTML="";
    let x=document.getElementById('demo').value;
    try{
        if(x.trim() == "") throw "it is empty";
        if(isNaN(x)) throw 'it is not a no.';
        x=Number(x);
        if(x>10) throw "the no. is too high";
        if(x<5) throw "the no. is too low";
        if(x>=5 && x<=10) throw "this no. is in between the 5 and 10"
    }
        catch(err){
            message.innerHTML="input "+err;
        }
}