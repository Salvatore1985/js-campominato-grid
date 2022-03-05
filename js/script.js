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
const gridElement = document.getElementById("grid");

//*LEGO UN EVENTO AL CLICK DEL BTN-LEVEL
/*Creo variabile per prendere il valore della section del livello*/
/* btnLevelElement.addEventListener("click", function () {
    let levelValue = levelElement.value;
    console.log(levelValue);

}); */


// Arrow function che restituisce un div di square sotto forma di elemento del DOM
const createGridSquare = () => {
    const currentElement = document.createElement('div');
    // inseriamo tutto il necessario per ogni square
    currentElement.classList.add("square", "easy");
    return currentElement;
};


for (let i = 0; i < 100; i++) {
    const currentSquare = createGridSquare();


    currentSquare.addEventListener("click", function () {
        this.classList.add('active');
    });

    gridElement.appendChild(currentSquare);

}
