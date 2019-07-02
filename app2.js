const iconsO = document.querySelectorAll('.o');

const chooseIconO = function() {

    window.localStorage.setItem('o', this.getAttribute('src'));
    console.log(oIcon);
    iconsO.forEach(element => {
        element.className = 'o';
    });


    this.className += ' oChosen';
}

iconsO.forEach(element => {
    element.addEventListener('click', chooseIconO);
});



const iconsX = document.querySelectorAll('.x');

const chooseIconX = function() {

    window.localStorage.setItem('x', this.getAttribute('src'));
    iconsX.forEach(element => {
        element.className = 'x';
    });
    this.className += ' xChosen';


    console.log(xIcon);
}

iconsX.forEach(element => {
    element.addEventListener('click', chooseIconX);
});