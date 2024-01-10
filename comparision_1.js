function myfunction(){
    let a=Number(document.getElementById('age').value);
    let voteble;
    if (isNaN(a)){
        document.getElementById('demo').innerHTML="the given input is not a number not valid";
    }
        else{
           voteble= (a>=18) ? "voteble":"not able to vote ";
           document.getElementById('demo').innerHTML=voteble;
        }
}

