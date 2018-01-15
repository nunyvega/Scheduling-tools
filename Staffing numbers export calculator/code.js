var arrayCounter = 0;
var arrayCounter2 = 0;
var partsArray = [];
var dateCounter;
var totalResult = [];


function myFunction(actualDate, previousDate, nextDate, actualTime, previousTime, nextTime, actualSlots, previousSlots) {
  
  
  // take only the first number of the hour, to compare between hours.
  var actualTimeNumber2 =  actualTime.split(":").map(Number);
  var actualTimeNumber = actualTimeNumber2[0];
  if (nextTime != 0){ var nextTimeNumber2=  nextTime.split(":").map(Number);
                     var nextTimeNumber = nextTimeNumber2[0];}
  else { nextTimeNumber = 0;}
  
  //  Check if the dates are the same
  if (actualDate!=previousDate) { arrayCounter=0; partsArray = [];}
  
  var actualSlotsParts = actualSlots.split("-").map(Number);
  // if the array index exists, add the first half, otherwise create it
  if ( partsArray[arrayCounter]) {partsArray[arrayCounter]+=actualSlotsParts[0];}
  else {  partsArray[arrayCounter]=actualSlotsParts[0];}
  // if the array index exists, add the second half, otherwise create it
  if ( partsArray[arrayCounter+1]) {partsArray[arrayCounter+1]+=actualSlotsParts[1];}
  else {  partsArray[arrayCounter+1]=actualSlotsParts[1];}
  
  //    Check if it's the last block of that hour, and if its an odd number. (to add every 2 hs)
  //  If it changed more than two hours, move to the next place in the array
  if ( actualTimeNumber % 2 == 1 && actualTimeNumber != nextTimeNumber)
  {
    arrayCounter= arrayCounter+2
    
  }
  //  if the date is changing, return all the numbers in the array
  if (actualDate!=nextDate) {
    totalResult[arrayCounter2] = partsArray;
    arrayCounter2++;}
}







function loop(){
  // This part gets the information from the current document and cells
  var app = SpreadsheetApp; 
  var activeSheet = app.getActiveSpreadsheet().getActiveSheet();
  //Check how many filled rows are in the document
  var numRows = activeSheet.getLastRow();
  var activeRange = "A2:C" + numRows;
  var total = [];
  var loops = numRows ;
  var range = activeSheet.getRange(activeRange)
  //Loop once for each row, to get the needed values, and input those values to the big function.
  for (i=1; i < loops ; i++) { 
    var j = i-1;
    var k = i+1;
    var Ai = range.getCell(i,1).getValues().toString();
    var Bi = range.getCell(i,2).getValues().toString();
    var Ci = range.getCell(i,3).getValues().toString();
    // if it's the first line don't run it (there's no previous value)
    if (i!= 1){ var Aj = range.getCell(j,1).getValues().toString();
               var Bj = range.getCell(j,2).getValues().toString();
               var Cj = range.getCell(j,3).getValues().toString();}
    else { Aj = 0; Bj=0; Cj=0;}
    //if  it's the last line don't run it (there's no next value)
    if (k!= loops){
      var Ak = range.getCell(k,1).getValues().toString();
      var Bk = range.getCell(k,2).getValues().toString();
    }
    else {Ak=0; Ck=0;}
    
    
    
    //Run the big function with the values of the row, and return the result
    total[i]= myFunction(Ai,Aj,Ak,Bi,Bj,Bk,Ci,Cj)
  }
  
  for (i=0; i< totalResult.length; i++) {
    totalResult[i].splice(2, 0, null);
    totalResult[i].splice(5, 0, null);
    totalResult[i].splice(8, 0, null);
    totalResult[i].splice(11, 0, null);
    totalResult[i].splice(14, 0, null);
    totalResult[i].splice(17, 0, null);
    totalResult[i].splice(20, 0, null);
    totalResult[i].splice(23, 0, null);
    totalResult[i].splice(26, 0, null);
    totalResult[i].splice(29, 0, null);
    totalResult[i].splice(32, 0, null);
  }
  
  
  return totalResult;
  
} 
