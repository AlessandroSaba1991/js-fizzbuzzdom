const element_container = document.querySelector('.container');

for (i = 1; i <= 100; i++) {
    let element_square_number = `<div class="square bg_aqua">${i}</div>`;
    element_container.insertAdjacentHTML('beforeend', element_square_number);
}