function myFunction() {
}

/* Change name to userID */

var nameToId;
function ID(name) {
    var nameToId = name;
    switch (nameToId) {
        
        case "Yuki ": return (3592419);
        case "Zohair ": return (3730788);
        default: return ("No ID Found");
    }
};




/* Max number of support hours*/

function maxHours(num) {
    var maxResult;
    if (num === 1) {
        maxResult = "1hMax";
    }
    else if (num === 2) {
        maxResult = "2hMax";
    }
    else if (num === 3) {
        maxResult = "3hMax";
    }
    else if (num === 4) {
        maxResult = "4hMax";
    }
    else if (num === 5) {
        maxResult = "5hMax";
    }
    else if (num === 6) {
        maxResult = "6hMax";
    }
    else if (num === 7) {
        maxResult = "7hMax";
    }
    else if (num === 8) {
        maxResult = "8hMax";
    }
    else {
        return false;
    }
    return maxResult;
};


/* Preferred type of work */

function prefWork(pref) {
    var prefResult;
    if (pref === "Tickets") {
        prefResult = "background-color: rgba(217, 255, 102,0.4) !important;";
    }
    else if (pref === "Live Chat") {
        prefResult = "background-color:rgba(190, 92, 251,0.2) !important;";
    }
    else if (pref === "No particular preference") {
        prefResult = ""
    }
    else {
        return false;
    }
    return prefResult;
};


/* Chat hours in a row */

function chatHoursRow(num) {
    var chatHoursResult;
    if (num === 1) {
        chatHoursResult = "1hRow";
    }
    else if (num === 2) {
        chatHoursResult = "2HRow";
    }
    else if (num === 3) {
        chatHoursResult = "3hRow";
    }
    else if (num === 4) {
        chatHoursResult = "4hRow";
    }
    else if (num === 5) {
        chatHoursResult = "5hRow";
    }
    else if (num === "No particular preference") {
        chatHoursResult = "";
    }
    else {
        return false;
    }
    return chatHoursResult;
};


/* 1 hour block */

function oneHourBlock(reply) {
    var oneHourBlockResult;
    if (reply === "Yes") {
        oneHourBlockResult = "1h✓";
    }
    else if (reply === "No") {
        oneHourBlockResult = "1hX";
    }
    else {
        return false;
    }
    return oneHourBlockResult;
}


/* 4 hours in a row*/

function fourHoursBlock(reply) {
    var fourHoursBlockResult;
    if (reply === "Yes") {
        fourHoursBlockResult = "4h✓";
    }
    else if (reply === "No") {
        fourHoursBlockResult = "4hX";
    }
    else {
        return false;
    }
    return fourHoursBlockResult;
}


/* Business 1:1 */

function business(reply) {
    var businessResult;
    if (reply === "Full time") {
        businessResult = "border-right:  5px solid #5e3cc4 !important;";
    }
    else if (reply === "Part time") {
        businessResult = "border-right:  5px dotted #5e3cc4 !important;";
    }
    else if (reply === "No") {
        businessResult = "";
    }
    else {
        return false;
    }
    return businessResult;
}


/* Team Lead */

function teamLead(reply) {
    var teamLeadResult = "border-left: 20px solid ";
    if (reply === "Yes") {
        teamLeadResult += "red !important;";
    }
    else if (reply === "No") {
        teamLeadResult += "green !important;";
    }
    else {
        return false;
    }
    return teamLeadResult;
}


/* Pressable Ambassador */

function pressableAmbassador(reply) {
    var paResult;
    if (reply === "Yes") {
        paResult = "PA";
    }
    else if (reply === "No") {
        paResult = "";
    }
    else {
        return false;
    }
    return paResult;
}




/* Specific only ticket Hours request: converts input to an array of numbers, then loops through the array to see which numbers are selected, and through the 24 hours of the day */


function onlyTickets(nameID, numbers2) {
    if (numbers2.length === 0) { return ""; }
    var numbers = numbers2.toString();
    var numsArray = numbers.split(',').map(Number);
    var arrayLength = numsArray.length;
    var newcode = [];
    var arrayIndex = 0;
    for (var i = 0; i < arrayLength; i++) {
        for (var hours = 0; hours < 24; hours++) {
            if (numsArray[i] === hours) {
                newcode[arrayIndex] = ("#d_" + nameID + ".day.dcol" + hours + " ");
                arrayIndex++;

            }
        }
    }
    var averga = newcode.toString();   /* Convert array to string */
    var resultOnlyTickets = averga + "{background: rgba(253, 126, 20, 0.5)important!;}";
    return resultOnlyTickets;
}



/* Specific hours No BIZ 1:1 request */

function noBiz(nameID, numbers2) {
    if (numbers2.length === 0) { return ""; }
    var numbers = numbers2.toString();
    var numsArray = numbers.split(',').map(Number);
    var arrayLength = numsArray.length;
    var newcode = [];
    var arrayIndex = 0;

    for (var i = 0; i < arrayLength; i++) {
        for (var hours = 0; hours < 24; hours++) {
            if (numsArray[i] === hours) {
                newcode[arrayIndex] = ("#d_" + nameID + ".day.dcol" + hours + " ");
                arrayIndex++;

            }
        }
    }
    var averga = newcode.toString();   /* Convert array to string */
    var resultBusiness = averga + "{background: rgba(190,75,219,.2);}";
    return resultBusiness;
}
