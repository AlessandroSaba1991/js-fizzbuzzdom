//creo constanti per fizz e buzz
const fizz = 'Fizz'
const buzz = 'Buzz'

// ciclo for da 1 a 100
for (let i = 1; i <= 100; i++) {
    //se il risultato della divisione sia per 3 sia per 5 è 0 
    if (i % 3 == 0 && i % 5 == 0) {

        //assegno alla variabile text il testo corrispondente
        text = fizz + buzz

        //se il risultato della divisione per 5 è 0 
    } else if (i % 5 == 0) {

        //assegno alla variabile text il testo corrispondente
        text = buzz

        //se il risultato della divisione per 3 è 0 
    } else if (i % 3 == 0) {

        //assegno alla variabile text il testo corrispondente
        text = fizz

        //se il non sono multipli di 3 e 5
    } else {

        //assegno alla variabile text il testo corrispondente
        text = i

    }
    console.log(text);
}