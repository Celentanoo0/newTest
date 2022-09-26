const button = document.querySelector('.button')
const bg = document.querySelector('.wrapper');
button.addEventListener('click', changingBgWhite);

function changingBgWhite(){
    //bg.classList.replace('wrapper', 'wrapper_opacity')
    bg.className = 'wrapper_opacity';
    button.removeEventListener('click', changingBgWhite)
    button.addEventListener('click', changingBgDark);
}

function changingBgDark(){
    //bg.classList.replace('wrapper_opacity', 'wrapper')
    bg.className = 'wrapper_back';
    button.removeEventListener('click', changingBgDark);
    button.addEventListener('click', changingBgWhite);
}