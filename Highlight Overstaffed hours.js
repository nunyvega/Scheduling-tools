/* code to create a bookmark that highlights overstaffed hours in the Open Shifts view in Humanity */


var partes= [];
for (var i = 1; i < 3000; i++) {
  var numerato = document.querySelector("#_cd_reports > div.right > div.tableScroll > table > tbody > tr:nth-child("+i+") > td:nth-child(6)");
  var numerato2= numerato.innerHTML;
  var frase = numerato2.toString();
  partes[i] = frase.split('/').map(Number);
 
     if (partes[i][0] > partes [i][1]) {
        numerato.style.color = 'red';numerato.style.font= "15pt Courier";
        }
 }


