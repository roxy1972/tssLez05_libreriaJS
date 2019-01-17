/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ar_nomi = [];
var ar_voti = [];


function carica() {
    ar_nomi.push(document.getElementById("in_nome").value);
    ar_voti.push(document.getElementById("in_voto").value);
    //document.getElementById("div_alunni").innerHTML = createElenco(ar_nomi);
    let myObjTag = document.getElementById("div_alunni");
    createElencoBRObjTag(ar_nomi, myObjTag);
}

function createElencoOL() {
    let text = "";
    let totale = 0;
    let ris = "";
    for (i = 0; i < ar_nomi.length; i++) {
        text += "<li>" + " " + ar_nomi[i] + " ha preso: " + ar_voti[i] + "</li>";
        totale += ar_voti[i] * 1;
    }
    ris = "<ol>" + text + "</ol>";
    return ris;
}

function createElencoBR() {
    let text = "";
    let totale = 0;
    for (i = 0; i < ar_nomi.length; i++) {
        text += "<span in='name" + 1 + "'> #" + (i + 1) + " " + ar_nomi[i] + " ha preso: " + ar_voti[i] + "</span><br>";
        totale += ar_voti[i] * 1;
    }
    return text;
}

function createElenco(myArray) {

    let ris = "";
    for (i = 0; i < myArray.length; i++) {
        ris += myArray[i] + "<br/>";
    }
    return ris;
}

function calcola() {
    let val = document.getElementById("in_num").value;
    let esp = document.getElementById("in_pot").value;
    let ris = "";
    ris = potenza(val, esp);
    document.getElementById("div_risult").innerHTML = ris;

}



