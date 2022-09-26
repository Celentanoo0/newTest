const button = document.querySelector('.button')
const bg = document.querySelector('.wrapper');
button.addEventListener('click', changingBgWhite);

function changingBgWhite(){
    bg.className = 'wrapper_black-to-white';
    button.removeEventListener('click', changingBgWhite)
    button.addEventListener('click', changingBgDark);
}

function changingBgDark(){
    bg.className = 'wrapper_white-to-black';
    button.removeEventListener('click', changingBgDark);
    button.addEventListener('click', changingBgWhite);
}