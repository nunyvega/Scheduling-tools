// This version does not include the name of the HEs, ask Alvaro for the original file.
/* This code takes the working preferences of different HEs and converts it into a CSS code, 
that will modify the design of the scheduling tool interface.
-----
The code is divided in two main parts:
1- A big function that converts all the different inputs of preferences into a CSS code.
2- A loop that checks how many replies are in the spreadsheet, and runs the big function once per HE.
-----
After receiving the output code for all the HEs, this is added to TamperMonkey's script:
https://github.com/nunyvega/JS-Tampermonkey-Human
to add the CSS code to the scheduling page.
*/



// Part one:
// One Hugh function with all of them inside:


// variables for preferences in text



/* This code takes the working preferences of different HEs and converts it into a CSS code, 
that will modify the design of the scheduling tool interface.
-----
The code is divided in two main parts:
1- A big function that converts all the different inputs of preferences into a CSS code.
2- A loop that checks how many replies are in the spreadsheet, and runs the big function once per HE.
-----
After receiving the output code for all the HEs, this is added to TamperMonkey's script:
https://github.com/nunyvega/JS-Tampermonkey-Human
to add the CSS code to the scheduling page.
*/



// Part one:
// One Hugh function with all of them inside:


// variables for preferences in text


function myFunction(nameToIdInput, maxHoursInput, prefWorkInput,prefWorkInput2,chatHoursInput, oneHourBlockInput, fourHoursBlockInput, businessInput, teamLeadInput, maxBizInput, onlyTicketsInput1, onlyTicketsInput2, onlyTicketsInput3, onlyTicketsInput4, onlyTicketsInput5, onlyTicketsInput6, onlyTicketsInput7, noBizInput1, noBizInput2, noBizInput3, noBizInput4, noBizInput5, noBizInput6, noBizInput7, requirementInTextInput) {
  
  //  Change name to userID. Names and IDs are not included for security reasons.
  
  var nameToId = nameToIdInput.toString();
  var nameToIdResult;
  switch(nameToId){
    case "Alvaro Vega (DR)": nameToIdResult = 3547616 ; break;
    default: nameToIdResult = "No ID Found"; break;
  }
  
  
  
  /* Max number of support hours*/
  
  
  var maxResult;
  if(maxHoursInput==1){
    maxResult="1hMax ";
  }
  else if (maxHoursInput==2){
    maxResult="2hMax ";
  }
  else if (maxHoursInput==3){
    maxResult="3hMax ";
  }
  else if (maxHoursInput==4){
    maxResult="4hMax ";
  }
  else if (maxHoursInput==5){
    maxResult="5hMax ";
  }
  else if (maxHoursInput==6){
    maxResult="6hMax ";
  }
  else if (maxHoursInput==7){
    maxResult="7hMax ";
  }
  else if (maxHoursInput==8){
    maxResult="8hMax ";
  }
  else {
    maxResult= " ";
  }
  
  
  
  /* Preferred type of work */
  
  
  var prefResult;
  if(prefWorkInput=="Tickets"){
    prefResult="background-color: rgba(253, 126, 20, 0.13) !important;";
  }
  else if(prefWorkInput=="Live Chat"){
    prefResult="background-color:rgba(190, 92, 251,0.1) !important;";
  }
  else if(prefWorkInput=="No particular preference"){
    prefResult=""
  }
  else if(prefWorkInput=="Business 1:1"){
    prefResult="background-color: #1068a72e !important;";
  }
  else {
    prefResult=" ";
  }
  
  /* Second type of work */
  
  
  var prefResult2;
  if(prefWorkInput2=="Tickets"){
    prefResult2="background-color: #ffeee0 !important;";
  }
  else if(prefWorkInput2=="Live Chat"){
    prefResult2="background-color:#f9efff !important;";
  }
  else if(prefWorkInput2=="No particular preference"){
    prefResult2=""
  }
  else if(prefWorkInput2=="Business 1:1"){
    prefResult2="background-color: #1068a72e !important;";
  }
  else {
    prefResult2=" ";
  }
  
  
  /* Chat hours in a row */
  
  var chatHoursResult;
  if(chatHoursInput==1){
    chatHoursResult="1hRow ";
  }
  else if (chatHoursInput==2){
    chatHoursResult="2HRow ";
  }
  else if (chatHoursInput==3){
    chatHoursResult="3hRow ";
  }
  else if (chatHoursInput==4){
    chatHoursResult="4hRow ";
  }
  else if (chatHoursInput==5){
    chatHoursResult="5hRow ";
  }
  else if (chatHoursInput=="No particular preference"){
    chatHoursResult="";
  }
  else {
    chatHoursResult= " ";
  }
  
  
  
  
  /* 1 hour block */
  
  
  var oneHourBlockResult;
  if (oneHourBlockInput=="Yes"){
    oneHourBlockResult="1h✓ ";
  }
  else if(oneHourBlockInput=="No"){
    oneHourBlockResult="1hX ";
  }
  else {
    oneHourBlockResult=" ";
  }
  
  
  
  /* 4 hours in a row*/
  
  
  var fourHoursBlockResult;
  if (fourHoursBlockInput=="Yes"){
    fourHoursBlockResult="4h✓ ";
  }
  else if(fourHoursBlockInput=="No"){
    fourHoursBlockResult="4hX ";
  }
  else {
    fourHoursBlockResult= " ";
  }
  
  
  
  /* Business 1:1 */
  
  
  var businessResult;
  if (businessInput=="Full time"){
    businessResult="border-right:  5px solid #5e3cc4 !important;";
  }
  else if(businessInput=="Part time"){
    businessResult="border-right: 5px dashed #5e3cc4 !important;";
  }
  else if(businessInput=="No"){
    businessResult="";
  }
  else {
    businessResult=" ";
  }
  
  
  
  /* Team Lead */
  
  
  
  if (teamLeadInput=="Yes"){
    var teamLeadResult ="border-left: 10px solid #6cd6fc !important;";
  }
  else if(teamLeadInput=="No"){
    var teamLeadResult ="";
  }
  else {
    var teamLeadResult= " "
    }
  
  
  
  /* Pressable Ambassador */
  
  if (maxBizInput){
    var maxBizResult = "MaxBiz " + maxBizInput;
  }
  else{
    var maxBizResult=" ";
  }
  
  
  
  /* Specific only ticket Hours request: converts input to an array of numbers, then loops through the array to see which numbers are selected, and through the 24 hours of the day */
  
  //Monday
  if (onlyTicketsInput1.length == 0){ var resultOnlyTickets1 = " ";}
  else if (onlyTicketsInput1 == "All day"){
    var newcode= [];
    for (var hours = 0; hours < 24; hours++) { 
      newcode[hours] = ("#d_"+ nameToIdResult + ".day.dcol"+ hours +" ");
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultOnlyTickets1 = newCodeInString +"{background: rgba(253, 126, 20, 0.2)!important;}";
  }                          
  else{
    var numbers = onlyTicketsInput1.toString();
    var numsArray = numbers.split(',').map(Number);
    var arrayLength = numsArray.length;
    var newcode = [];
    var arrayIndex= 0;
    for (var i = 0; i < arrayLength; i++) {
      for (var hours = 0; hours < 24; hours++) {
        if  (numsArray[i] == hours) {
          newcode[arrayIndex] = ("#d_"+nameToIdResult + ".day.dcol"+ hours +" ");
          arrayIndex++;
          
        }   
      }
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultOnlyTickets1 = newCodeInString +"{background: rgba(253, 126, 20, 0.2)!important;}";
  }
  
  
  //Tuesday
  if (onlyTicketsInput2.length == 0){ var resultOnlyTickets2 = " ";}
  else if (onlyTicketsInput2 == "All day"){
    var newcode= [];
    for (var hours = 0; hours < 24; hours++) { 
      newcode[hours] = ("#d_"+ nameToIdResult + ".day.dcol"+ hours +" ");
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultOnlyTickets2 = newCodeInString +"{background: rgba(253, 126, 20, 0.2)!important;}";
  }           
  else {
    var numbers = onlyTicketsInput2.toString();
    var numsArray = numbers.split(',').map(Number);
    var arrayLength = numsArray.length;
    var newcode = [];
    var arrayIndex= 0;
    for (var i = 0; i < arrayLength; i++) {
      for (var hours = 0; hours < 24; hours++) {
        if  (numsArray[i] == hours) {
          newcode[arrayIndex] = ("#d_"+nameToIdResult + ".day.dcol"+ hours +" ");
          arrayIndex++;
          
        }   
      }
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultOnlyTickets2 = newCodeInString +"{background: rgba(253, 126, 20, 0.2)!important;}";
  }
  
  
  //Wednesday
  if (onlyTicketsInput3.length == 0){  var resultOnlyTickets3 = " ";}
  else if (onlyTicketsInput3 == "All day"){
    var newcode= [];
    for (var hours = 0; hours < 24; hours++) { 
      newcode[hours] = ("#d_"+ nameToIdResult + ".day.dcol"+ hours +" ");
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultOnlyTickets3 = newCodeInString +"{background: rgba(253, 126, 20, 0.2)!important;}";
  }           
  else{
    var numbers = onlyTicketsInput3.toString();
    var numsArray = numbers.split(',').map(Number);
    var arrayLength = numsArray.length;
    var newcode = [];
    var arrayIndex= 0;
    for (var i = 0; i < arrayLength; i++) {
      for (var hours = 0; hours < 24; hours++) {
        if  (numsArray[i] == hours) {
          newcode[arrayIndex] = ("#d_"+nameToIdResult + ".day.dcol"+ hours +" ");
          arrayIndex++;
          
        }   
      }
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultOnlyTickets3 = newCodeInString +"{background: rgba(253, 126, 20, 0.2)!important;}";
  }
  
  
  //Thursday
  if (onlyTicketsInput4.length == 0){ var resultOnlyTickets4 = " ";}
  else if (onlyTicketsInput4 == "All day"){
    var newcode= [];
    for (var hours = 0; hours < 24; hours++) { 
      newcode[hours] = ("#d_"+ nameToIdResult + ".day.dcol"+ hours +" ");
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultOnlyTickets4 = newCodeInString +"{background: rgba(253, 126, 20, 0.2)!important;}";
  }           
  else{
    var numbers = onlyTicketsInput4.toString();
    var numsArray = numbers.split(',').map(Number);
    var arrayLength = numsArray.length;
    var newcode = [];
    var arrayIndex= 0;
    for (var i = 0; i < arrayLength; i++) {
      for (var hours = 0; hours < 24; hours++) {
        if  (numsArray[i] == hours) {
          newcode[arrayIndex] = ("#d_"+nameToIdResult + ".day.dcol"+ hours +" ");
          arrayIndex++;
          
        }   
      }
    }
    
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultOnlyTickets4 = newCodeInString +"{background: rgba(253, 126, 20, 0.2)!important;}";
  }
  
  
  //Friday
  if (onlyTicketsInput5.length == 0) {var resultOnlyTickets5 = " ";}
  else if (onlyTicketsInput5 == "All day"){
    var newcode= [];
    for (var hours = 0; hours < 24; hours++) { 
      newcode[hours] = ("#d_"+ nameToIdResult + ".day.dcol"+ hours +" ");
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultOnlyTickets5 = newCodeInString +"{background: rgba(253, 126, 20, 0.2)!important;}";
  }           
  else{
    var numbers = onlyTicketsInput5.toString();
    var numsArray = numbers.split(',').map(Number);
    var arrayLength = numsArray.length;
    var newcode = [];
    var arrayIndex= 0;
    for (var i = 0; i < arrayLength; i++) {
      for (var hours = 0; hours < 24; hours++) {
        if  (numsArray[i] == hours) {
          newcode[arrayIndex] = ("#d_"+nameToIdResult + ".day.dcol"+ hours +" ");
          arrayIndex++;
          
        }   
      }
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultOnlyTickets5 = newCodeInString +"{background: rgba(253, 126, 20, 0.2)!important;}";
  }
  
  //Saturday
  if (onlyTicketsInput6.length == 0){  var resultOnlyTickets6 = " ";}
  else if (onlyTicketsInput6 == "All day"){
    var newcode= [];
    for (var hours = 0; hours < 24; hours++) { 
      newcode[hours] = ("#d_"+ nameToIdResult + ".day.dcol"+ hours +" ");
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultOnlyTickets6 = newCodeInString +"{background: rgba(253, 126, 20, 0.2)!important;}";
  }           
  else{
    var numbers = onlyTicketsInput6.toString();
    var numsArray = numbers.split(',').map(Number);
    var arrayLength = numsArray.length;
    var newcode = [];
    var arrayIndex= 0;
    for (var i = 0; i < arrayLength; i++) {
      for (var hours = 0; hours < 24; hours++) {
        if  (numsArray[i] == hours) {
          newcode[arrayIndex] = ("#d_"+nameToIdResult + ".day.dcol"+ hours +" ");
          arrayIndex++;
          
        }   
      }
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultOnlyTickets6 = newCodeInString +"{background: rgba(253, 126, 20, 0.2)!important;}";
  }
  
  //Sunday
  if (onlyTicketsInput7.length == 0){  var resultOnlyTickets7 = " ";}
  else if (onlyTicketsInput7 == "All day"){
    var newcode= [];
    for (var hours = 0; hours < 24; hours++) { 
      newcode[hours] = ("#d_"+ nameToIdResult + ".day.dcol"+ hours +" ");
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultOnlyTickets7 = newCodeInString +"{background: rgba(253, 126, 20, 0.2)!important;}";
  }           
  else{
    var numbers = onlyTicketsInput7.toString();
    var numsArray = numbers.split(',').map(Number);
    var arrayLength = numsArray.length;
    var newcode = [];
    var arrayIndex= 0;
    for (var i = 0; i < arrayLength; i++) {
      for (var hours = 0; hours < 24; hours++) {
        if  (numsArray[i] == hours) {
          newcode[arrayIndex] = ("#d_"+nameToIdResult + ".day.dcol"+ hours +" ");
          arrayIndex++;
          
        }   
      }
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultOnlyTickets7 = newCodeInString +"{background: rgba(253, 126, 20, 0.2)!important;}";
  }
  
  
  
  
  /* Specific hours No BIZ 1:1 request */
  
  //Monday
  if (noBizInput1.length == 0) {var resultNoBiz1 = " ";}
  else if (noBizInput1 == "All day"){
    var newcode= [];
    for (var hours = 0; hours < 24; hours++) { 
      newcode[hours] = ("#d_"+ nameToIdResult + ".day.dcol"+ hours +" ");
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultNoBiz1 = newCodeInString +"{background: rgba(190,75,219,.1);}";
  }           
  else{
    var numbers = noBizInput1.toString();
    var numsArray = numbers.split(',').map(Number);
    var arrayLength = numsArray.length;
    var newcode = [];
    var arrayIndex= 0;
    
    for (var i = 0; i < arrayLength; i++) {
      for (var hours = 0; hours < 24; hours++) {
        if  (numsArray[i] == hours) {
          newcode[arrayIndex] = ("#d_"+nameToIdResult + ".day.dcol"+ hours +" ");
          arrayIndex++;
          
        }   
      }
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultNoBiz1 = newCodeInString+"{background: rgba(190,75,219,.1);}";
  }
  
  
  //Tuesday
  if (noBizInput2.length == 0)  {var resultNoBiz2 = " ";}
  else if (noBizInput2 == "All day"){
    var newcode= [];
    for (var hours = 0; hours < 24; hours++) { 
      newcode[hours] = ("#d_"+ nameToIdResult + ".day.dcol"+ hours +" ");
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultNoBiz2 = newCodeInString +"{background: rgba(190,75,219,.1);}";
  }   
  else{
    var numbers = noBizInput2.toString();
    var numsArray = numbers.split(',').map(Number);
    var arrayLength = numsArray.length;
    var newcode = [];
    var arrayIndex= 0;
    
    for (var i = 0; i < arrayLength; i++) {
      for (var hours = 0; hours < 24; hours++) {
        if  (numsArray[i] == hours) {
          newcode[arrayIndex] = ("#d_"+nameToIdResult + ".day.dcol"+ hours +" ");
          arrayIndex++;
          
        }   
      }
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultNoBiz2 = newCodeInString+"{background: rgba(190,75,219,.1);}";
  }
  
  //Wednesday
  if (noBizInput3.length == 0) {var resultNoBiz3 = " ";}
  else if (noBizInput3 == "All day"){
    var newcode= [];
    for (var hours = 0; hours < 24; hours++) { 
      newcode[hours] = ("#d_"+ nameToIdResult + ".day.dcol"+ hours +" ");
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultNoBiz3 = newCodeInString +"{background: rgba(190,75,219,.1);}";
  }   
  else{
    var numbers = noBizInput3.toString();
    var numsArray = numbers.split(',').map(Number);
    var arrayLength = numsArray.length;
    var newcode = [];
    var arrayIndex= 0;
    
    for (var i = 0; i < arrayLength; i++) {
      for (var hours = 0; hours < 24; hours++) {
        if  (numsArray[i] == hours) {
          newcode[arrayIndex] = ("#d_"+nameToIdResult + ".day.dcol"+ hours +" ");
          arrayIndex++;
          
        }   
      }
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultNoBiz3 = newCodeInString+"{background: rgba(190,75,219,.1);}";
  }
  
  //Thursday
  if (noBizInput4.length == 0) {var resultNoBiz4 = " ";}
  else if (noBizInput4 == "All day"){
    var newcode= [];
    for (var hours = 0; hours < 24; hours++) { 
      newcode[hours] = ("#d_"+ nameToIdResult + ".day.dcol"+ hours +" ");
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultNoBiz4 = newCodeInString +"{background: rgba(190,75,219,.1);}";
  }   
  else{
    var numbers = noBizInput4.toString();
    var numsArray = numbers.split(',').map(Number);
    var arrayLength = numsArray.length;
    var newcode = [];
    var arrayIndex= 0;
    
    for (var i = 0; i < arrayLength; i++) {
      for (var hours = 0; hours < 24; hours++) {
        if  (numsArray[i] == hours) {
          newcode[arrayIndex] = ("#d_"+nameToIdResult + ".day.dcol"+ hours +" ");
          arrayIndex++;
          
        }   
      }
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultNoBiz4 = newCodeInString+"{background: rgba(190,75,219,.1);}";
  }
  
  //Friday
  if (noBizInput5.length == 0) {var resultNoBiz5 = " ";}
  else if (noBizInput5 == "All day"){
    var newcode= [];
    for (var hours = 0; hours < 24; hours++) { 
      newcode[hours] = ("#d_"+ nameToIdResult + ".day.dcol"+ hours +" ");
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultNoBiz5 = newCodeInString +"{background: rgba(190,75,219,.1);}";
  }   
  else{
    var numbers = noBizInput5.toString();
    var numsArray = numbers.split(',').map(Number);
    var arrayLength = numsArray.length;
    var newcode = [];
    var arrayIndex= 0;
    
    for (var i = 0; i < arrayLength; i++) {
      for (var hours = 0; hours < 24; hours++) {
        if  (numsArray[i] == hours) {
          newcode[arrayIndex] = ("#d_"+nameToIdResult + ".day.dcol"+ hours +" ");
          arrayIndex++;
          
        }   
      }
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultNoBiz5 = newCodeInString+"{background: rgba(190,75,219,.1);}";
  }
  
  //Saturday
  if (noBizInput6.length == 0) {var resultNoBiz6 = " ";}
  else if (noBizInput6 == "All day"){
    var newcode= [];
    for (var hours = 0; hours < 24; hours++) { 
      newcode[hours] = ("#d_"+ nameToIdResult + ".day.dcol"+ hours +" ");
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultNoBiz6 = newCodeInString +"{background: rgba(190,75,219,.1);}";
  }   
  else{
    var numbers = noBizInput6.toString();
    var numsArray = numbers.split(',').map(Number);
    var arrayLength = numsArray.length;
    var newcode = [];
    var arrayIndex= 0;
    
    for (var i = 0; i < arrayLength; i++) {
      for (var hours = 0; hours < 24; hours++) {
        if  (numsArray[i] == hours) {
          newcode[arrayIndex] = ("#d_"+nameToIdResult + ".day.dcol"+ hours +" ");
          arrayIndex++;
          
        }   
      }
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultNoBiz6 = newCodeInString+"{background: rgba(190,75,219,.1);}";
  }
  
  //Sunday
  if (noBizInput7.length == 0) {var resultNoBiz7 = " ";}
  else if (noBizInput7 == "All day"){
    var newcode= [];
    for (var hours = 0; hours < 24; hours++) { 
      newcode[hours] = ("#d_"+ nameToIdResult + ".day.dcol"+ hours +" ");
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultNoBiz7 = newCodeInString +"{background: rgba(190,75,219,.1);}";
  }   
  else{
    var numbers = noBizInput7.toString();
    var numsArray = numbers.split(',').map(Number);
    var arrayLength = numsArray.length;
    var newcode = [];
    var arrayIndex= 0;
    
    for (var i = 0; i < arrayLength; i++) {
      for (var hours = 0; hours < 24; hours++) {
        if  (numsArray[i] == hours) {
          newcode[arrayIndex] = ("#d_"+nameToIdResult + ".day.dcol"+ hours +" ");
          arrayIndex++;
          
        }   
      }
    }
    var newCodeInString = newcode.toString();   /* Convert array to string */
    var resultNoBiz7 = newCodeInString+"{background: rgba(190,75,219,.1);}";
  }
  
  // Converting preferences in text to an array
  
  
  
  
  
  // Formatting result to get the CSS output
  var finalResult= "CSSWeek +="+ "`" + "/*" + nameToIdInput + "*/" + "#e_"+nameToIdResult+ "::after"+ "{ display:inline-block;content:'"+ 
    maxResult + chatHoursResult + oneHourBlockResult + fourHoursBlockResult + maxBizResult +"';" +"}"+ "#e_"+nameToIdResult+ "{"+ prefResult + 
      businessResult + teamLeadResult + ";" +"}"+ "#e_"+nameToIdResult+ " .udrag" + "{"+ prefResult2  +"}"+ "`"+";";
  
  finalResult += "CSSMonday +="+ "`" +"/*" + nameToIdInput + "*/" + resultOnlyTickets1 + resultNoBiz1 + "`" +";";
  finalResult += "CSSTuesday +="+ "`" +"/*" + nameToIdInput + "*/" + resultOnlyTickets2 + resultNoBiz2 + "`" +";";
  finalResult += "CSSWednesday +="+ "`" +"/*" + nameToIdInput + "*/" + resultOnlyTickets3 + resultNoBiz3 + "`"+";" ;
  finalResult += "CSSThursday +="+ "`" +"/*" + nameToIdInput + "*/" + resultOnlyTickets4 + resultNoBiz4 + "`"+";" ;
  finalResult += "CSSFriday +="+ "`" +"/*" + nameToIdInput + "*/" + resultOnlyTickets5 + resultNoBiz5 + "`" +";";
  finalResult += "CSSSaturday +="+ "`" +"/*" + nameToIdInput + "*/" + resultOnlyTickets6 + resultNoBiz6 + "`" +";";
  finalResult += "CSSSunday+="+ "`" +"/*" + nameToIdInput + "*/" + resultOnlyTickets7 + resultNoBiz7 + "`"+";" ;
  
  //If there's a preference in text added, add it to the preferences array
  if ( requirementInTextInput ) 
  { finalResult += "textForDiv.push("+'"'+requirementInTextInput + "^" + nameToIdResult +'"'+");"}
  
  
  // If the result is only errors, return one error message
  if (finalResult !=="No ID FoundErrorInMaxHoursErrorin PrefWorkerror in chat hours ResultError in One Hour Block ResultErrorInfourHoursBlockResultErrorInBusinessResultError in team Lead Result") {
    return finalResult; }
  else {
    return nameToIdInput + "Error"}
  
}


///// end of big function with all the scripts for each input



/// Part two:
/// Loop that runs the big function in each row, once for each HE.

function loop(){
  // This part gets the information from the current document and cells
  var app = SpreadsheetApp; 
  var activeSheet = app.getActiveSpreadsheet().getActiveSheet();
  //Check how many filled rows are in the document
  var numRows = activeSheet.getLastRow();
  var activeRange = "B3:AA" + numRows;
  var total = [];
  var loops = numRows - 1;
  var range = activeSheet.getRange(activeRange)
  //Loop once for each row, to get the needed values, and input those values to the big function.
  for (i=1; i < loops ; i++) { 
    var Bi = range.getCell(i,1).getValues().toString();
    var Ci = range.getCell(i,2).getValues().toString();
    var Di = range.getCell(i,3).getValues().toString();
    var Ei = range.getCell(i,4).getValues().toString();
    var Fi = range.getCell(i,5).getValues().toString();
    var Gi = range.getCell(i,6).getValues().toString();
    var Hi = range.getCell(i,7).getValues().toString();
    var Ii = range.getCell(i,8).getValues().toString();
    var Ji = range.getCell(i,9).getValues().toString();
    var Li = range.getCell(i,10).getValues().toString();
    ///we don't need K's value, as it is the email, only used to modify the selections.
    var Mi = range.getCell(i,12).getValues().toString();
    var Ni = range.getCell(i,13).getValues().toString();
    var Oi = range.getCell(i,14).getValues().toString();
    var Pi = range.getCell(i,15).getValues().toString();
    var Qi = range.getCell(i,16).getValues().toString();
    var Ri = range.getCell(i,17).getValues().toString();
    var Si = range.getCell(i,18).getValues().toString();
    var Ti = range.getCell(i,19).getValues().toString();
    var Ui = range.getCell(i,20).getValues().toString();
    var Vi = range.getCell(i,21).getValues().toString();
    var Wi = range.getCell(i,22).getValues().toString();
    var Xi = range.getCell(i,23).getValues().toString();
    var Yi = range.getCell(i,24).getValues().toString();
    var Zi = range.getCell(i,25).getValues().toString();
    var AAi = range.getCell(i,26).getValues().toString();
    
    //Run the big function with the values of the row, and return the result
    total[i]= myFunction(Bi, Ci, Di,Ei, Fi, Gi, Hi, Ii, Ji, Li, Mi, Ni, Oi, Pi, Qi, Ri, Si, Ti, Ui, Vi, Wi, Xi, Yi, Zi,AAi)
  }
  return total;
} 


