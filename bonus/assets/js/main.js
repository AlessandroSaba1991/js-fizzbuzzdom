//prendo container
const element_container = document.querySelector('.container');


//creo constanti per fizz e buzz
const fizz = 'Fizz '
const buzz = 'Buzz'

//dichiaro variabile quadrato + text
let text, element_square;

for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        text = fizz + buzz

    } else if (i % 5 == 0) {
        text = buzz

    } else if (i % 3 == 0) {
        text = fizz

    } else {
        text = i
    }
    console.log(text);
}