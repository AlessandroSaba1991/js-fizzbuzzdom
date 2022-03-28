//prendo container
const element_container = document.querySelector('.container');


//creo constanti per fizz e buzz
const fizz = 'Fizz '
const buzz = 'Buzz'

//dichiaro variabile quadrato + text
let text, element_div;

for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {

        text = fizz + buzz
        element_div = document.createElement('div')
        element_div.insertAdjacentHTML("beforeend", text)

    } else if (i % 5 == 0) {

        text = buzz
        element_div = document.createElement('div')
        element_div.insertAdjacentHTML("beforeend", text)

    } else if (i % 3 == 0) {

        text = fizz
        element_div = document.createElement('div')
        element_div.insertAdjacentHTML("beforeend", text)

    } else {

        text = i
        element_div = document.createElement('div')
        element_div.insertAdjacentHTML("beforeend", text)

    }

    element_container.append(element_div)
}