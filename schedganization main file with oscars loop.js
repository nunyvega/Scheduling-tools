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
      resultado[ i ][ j ] = range[ i ][ j ] + 12 ;
    }
  }
  //Devolvés resultado y mágicamente llena varias celdas
  return resultado;
}





/* Oscar's Loop name to ID */

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
        case "Aaron Portbury (PA)":  idToReturn=3547614; break;
        case "Adeline Yaw (PA)":  idToReturn=3547615; break;
        case "AI Sajib (R2)":  idToReturn=3605118; break;
        case "Alicia Henry (DR)":  idToReturn=3547599; break;
        case "Alvaro Vega (DR)":  idToReturn=3547616; break;
        case "Amy Lane (ES)":  idToReturn=3560330; break;
        case "Andrew dela Serna (PA)":  idToReturn=3547603; break;
        case "Aniello Forlini (ES)":  idToReturn=3547628; break;
        case "Anna Andrews-Mills (SP)":  idToReturn=3562803; break;
        case "Anna McPhee (BE)":  idToReturn=3605387; break;
        case "Asher Cantrell (AT)":  idToReturn=3547583; break;
        case "Austin Gilmour (AT)":  idToReturn=3548342; break;
        case "Ben Chilcote (HE)":  idToReturn=3547648; break;
        case "Brezo Cordero (DR)":  idToReturn=3562077; break;
        case "Bruce Allen (AT)":  idToReturn=3547580; break;
        case "Carissa Faxlanger (AT)":  idToReturn=3547578; break;
        case "Carla Doria Medina (TI)":  idToReturn=3547566; break;
        case "Cat Scheer (BE)": idToReturn=3547637; break;
        case "Catia Kitahara (ES)":  idToReturn=3547630; break;
        case "Charlie Coates (ES)":  idToReturn=3544693; break;
        case "Chris Diehl (JU)":  idToReturn=3704730; break;
        case "Chris Loder (AT)":  idToReturn=3593423; break;
        case "Chris Rudzki (HE)":  idToReturn=3543883; break;
        case "Cécile Rainon (LU)":  idToReturn=3547643; break;
        case "Davi Pontes (AS)":  idToReturn=3614800; break;
        case "David Cole (BE)":  idToReturn=3546863; break;
        case "David Romero (DR)":  idToReturn=3547595; break;
        case "Davor Altman (LU)":  idToReturn=3603806; break;
        case "Dean (SP)":  idToReturn=3547554; break;
        case "Denise Williams (CE)":  idToReturn=3541324; break;
        case "Destiny Fox (BE)":  idToReturn=3758719; break;
        case "Donal O'Conghaile (LU)":  idToReturn=3620613; break;
        case "Drew Hackney (BE)":  idToReturn=3546870; break;
        case "Ed Thomas (JU)":  idToReturn=3762442; break;
        case "Eduardo Zulian (ES)":  idToReturn=3547629; break;
        case "Ehtisham Siddiqui (LE)":  idToReturn=3547619; break;
        case "Eric McDuffie (SP)":  idToReturn=3547550; break;
        case "Gabriel Maldonado (DR)":  idToReturn=3547596; break;
        case "Georgina Reeder (DR)":  idToReturn=3547642; break;
        case "Gideon Koh (PA)":  idToReturn=3592531; break;
        case "Glenn Pearson (SP)":  idToReturn=3547549; break;
        case "Gracie Ofslager (HE)":  idToReturn=3547645; break;
        case "Guga Alves (JU)":  idToReturn=3543890; break;
        case "Guilherme Azeredo (TI)":  idToReturn=3592905; break;
        case "Hafiz Rahman (LE)":  idToReturn=3547620; break;
        case "Hari Shanker (LE)":  idToReturn=3655008; break;
        case "Ian Markauskas (AS)":  idToReturn=3711993; break;
        case "Irwin Chua (PA)":  idToReturn=3547621; break;
        case "Ivan Blazevic (LU)":  idToReturn=3596082; break;
        case "Jacklyn Lock (HE)":  idToReturn=3547650; break;
        case "Jamie Palatnik (AS)":  idToReturn=3650895; break;
        case "Jason Snow (SP)":  idToReturn=3546864; break;
        case "Jay Mendoza (ES)":  idToReturn=3547626; break;
        case "Jen McFadden (ES)":  idToReturn=3543889; break;
        case "Jessica Gardner (HE)":  idToReturn=3716409; break;
        case "Julia Sydnor (DR)":  idToReturn=3547639; break;
        case "Kateryna Kodonenko (TI)":  idToReturn=3547564; break;
        case "Keith Lock (TI)":  idToReturn=3765953; break;
        case "Kevin Marsden (BE)":  idToReturn=3546868; break;
        case "Khyati Gala (R2)":  idToReturn=3592412; break;
        case "Kris Korn (LU)":  idToReturn=3547640; break;
        case "Kristen Symonds (PA)":  idToReturn=3550426; break;
        case "Kristin Snow (CE)":  idToReturn=3543891; break;
        case "Kristina Daniele (HO)":  idToReturn=3756473; break;
        case "Livio Vilela (AT)":  idToReturn=3547586; break;
        case "Magdalena Olszewska (DR)":  idToReturn=3559549; break;
        case "Marjorie Asturias (HE)":  idToReturn=3547649; break;
        case "Mark Riley (JU)":  idToReturn=3547571; break;
        case "Mark Senff (TI)":  idToReturn=3547565; break;
        case "Maureen Carruthers (AT)":  idToReturn=3547584; break;
        case "Megan Albritton (CE)":  idToReturn=3547636; break;
        case "Melissa Silberstang (AS)":  idToReturn=3594536; break;
        case "Mike Henry (LU)":  idToReturn=3547644; break;
        case "Mike Straw (AS)":  idToReturn=3611864; break;
        case "Mindy Postoff (ES)":  idToReturn=3547632; break;
        case "Nagesh Pai (LE)":  idToReturn=3547617; break;
        case "Niels Lange (LE)":  idToReturn=3592532; break;
        case "Onyeka Amukpo (LU)":  idToReturn=3756471; break;
        case "Pankaj Kumar (R2)":  idToReturn=3623898; break;
        case "Rafael Funchal (ES)":  idToReturn=3547631; break;
        case "Rahul Gupta (LE)":  idToReturn=3543888; break;
        case "Raúl Antón Cuadrado (TI)":  idToReturn=3547567; break;
        case "Richard Hunt (CE)":  idToReturn=3593734; break;
        case "Richard Waynick (CE)":  idToReturn=3546858; break;
        case "Rose Pajaroja (LE)":  idToReturn=3756469; break;
        case "Rossana Menezes (JU)":  idToReturn=3598707; break;
        case "Sajid Javed (R2)":  idToReturn=3547594; break;
        case "Sam Hamdy (ES)":  idToReturn=3547633; break;
        case "Sam Vaidya (HO)":  idToReturn=3593733; break;
        case "Samantha Hare (ES)":  idToReturn=3547627; break;
        case "Sarah Cada (PA)":  idToReturn=3592413; break;
        case "Sarah Greenlee (AS)":  idToReturn=3593975; break;
        case "Sarah Wolff Milligan (JU)":  idToReturn=3547563; break;
        case "Sarah Woolsey (SP)":  idToReturn=3547552; break;
        case "Shadae Trotman (AS)":  idToReturn=3598669; break;
        case "Shane Tabrizi (CE)":  idToReturn=3691862; break;
        case "Siobhan Bamber (LU)":  idToReturn=3546866; break;
        case "Spencer Berry (HO)":  idToReturn=3564749; break;
        case "Stephen Cosgrove (HO)":  idToReturn=3598824; break;
        case "Steve Dixon (HE)":  idToReturn=3716424; break;
        case "Steve Kryworuka (HE)":  idToReturn=3547646; break;
        case "Sudipto Mondal (LE)":  idToReturn=3548688; break;
        case "Suyogya Shukla (R2)":  idToReturn=3592414; break;
        case "Synora Eusebio (AT)":  idToReturn=3694222; break;
        case "Tiffany Miller (HO)":  idToReturn=3623879; break;
        case "Tiffany Villa (BE)":  idToReturn=3758718; break;
        case "Tish Briseno (SP)":  idToReturn=3547555; break;
        case "Tony Arcangelini (HO)":  idToReturn=3756474; break;
        case "Travis Dunne (CE)":  idToReturn=3547635; break;
        case "Trevor Montgomery (AT)":  idToReturn=3547582; break;
        case "Wyn Barnett (AT)":  idToReturn=3593407; break;
        case "Yuki Hachiya (LE)":  idToReturn=3592419; break;
        case "Zohair Yousafi (R2)":  idToReturn=3730788; break;
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




/* Oscar's Loop Hours in a row*/

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
