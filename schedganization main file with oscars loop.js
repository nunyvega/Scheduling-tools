/* Usando un loop que creó Oscar pongo de input un rango de valores, y el loop procesa cada uno de ellos,
y me llena una columna completa con las respuestas.
Es decir, pongo de input todas las respuestas sobre cierta pregunta, y las procesa a todas juntas.
Lo que quiero ahora es crear una sola funcion gigante que use de input todas las respuestas de un HE, 
y dé directamente el resultado de su codigo CSS, y loopear esa formula por cada HE.
*/




/* Oscar's Original Loop */

function leerYEscribirVariasCeldas( range ) {
  const resultado = [];
  var i, j;
  // Iterar por cada fila del rango
  for( i = 0 ; i < range.length; i++ ) {
    //Agrego nueva fila a resultado
    resultado[i] = [];
    // Iterar por cada columna de la fila
    for( j = 0; j < range[ i ].length; j++ ) {
      // Acá transformas el input en lo que quieras, o whatever
      // Queda acumulado en `resultado`
      resultado[ i ][ j ] = range[ i ][ j ] + 12 ; //ejemplo de un script cualquiera.
    }
  }
  //Devolvés resultado y mágicamente llena varias celdas
  return resultado;
}





/* Oscar's Loop using the function that changes a name to its ID */

function ID2 ( range ) {
  const resultado = [];
  var i, j;
  // Iterar por cada fila del rango
  for( i = 0 ; i < range.length; i++ ) {
    //Agrego nueva fila a resultado
    resultado[i] = [];
    // Iterar por cada columna de la fila
    for( j = 0; j < range[ i ].length; j++ ) {
      var idToReturn;
      var name = range [i] [j];
      switch(range [i] [j]){  
       
        case "Alvaro Vega (AT)":  idToReturn=3593407; break;
        case "Solano Palacio (LE)":  idToReturn=3592419; break;
        default:  idToReturn="No ID Found";
          
      }
      resultado[ i ][ j ] = idToReturn;        
    }
  }
  //Devolvés resultado y mágicamente llena varias celdas
  return resultado;
}






/* Oscar's Loop adapted to Max support hours*/

