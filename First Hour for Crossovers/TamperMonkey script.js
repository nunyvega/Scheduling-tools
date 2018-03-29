// ==UserScript==
// @name         First hour for Crossovers
// @namespace    
// @version      1
// @description  Show which is the first hour of the day of a HE in the grid view
// @author       Alvarito querido
// @match        https://automattic.humanity.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // THE CSS CODE GOES UNDER HERE!!!!!!!!!  THE CSS CODE GOES UNDER HERE!!!!!!!!!  THE CSS CODE GOES UNDER HERE!!!!!!!!!  THE CSS CODE GOES UNDER HERE!!!!!!!!!
var CSS = `
.dcol14#d_3547615{border: 5px solid #4a9abd !important;}
.dcol16#d_3547598{border: 5px solid #4a9abd !important;}
.dcol5#d_3547578{border: 5px solid #4a9abd !important;}
.dcol6#d_3544693{border: 5px solid #4a9abd !important;}
.dcol7#d_3547553{border: 5px solid #4a9abd !important;}
.dcol8#d_3758719{border: 5px solid #4a9abd !important;}
.dcol14#d_3620613{border: 5px solid #4a9abd !important;}
.dcol8#d_3546870{border: 5px solid #4a9abd !important;}
.dcol7#d_3910909{border: 5px solid #4a9abd !important;}
.dcol17#d_3822216{border: 5px solid #4a9abd !important;}
.dcol8#d_3547550{border: 5px solid #4a9abd !important;}
.dcol16#d_3547621{border: 5px solid #4a9abd !important;}
.dcol8#d_3909450{border: 5px solid #4a9abd !important;}
.dcol10#d_3546860{border: 5px solid #4a9abd !important;}
.dcol6#d_3831647{border: 5px solid #4a9abd !important;}
.dcol11#d_3915526{border: 5px solid #4a9abd !important;}
.dcol14#d_3550426{border: 5px solid #4a9abd !important;}
.dcol15#d_3828026{border: 5px solid #4a9abd !important;}
.dcol8#d_3924952{border: 5px solid #4a9abd !important;}
.dcol8#d_3593975{border: 5px solid #4a9abd !important;}
.dcol5#d_3598669{border: 5px solid #4a9abd !important;}
.dcol8#d_3598824{border: 5px solid #4a9abd !important;}
.dcol5#d_3694222{border: 5px solid #4a9abd !important;}
.dcol6#d_3623879{border: 5px solid #4a9abd !important;}
.dcol5#d_3756474{border: 5px solid #4a9abd !important;}
.dcol15#d_3592419{border: 5px solid #4a9abd !important;}
`;








    //This is the function to add the CSS modifications to the page
        function addCSS(str) {

            var node = document.createElement('style');
            node.innerHTML = str ;
            node.id = "customCSSCrossovers";
            document.body.appendChild(node);
        }

    addCSS(CSS);
})();
