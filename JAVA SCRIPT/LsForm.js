let begin1=()=>
{
    
    flowernames=["Lotus","Jasmine","Rose","Lily","Hibiscus","Daisy"]
    
    // localStorage.setItem("FlowerMenu",flowernames);
    localStorage.setItem("Flower",JSON.stringify(flowernames));
    // sessionStorage.setItem("Flower",JSON.stringify(flowernames));
    
    alert("flowername object is added in my local storage")
}

let adding=()=>
{
    let newvalue=document.getElementById("user").value;

    let oldvalues=localStorage.getItem("FlowerMenu");

    let convertstrobj=JSON.parse(oldvalues);

    // alert(convertstrobj);

    convertstrobj["Flowers"].push(newvalue);

    localStorage.setItem("FlowerMenu",JSON.stringify(convertstrobj));

    alert(newvalue+" has been added in my local storage");
}

let remove=()=>
{
    let removevalue=document.getElementById("user").value;

    localStorage.removeItem(removevalue);
}

let clear1=()=>
{
    localStorage.clear()
}