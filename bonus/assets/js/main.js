//creo constanti per fizz e buzz
const fizz = 'Fizz'
const buzz = 'Buzz'

//dichiaro variabile element_div + text
let text, element_div;

//prendo container
const element_container = document.querySelector('.container');

//ciclo for da 1 a 100
for (let i = 1; i <= 100; i++) {

    //creo un div
    element_div = document.createElement('div')

    //se il risultato della divisione sia per 3 sia per 5 è 0 
    if (i % 3 == 0 && i % 5 == 0) {

        //assegno alla variabile text il testo corrispondente
        text = fizz + buzz

        //assegno la classe sfondo corrispondente
        element_div.className = 'bg_35 '

        //se il risultato della divisione per 5 è 0 
    } else if (i % 5 == 0) {

        //assegno alla variabile text il testo corrispondente
        text = buzz

        //assegno la classe sfondo corrispondente
        element_div.className = 'bg_5 '

        //se il risultato della divisione per 3 è 0 
    } else if (i % 3 == 0) {

        //assegno alla variabile text il testo corrispondente
        text = fizz

        //assegno la classe sfondo corrispondente
        element_div.className = 'bg_3 '

        //se il non sono multipli di 3 e 5
    } else {

        //assegno alla variabile text il testo corrispondente
        text = i

        //assegno la classe sfondo corrispondente
        element_div.className = 'bg_normal '

    }

    //aggiungo la classe square a tutti i div 
    element_div.classList.add('square')

    //inserisco la variabile testo nel div
    element_div.insertAdjacentHTML("beforeend", text)

    //appendo al container il div completo di classi e testo
    element_container.append(element_div)
}