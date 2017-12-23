# schedganization
Code written to bbe used in Google sheets. It takes preferences sent via Google form and runs after.
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
