let flowersname=new Array("jasmine","rose","iris","lily","peony","carnation");


// flowersname.map(( ok )=>
// {
//   alert(ok);
// })
let adding=()=>
{
  const newvalue=document.getElementById("uservalue").value
  flowersname.push(newvalue);
  alert(newvalue+" has flower added in my database")  
  viewing()
}

let viewing=()=>
{
    let allvalues="";//initializing empty string will be used to collect a list of flowersname in array memory
    flowersname.map((data)=>
    {
        allvalues+="<tr><td><hr>"+data+"</td></tr>"
    })
    document.getElementById("listall").innerHTML="<table border='3'><thead><tr><th>FLowers name</th></tr></thead><tbody>"+allvalues+"</tbody></table>"
}

let rearranging=()=>
{
  const index=document.getElementById("uservalue").value ;
  
  let newvalue=prompt("please telll your new flower name"+flowersname[index]);

  flowersname[index]=newvalue;
  alert(newvalue+" has been updated successfully")
  viewing()
}


let erasing=()=>
{
  let deletedvalue=document.getElementById("uservalue").value ;


  flowersname=flowersname.filter((data)=>
  {
    return data!==deletedvalue;
  })
  viewing()
}

const checking=()=>
{
  let checking=document.getElementById("uservalue").value ;
  
  for(let pos=0;pos<flowersname.length;pos++)
  {
    if(flowersname[pos]===checking)
    {
      return pos;
    }
  }
}

let sorting=()=>
{
  flowersname.sort();
  viewing()
}


