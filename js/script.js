const button = document.querySelector('.button')
const bg = document.querySelector('.wrapper');
button.addEventListener('click', changingBgWhite);

function changingBgWhite(){
    bg.classList.replace('wrapper', 'wrapper_white')
    button.removeEventListener('click', changingBgWhite)
    button.addEventListener('click', changingBgDark);
}

function changingBgDark(){
    bg.classList.replace('wrapper_white', 'wrapper')
    button.removeEventListener('click', changingBgDark);
    button.addEventListener('click', changingBgWhite);
}