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
    maxResult="1hMax";
  }
  else if (num===2){
    maxResult="2hMax";
  }
    else if (num===3){
    maxResult="3hMax";
  }
    else if (num===4){
    maxResult="4hMax";
  }
    else if (num===5){
    maxResult="5hMax";
  }
    else if (num===6){
    maxResult="6hMax";
  }
    else if (num===7){
    maxResult="7hMax";
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
    prefResult="background-color: rgba(217, 255, 102,0.4);";
  }
  else if(pref==="Live Chat"){
    prefResult="background-color:rgba(190, 92, 251,0.2);";
  }
    else if(pref==="No particular preference"){
      prefResult=" "
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
    chatHoursResult="1hRow;";
  }
  else if (num===2){
    chatHoursResult="2HRow;";
  }
   else if (num===3){
    chatHoursResult="3hRow;";
  }
   else if (num===4){
    chatHoursResult="4hRow;";
  }
   else if (num===5){
    chatHoursResult="5hRow;";
  }
   else if (num==="No particular preference"){
    chatHoursResult="NoPrefHsRow ";
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
    oneHourBlockResult="1h✓;";
  }
  else if(reply==="No"){
    oneHourBlockResult="1hX;";
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
    fourHoursBlockResult="4h✓;";
  }
  else if(reply==="No"){
    fourHoursBlockResult="4hX;";
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
    businessResult="FT 1:1";
  }
    else if(reply==="Part time"){
      businessResult="PT 1:1";
  }
  else if(reply==="No"){
    businessResult="NoBiz";
  }
  else {
  return false;
  }
  return businessResult;
}


/* Team Lead */

function teamLead(reply){
  var teamLeadResult="border-left: 20px solid ";
  if (reply==="Yes"){
    teamLeadResult +="red;";
  }
  else if(reply==="No"){
    teamLeadResult +="green;";
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
    paResult="PA";
  }
  else if(reply==="No"){
    paResult="";
  }
  else {
  return false;
  }
  return paResult;
}
