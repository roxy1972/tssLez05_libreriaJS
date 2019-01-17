/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function calcola() {
    let val = document.getElementById("in_num1").value;
    let esp = document.getElementById("in_num2").value;
    let ris = "";
    ris = potenza(val, esp);
    document.getElementById("div_risult").innerHTML = ris;
}

function eseguiSomma(){
    let val1 =document.getElementById("in_num1").value;
    let val2= document.getElementById("in_num2").value;
    let ris = somma(val1,val2);
    document.getElementById("div_somma").innerHTML = ris;
}