function maxHours2( range ) {
  const resultado = [];
  var i, j;
  // Iterar por cada fila del rango
  for( i = 0 ; i < range.length; i++ ) {
    //Agrego nueva fila a resultado
    resultado[i] = [];
    // Iterar por cada columna de la fila
    for( j = 0; j < range[ i ].length; j++ ) {
      
      var maxResult;
      var num = range[ i ][ j ];
      if(range===1){
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
      else if (num===8){
        maxResult="8hMax";
      }
      else {
        return false;
      }
      resultado[ i ][ j ] = maxResult;
      
    }
  }
  //Devolvés resultado y mágicamente llena varias celdas
  
  return resultado;
}


/* Oscar's  Loop for preferred type of work */

function CSS2( range ) {
  const resultado = [];
  var i, j;
  // Iterar por cada fila del rango
  for( i = 0 ; i < range.length; i++ ) {
    //Agrego nueva fila a resultado
    resultado[i] = [];
    // Iterar por cada columna de la fila
    for( j = 0; j < range[ i ].length; j++ ) {
      // Acá transformas el input en lo que quieras, o whatever
      // Queda acumulado en `resultado`
      var pref = range [ i ] [ j ];
      var prefResult;
      if(pref==="Tickets"){
        prefResult="background-color: rgba(217, 255, 102,0.4) !important;";
      }
      else if(pref==="Live Chat"){
        prefResult="background-color:rgba(190, 92, 251,0.2) !important;";
      }
      else if(pref==="No particular preference"){
        prefResult=""
      }
      else{
        return false;
      }
      resultado [ i ] [ j ] =  prefResult;
    }
    
  }
  //Devolvés resultado y mágicamente llena varias celdas
  return resultado;
}




/* Oscar's Loop for preferred number of Hours in a row*/

function chatHoursRow2( range ) {
  const resultado = [];
  var i, j;
  // Iterar por cada fila del rango
  for( i = 0 ; i < range.length; i++ ) {
    //Agrego nueva fila a resultado
    resultado[i] = [];
    // Iterar por cada columna de la fila
    for( j = 0; j < range[ i ].length; j++ ) {
      // Acá transformas el input en lo que quieras, o whatever
      // Queda acumulado en `resultado`
      var chatHoursResult;
      var num = range[ i ] [ j ];
      if(num===1){
        chatHoursResult="1hRow";
      }
      else if (num===2){
        chatHoursResult="2HRow";
      }
      else if (num===3){
        chatHoursResult="3hRow";
      }
      else if (num===4){
        chatHoursResult="4hRow";
      }
      else if (num===5){
        chatHoursResult="5hRow";
      }
      else if (num==="No particular preference"){
        chatHoursResult="";
      }
      else {
        return false;
      }
      resultado [ i ] [ j ] = chatHoursResult;
    };
  }
  return resultado;
}
//Devolvés resultado y mágicamente llena varias celdas





/* Oscar's loop for onehourblocks */

function oneHourBlock2( range ) {
  const resultado = [];
  var i, j;
  // Iterar por cada fila del rango
  for( i = 0 ; i < range.length; i++ ) {
    //Agrego nueva fila a resultado
    resultado[i] = [];
    // Iterar por cada columna de la fila
    for( j = 0; j < range[ i ].length; j++ ) {
      // Acá transformas el input en lo que quieras, o whatever
      // Queda acumulado en `resultado`
      var reply = range [ i ] [ j ];
      var oneHourBlockResult;
      if (reply==="Yes"){
        oneHourBlockResult="1h✓";
      }
      else if(reply==="No"){
        oneHourBlockResult="1hX";
      }
      else {
        return false;
      }
      resultado [ i ] [ j ] =  oneHourBlockResult;
    }
  }
  //Devolvés resultado y mágicamente llena varias celdas
  return resultado;
}





/* Oscar's loop for fourhoursblock */

function fourHoursBlock2( range ) {
  const resultado = [];
  var i, j;
  // Iterar por cada fila del rango
  for( i = 0 ; i < range.length; i++ ) {
    //Agrego nueva fila a resultado
    resultado[i] = [];
    // Iterar por cada columna de la fila
    for( j = 0; j < range[ i ].length; j++ ) {
      // Acá transformas el input en lo que quieras, o whatever
      // Queda acumulado en `resultado`
      var fourHoursBlockResult;
      var reply= range[i][j];
      if (reply==="Yes"){
        fourHoursBlockResult="4h✓";
      }
      else if(reply==="No"){
        fourHoursBlockResult="4hX";
      }
      else {
        return false;
      }
      resultado[i][j]= fourHoursBlockResult;
    }
  }
  return resultado;
}
//Devolvés resultado y mágicamente llena varias celdas





/* Oscar's loop for Business1:1 */

function business2 ( range ) {
  const resultado = [];
  var i, j;
  // Iterar por cada fila del rango
  for( i = 0 ; i < range.length; i++ ) {
    //Agrego nueva fila a resultado
    resultado[i] = [];
    // Iterar por cada columna de la fila
    for( j = 0; j < range[ i ].length; j++ ) {
      // Acá transformas el input en lo que quieras, o whatever
      // Queda acumulado en `resultado`
      var businessResult;
      var reply = range[i][j];
      if (reply==="Full time"){
        businessResult="border-right:  5px solid #5e3cc4 !important;";
      }
      else if(reply==="Part time"){
        businessResult="border-right:  5px dotted #5e3cc4 !important;";
      }
      else if(reply==="No"){
        businessResult="";
      }
      else {
        return false;
      }
      resultado[i][j]= businessResult;
    }
  }
  //Devolvés resultado y mágicamente llena varias celdas
  return resultado;
}




/* Oscar's  Loop for team leads */

function teamLead2( range ) {
  const resultado = [];
  var i, j;
  // Iterar por cada fila del rango
  for( i = 0 ; i < range.length; i++ ) {
    //Agrego nueva fila a resultado
    resultado[i] = [];
    // Iterar por cada columna de la fila
    for( j = 0; j < range[ i ].length; j++ ) {
      // Acá transformas el input en lo que quieras, o whatever
      // Queda acumulado en `resultado`
      var reply = range[i][j];
      var teamLeadResult="border-left: 20px solid ";
      if (reply==="Yes"){
        teamLeadResult +="red !important;";
      }
      else if(reply==="No"){
        teamLeadResult +="green !important;";
      }
      else {
        return false;
      }
      resultado[i][j] =  teamLeadResult;
    }
  }
  //Devolvés resultado y mágicamente llena varias celdas
  return resultado;
  
}




/* Oscar's Loop for Pressable Ambassadors */

function pressableAmbassador2( range ) {
  const resultado = [];
  var i, j;
  // Iterar por cada fila del rango
  for( i = 0 ; i < range.length; i++ ) {
    //Agrego nueva fila a resultado
    resultado[i] = [];
    // Iterar por cada columna de la fila
    for( j = 0; j < range[ i ].length; j++ ) {
      var paResult;
      var reply = range [i][j];
      if (reply==="Yes"){
        paResult="PA";
      }
      else if(reply==="No"){
        paResult="";
      }
      else {
        return false;
      }
 resultado[ i ][ j ] = paResult
    }
   
  }
  //Devolvés resultado y mágicamente llena varias celdas
return resultado;
}







 
                               /*  END OF OSCARS LOOP   */
