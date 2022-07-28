"use strict"

let number = parseInt(prompt("Input, if u want to start from particular number", "30"));

let element = document.getElementById("displayNumber");

//check for not NaN and insert if int provided
if(number< Infinity)
{
    element.textContent = number.toString();
}


function Change(option){
    let displayedNumber =parseInt(document.getElementById("displayNumber").innerText);

    if(option==1){
        displayedNumber++;
    }
    if(option==0){
        displayedNumber = 0;
    }
    if(option==-1){
        displayedNumber--;
    }

    element.textContent =displayedNumber.toString();
}