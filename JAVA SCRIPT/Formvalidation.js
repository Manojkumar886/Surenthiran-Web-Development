let Verification=()=>
{
    // a-z , A-Z ,0-9, {10,20} test() \s-space
    let a=document.forms['userdetails'].flatno.value;
    let b=document.forms['userdetails'].streetname.value;
    let c=document.forms['userdetails'].pass.value;
    let d=document.forms['userdetails'].email.value;

    let activation=true;//initialized boolean value

    if(a.length<=0)
    {
        document.getElementById('flatno1').innerHTML="please enter your flat no"
        activation=false;
    }
    else if(!((/^[a-zA-Z0-9\s,-/]+$/).test(a)))
    {
        document.getElementById('flatno1').innerHTML="followed by flatno/address/doorno"
        activation=false
    }

    if(c.length==0)
    {
        document.getElementById('pass1').innerHTML="please enter your password"
        activation=false;
    }
    else if(!((/^[a-zA-Z0-9!@#$%^&*]{8,15}$/).test(c)))
    {
        
        document.getElementById('pass1').innerHTML=" must be using special charter not mention below 8 values ";
        activation=false;
    }

    if(d.length==0)
    {
        document.getElementById('email1').innerHTML="please enter your email id"
        activation=false;
    }
    else if(!((/^(?=.+[0-9])(?=*[@.])[a-z0-9@.]+$/).test(d)))
    {
        document.getElementById('email1').innerHTML="your entered an invalid email address"
        activation=false;
    }

    return activation;
}