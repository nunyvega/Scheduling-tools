// ==UserScript==
// @name         Push CSS Humanity
// @namespace    https://github.com/nunyvega/Scheduling-tools/
// @version      6
// @description  Include HEs preferences in Humanity
// @author       Alvaro Vega
// @match        https://automattic.humanity.com/*
// @grant        none
// ==/UserScript==


    /* PASTE THE CODE TO USE THIS WEEK  UNDER LINE 44 REPLACE THE PREVIOUS ONE UNDER LINE 44, THE CODE BETWEEN LINES*/


//------------------------------------------------------------------------------------------------------------------
// 1 - ADD COLOURS TO THE GRID INDICATING AVAILABILITY PREFERENCES
// 2 - ADD CONTENT ( TEXT AND COLOURS ) TO THE USER'S BOX IN THE GRID INDICATING PREFERENCES



// Step one
// Here we create the variables that will be added to the site:

(function() {
    'use strict';

    var CSSMonday= ' ';
    var CSSTuesday= ' ';
    var CSSWednesday= ' ';
    var CSSThursday= ' ';
    var CSSFriday= ' ';
    var CSSSaturday= ' ';
    var CSSSunday= ' ';
    var CSSWeek = ' ';
    var textForDiv = [];


    // Step two:
    /* CODE TO USE THIS WEEK  -  REPLACE THE VARIABLES UNDER THIS TEXT:*/
    //Paste from line 44 and under, before pasting the new code, remove all the lines starting with "CSSWeek" under this one.
    //There's one line per HE, in case there's an error in the code of one of them, it can be found here.

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CSSWeek +=`/*Alvaro Vega (ORI)*/#e_3547598::after{ display:inline-block;content:'6hMax 3hRow 1hX 4hX ';}#e_3547598{background-color: rgba(253, 126, 20, 0.13) !important;;}#e_3547598 .udrag{background-color:#f9efff !important;}.dcol16#d_3547598{border: 5px solid #4a9abd !important;}`;textForDiv.push("if possible, chat at 5-7 UTC^3547598");
CSSWeek +=`/*Alvaro Vega (HO)*/#e_3827916::after{ display:inline-block;content:'6hMax 2HRow 1hX 4h✓ ';}#e_3827916{background-color:rgba(190, 92, 251,0.1) !important;;}#e_3827916 `;
CSSWeek +=`/*Alvaro Vega (ES)*/#e_3547627::after{ display:inline-block;content:'3hMax 3hRow 1hX 4hX MaxBiz 3❚❚✓';}#e_3547627{background-color: rgba(253, 126, 20, 0.13) !important;border-right: 5px dashed #5e3cc4 !important;;}#e_3547627 .udrag{background-color:#f9efff !important;}.dcol05#d_3547627{border: 5px solid #4a9abd !important;}`;textForDiv.push("*CHÉ, RE BIEN LA FORM^3547627");
CSSWeek +=`/*Alvaro Vega (SP)*/#e_3547555::after{ display:inline-block;content:'2hMax 2HRow 1hX 4hX MaxBiz 10❚❚✓';}#e_3547555{background-color: #1068a72e !important;border-right: 5px dashed #5e3cc4 !important;border-left: 10px solid #6cd6fc !important;;}#e_3547555 .udrag{background-color:#f9efff !important;}.dcol07#d_3547555{border: 5px solid #4a9abd !important;}`;




//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Step three:
    // Functions to detect the day, and insert a CSS code acording to that


    // Add a Style HTML element, where we'll add the CSS code
    function addCSS(str) {
        var active2 = document.getElementsByClassName("tti selected");
        var activeView2 = active2[0].getAttribute("data-mode");
        if (activeView2 === "employeeMode"){
            var node = document.createElement('style');
            // Add CSS rule to hide DIVs added with preferences under the names and show a message icon. When the mouse is over this icon, it will show a box with the preferences.
            node.innerHTML =  str + ".popup-parent2 {right:0px;top:0px;position:absolute;width:40px;height:30px;background-image:url('http://icons.iconarchive.com/icons/elegantthemes/beautiful-flat/128/megaphone-2-icon.png');background-position:center;background-size:65%;background-repeat:no-repeat;z-index:999;} .popup-parent {right:0px;top:0px;position:absolute;width:40px;height:30px;background-image:url('https://ru.reneelab.com/wp-content/uploads/sites/13/2017/02/laba.png');background-position:center;background-size:65%;background-repeat:no-repeat;z-index:999;}.popup-parent:hover, .popup-parent2:hover {top:0;bottom:0;left:0;right:0;font-size:14px !important;background-color:white;text-align:justify;width:100%;height:100%;padding:10px;}.popup {background-color: white;border: solid 1px #c0c0c0;padding: 5px;display: none;}.popup-parent:hover .popup {display: block;} .popup-parent2:hover .popup{display:block;}";
            node.id = "customCSS";
            document.body.appendChild(node);
        }}



    /* Function to add DIVs with the preferences under the name of each HE  */
    function appendRequirements() {
        var active2 = document.getElementsByClassName("tti selected");
        var activeView2 = active2[0].getAttribute("data-mode");
        if (document.readyState === "complete" && activeView2 === "employeeMode" )
        {
            for ( var i=0; i < textForDiv.length; i++) {
                var dividedContent = textForDiv[i].split("^");
                var requirementText = dividedContent[0];
                var idForDiv = "e_"+dividedContent[1];
                var description = document.createElement('div');
                var parentDiv = document.createElement('div');
                if (requirementText[0] === "*"){parentDiv.className = "popup-parent2";}
               else { parentDiv.className = "popup-parent"; }
                parentDiv.id = "popup-parent"+idForDiv;
                description.innerHTML = requirementText;
                description.id = "popup"+ idForDiv;
                description.className = "popup";
                document.getElementById(idForDiv).appendChild(parentDiv);
                document.getElementById("popup-parent"+idForDiv).appendChild(description);

            }
        }
    }


    /* Check if the page refreshed and run the function to add the divs again */
    window.setInterval(function() {
        {
            var popups = document.getElementsByClassName("popup");
            if (popups.length===0)
            {
                appendRequirements();
            }
        }
    }, 3000);



    /* check what day it is in the title with ID _ddr and add CSS for that day*/
    function checkDay(){
        var day = document.getElementById("_ddr");
        var dayInText = day.textContent;
        var dayCSSCode = CSSWeek;
        var previousCSS = document.getElementById("customCSS");




        /* If there's a previous CSS added by this loop, this removes it*/
        if(previousCSS) {
            previousCSS.remove();}



        /*adds the code for the week + modifications for the day*/
        if( dayInText.match('Monday')){
            dayCSSCode += CSSMonday;
        }
        else if( dayInText.match('Tuesday')){
            dayCSSCode += CSSTuesday;
        }
        else if( dayInText.match('Wednesday')){
            dayCSSCode += CSSWednesday;
        }
        else if( dayInText.match('Thursday')){
            dayCSSCode += CSSThursday;
        }
        else if( dayInText.match('Friday')){
            dayCSSCode += CSSFriday;
        }
        else if( dayInText.match('Saturday')){
            dayCSSCode += CSSSaturday;
        }
        else if( dayInText.match('Sunday')){
            dayCSSCode += CSSSunday;
        }
        else {
            alert("No day determined");
        }
        addCSS(dayCSSCode);
    }




    /* Event listener to see if there's a change in the date, to append CSS related with that date. If there was a change in the title, it runs again the CheckDay function*/


    var oldTitle = document.getElementById("_ddr").textContent;
    window.setInterval(function()
                       {
        var newTitle = document.getElementById("_ddr").textContent;
        if (newTitle !== oldTitle)
        {
            checkDay();
        }
        oldTitle = newTitle;}, 2000); //check every 2000ms




    /* This is to stop running the event listener once the tab is closed*/
    window.onunload = function () {
        interval = null; };
})();

// END OF CODE
