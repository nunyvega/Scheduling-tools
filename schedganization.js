function myFunction() {
}  
 

/* Change name to userID */

function ID(name) {
  var nameToId = name;
  switch(nameToId){
case "": return(3547614);
case "": return(3547615);
case "": return(3605118);
case "": return(3547599);
case "": return(3547616);
case "": return(3560330);
case "": return(3547603);
case "": return(3547628);
default: return("No ID Found");
}
};




/* Max number of support hours*/

function maxHours(num){
  var maxResult;
  if(num===1){
    maxResult="background-color:red;";
  }
  else if (num===2){
    maxResult="background-color:red;";
  }
    else if (num===3){
    maxResult="background-color:red;";
  }
    else if (num===4){
    maxResult="background-color:red;";
  }
    else if (num===5){
    maxResult="background-color:red;";
  }
    else if (num===6){
    maxResult="background-color:red;";
  }
    else if (num===7){
    maxResult="background-color:red;";
  }
  else {
    return false;
  }
  return maxResult;
};


/* Preferred type of work */

function CSS(pref){
  var prefResult;
  if(pref==="Tickets"){
    prefResult="font-color:blue;";
  }
  else if(pref==="Live Chat"){
    prefResult="font-color:blue;";
  }
    else if(pref==="No particular preference"){
    prefResult="font-color:blue;";
  }
  else{
    return false;
  }
  return prefResult;
};


/* Chat hours in a row */

function chatHoursRow(num){
  var chatHoursResult;
  if(num===1){
    chatHoursResult="background-color:red;";
  }
  else if (num===2){
    chatHoursResult="background-color:red;";
  }
   else if (num===3){
    chatHoursResult="background-color:red;";
  }
   else if (num===4){
    chatHoursResult="background-color:red;";
  }
   else if (num===5){
    chatHoursResult="background-color:red;";
  }
   else if (num==="No particular preference"){
    chatHoursResult="background-color:red;";
  }
  else {
    return false;
  }
  return chatHoursResult;
};

 
/* 1 hour block */

function oneHourBlock(reply){
  var oneHourBlockResult;
  if (reply==="Yes"){
    oneHourBlockResult="color:red;";
  }
  else if(reply==="No"){
    oneHourBlockResult="color: blue;";
  }
  else {
  return false;
  }
  return oneHourBlockResult;
}


/* 4 hours in a row*/

function fourHoursBlock(reply){
  var fourHoursBlockResult;
  if (reply==="Yes"){
    fourHoursBlockResult="color:red;";
  }
  else if(reply==="No"){
    fourHoursBlockResult="color: blue;";
  }
  else {
  return false;
  }
  return fourHoursBlockResult;
}


/* Business 1:1 */

function business(reply){
  var businessResult;
  if (reply==="Full time"){
    businessResult="color:red;";
  }
    else if(reply==="Part time"){
    businessResult="color: green;";
  }
  else if(reply==="No"){
    businessResult="color: blue;";
  }
  else {
  return false;
  }
  return businessResult;
}


/* Team Lead */

function teamLead(reply){
  var teamLeadResult;
  if (reply==="Yes"){
    teamLeadResult="color:red;";
  }
  else if(reply==="No"){
    teamLeadResult="color: blue;";
  }
  else {
  return false;
  }
  return teamLeadResult;
}


/* Pressable Ambassador */

function pressableAmbassador(reply){
  var paResult;
  if (reply==="Yes"){
    paResult="color:red;";
  }
  else if(reply==="No"){
    paResult="color: blue;";
  }
  else {
  return false;
  }
  return paResult;
}
