
function createElenco(myArray) {
    //questa funzione gli passi un array di una serie di elementi e mi restituisce un array con un br
    let ris = "";
    for (i = 0; i < myArray.length; i++) {
        ris += myArray[i] + "<br/>";
    }
    return ris;
}

function createElencoBRObjTag(myArray, myObjTag) {
// mi passi un array X e mi restituisce un oggetto X
    let ris = "";
    for (i = 0; i < myArray.length; i++) {
        ris += myArray[i] + "<br/>";
    }
    myObjTag.innerHTML = ris;
    return ris;
}

function createElencoOL(myArray) {
    let ris = "";
    for (i = 0; i < myArray.length; i++) {
        ris += "<li>" + myArray[i] + "</li>";
    }
    ris = "<ol>" + ris + "</ol>";
    return ris;
}

function createElencoBR(myArray) {
    let ris = "";
    for (i = 0; i < myArray.length; i++) {
        ris += myArray[i] + "<br/>";
    }
    return ris;
}

function cubo(valore) {
    let ris = 0;
    ris = valore * valore * valore;
    return ris;
}

function quadrato(valore) {
    let ris = 0;
    ris = valore * valore;
    return ris;
}

function potenza(valore, esponente) {
    
    let ris = 1;
    for (i = 0; i < esponente; i++)
        ris = ris * valore;
    return ris;
}

function somma(val1,val2){
    let ris = 0;
    val1=val1*1;
    val2= val2*1;
    ris = val1+val2;
    return ris;
}


