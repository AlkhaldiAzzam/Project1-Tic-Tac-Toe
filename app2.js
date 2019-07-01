
const iconsO = document.querySelectorAll('.o');

const chooseIconO = function(){

    oIcon = this.getAttribute('src');
    console.log(oIcon);
}

iconsO.forEach(element => {
    element.addEventListener('click' , chooseIconO);
});



const iconsX = document.querySelectorAll('.x');

const chooseIconX = function(){

    xIcon = this.getAttribute('src');
    console.log(xIcon);
}

iconsX.forEach(element => {
    element.addEventListener('click' , chooseIconX);
});



