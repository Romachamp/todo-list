const list = document.querySelector('.todo-list');
const input = document.querySelector('.todo-input');
const button = document.querySelector('.add-button');
let counter = 1;
button.addEventListener('click', function (e) {
    list.insertAdjacentHTML('afterbegin', `<div class="block">${counter++}.<div>${input.value}</div></div>`);
});

document.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        list.insertAdjacentHTML('afterbegin', `<div class="block">${counter++}.<div>${input.value}</div></div>`);
    }
});