/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ar_nomi =[];
var ar_voti=[];


function carica(){
    ar_nomi.push(document.getElementById("in_nome").value);
    ar_voti.push(document.getElementById("in_voto").value);
    outPut();   
}

function outPut() {
    let text = "";
    let totale = 0;
    let ris = "";
    for (i = 0; i < ar_nomi.length; i++) {

        text += "<li>"  + " " + ar_nomi[i] + " ha preso: " + ar_voti[i] + "</li>";
        totale += ar_voti[i] * 1;
    }    
    ris = "<ol>" + text + "</ol>";
    document.getElementById("div_alunni").innerHTML = ris;      
}
