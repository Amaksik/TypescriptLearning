"use strict"


let cardBank = 0, cardValue = 0, cardSuit = 0, position=0, totalCardValue = 0;
let positionEnding = "from top"

function SetValue(number)
{
    cardValue = number;
    console.log("value is " + number +"\n")
}


function FindPosition(option){
    totalCardValue = cardValue + option;
    cardBank=  totalCardValue % 4;

    cardBank = cardBank==0? 4:cardBank;
    if(cardValue ==13)cardBank=option;


    position = 13 - (4*cardValue)%13;

    position += (cardBank-1)*13

    DisplayResult(position)
}

function DisplayResult( position){
    let resultField = document.getElementById("resultfield");
    resultField.innerText = position + positionEnding;

    setTimeout(function(){
        clearData(resultField); 
    }, 2000);

    
}


function clearData(resultField){
    cardBank = 0, 
    cardValue = 0, 
    cardSuit = 0;
    resultField.innerText = "";
    let checkboxeslist = document.querySelectorAll("input");
    checkboxeslist.forEach(element => {
        element.checked = false;
    });
}