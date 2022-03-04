/**
 * Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
 */
//*RECUPERO L'ELEMENTO DAL DOM
const levelElement = document.getElementById("level");
const btnLevelElement = document.getElementById("btn-level");


//*LEGO UN EVENTO AL CLICK DEL BTN-LEVEL
btnLevelElement.addEventListener("click", function () {
    /*Creo variabile per prendere il valore della section del livello*/
    let levelValue = levelElement.value;
    console.log(levelValue);

});

