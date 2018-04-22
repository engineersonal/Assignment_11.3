//Get the references to Javascript HTML DOM elements
var aref = document.getElementById("google");
var divref = document.getElementById("attrs");

//Show attributes of the anchor tag in the div element
function showAttributes(){
    var msg = '';
    msg+="id: "+aref.id+", "+"target: "+aref.target+", "+"href: "+aref.href+", "+"innerText: "+aref.innerText;
    divref.innerHTML=msg;
}

//Remove attributes of the anchor tag from the div element
function removeResult(){
    divref.innerHTML='';
}