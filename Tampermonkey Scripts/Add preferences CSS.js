// ==UserScript==
// @name         Push CSS Humanity
// @namespace    https://github.com/nunyvega/Scheduling-tools/
// @version      5
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
    var textForDiv2 = [];

    // Step two:
    /* CODE TO USE THIS WEEK  -  REPLACE THE VARIABLES UNDER THIS TEXT:*/
    //Paste from line 44 and under, before pasting the new code, remove all the lines starting with "CSSWeek" under this one.
    //There's one line per HE, in case there's an error in the code of one of them, it can be found here.

    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CSSWeek +=`/*Alvaro Ve (PA)*/#e_3547614::after{ display:inline-block;content:'4hMax 2HRow 1hX 4hX ';}#e_3547614{background-color:rgba(190, 92, 251,0.1) !important;border-right: 5px dashed #5e3cc4 !important;;}#e_3547614 .udrag{background-color: #ffeee0 !important;} `;CSSMonday +=`/*Aaron Portbury (PA)*/#d_3547614.day.dcol4 ,#d_3547614.day.dcol5 {background: rgba(253, 126, 20, 0.2)!important;} `;CSSTuesday +=`/*Aaron Portbury (PA)*/#d_3547614.day.dcol4 ,#d_3547614.day.dcol5 {background: rgba(253, 126, 20, 0.2)!important;} `;CSSWednesday +=`/*Aaron Portbury (PA)*/#d_3547614.day.dcol4 ,#d_3547614.day.dcol5 {background: rgba(253, 126, 20, 0.2)!important;} `;CSSThursday +=`/*Aaron Portbury (PA)*/#d_3547614.day.dcol4 ,#d_3547614.day.dcol5 {background: rgba(253, 126, 20, 0.2)!important;} `;CSSSunday+=`/*Aaron Portbury (PA)*/#d_3547614.day.dcol4 ,#d_3547614.day.dcol5 {background: rgba(253, 126, 20, 0.2)!important;} `;textForDiv.push("Part of the Atomic Guild^3547614");

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
            // Add CSS to have a min height for each row
            // Add CSS to hide the "add break" button
            //
            node.innerHTML =  str + `
.popup-parent2 {width-min:40px;right:0px;top:0px;position:absolute;width:40px;height:30px;background-image:url('http://icons.iconarchive.com/icons/elegantthemes/beautiful-flat/128/megaphone-2-icon.png');background-position:center;background-size:65%;background-repeat:no-repeat;z-index:999;}
.popup-parent {width-min:40px;right:0px;top:0px;position:absolute;width:40px;height:30px;background-image:url('https://ru.reneelab.com/wp-content/uploads/sites/13/2017/02/laba.png');background-position:center;background-size:65%;background-repeat:no-repeat;z-index:999;}
.popup-parent:hover, .popup-parent2:hover, .popup-parent3:hover {top:0;bottom:0;left:0;right:0;font-size:14px !important;background-color:white;text-align:justify;width:100%;height:100%;padding:10px;}
.popup {background-color: white;border: solid 1px #c0c0c0;padding: 5px;display: none;}
.popup-parent:hover .popup, .popup-parent2:hover .popup, .popup-parent3:hover .popup {display: block;}
.popup-parent3 {width-min:40px;right:0px;bottom:0px;position:absolute;width:40px;height:30px;background-image:url('http://icons.iconarchive.com/icons/elegantthemes/beautiful-flat/128/calendar-icon.png');background-position:center;background-size:65%;background-repeat:no-repeat;z-index:999;}
#weeklist tr td {height:65px !important;}
i.icon.icon-break.stafflist-break-icon.tti.j-shift-edit-break {display: none;}

`

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

    /* Function to add DIVs with the Time specific preferences under the name of each HE  */
    function appendRequirements2() {
        var active2 = document.getElementsByClassName("tti selected");
        var activeView2 = active2[0].getAttribute("data-mode");
        if (document.readyState === "complete" && activeView2 === "employeeMode" )
        {
            for ( var i=0; i < textForDiv2.length; i++) {
                var dividedContent3 = textForDiv2[i].split("^");
                var requirementText3 = dividedContent3[0];
                var idForDiv3 = "e_"+dividedContent3[1];
                var description3 = document.createElement('div');
                var parentDiv3 = document.createElement('div');
                parentDiv3.className = "popup-parent3";
                parentDiv3.id = "popup-parent3"+idForDiv3;
                description3.innerHTML = requirementText3;
                description3.id = "popup"+ idForDiv3;
                description3.className = "popup";
                document.getElementById(idForDiv3).appendChild(parentDiv3);
                document.getElementById("popup-parent3"+idForDiv3).appendChild(description3);

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
                appendRequirements2();

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
