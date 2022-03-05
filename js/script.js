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
const btnResetElement = document.getElementById("btn-reset");
const gridElement = document.getElementById("grid");





// Arrow function che restituisce un div di square sotto forma di elemento del DOM
const createGridSquare = () => {
    const currentElement = document.createElement('div');
    // inseriamo tutto il necessario per ogni square
    currentElement.classList.add("square");
    return currentElement;
};

// Arrow function che toglie un div di square sotto forma di elemento del DOM
const remuveGridSquare = () => {
    const remuveElement = document.querySelector('#grid');
    remuveElement.remove("div");
    return remuveElement;
};


// Arrow function che restituisceil varole della select di un elemento del DOM
const selectValue = (element) => {
    const elementValue = element.value;
    // inseriamo tutto il necessario per ogni square
    return elementValue;
};

btnResetElement.addEventListener("click", function () {
    const prova = remuveGridSquare();

    console.log("reset", prova);
});
//*LEGO UN EVENTO AL CLICK DEL BTN-LEVEL
/*Creo variabile per prendere il valore della section del livello*/
btnLevelElement.addEventListener("click", function () {

    selectValue(levelElement);
    console.log(selectValue(levelElement));

    let level = 100;
    for (let i = 0; i < level; i++) {
        const currentSquare = createGridSquare();
        if (selectValue(levelElement) === "level-medium") {
            level = 81;
            currentSquare.classList.add('medium');

        } else if (selectValue(levelElement) === "level-hard") {
            level = 49;
            currentSquare.classList.add('hard');

        }
        currentSquare.addEventListener("click", function () {
            currentSquare.classList.add('active');

        });

        gridElement.appendChild(currentSquare);

    }

});




