let flowersname=new Array("jasmine","rose","iris","lily","peony","carnation");

let adding=()=>
{
  const newvalue=document.getElementById("uservalue").value
  flowersname.push(newvalue);
  alert(newvalue+" has flower added in my database")  
  viewing()
}

let viewing=()=>
{
    let all="";

    flowersname.map((data)=>
    {
        all+="<tr><td>"+data+"</td></tr>"
    })
    document.getElementById('listall').innerHTML="<table><thead><tr><th>FlowersNames</th></tr></thead><tbody>"+all+"</tbody></table>"
    
}