function imgSlider(img) {
    document.querySelector(".crush").src = img;
}

function changeBgColor(color) {
    const sec = document.querySelector('.sec');
    sec.style.background = color;
    console.log(sec);
}


document.addEventListener("click", (e) => {
    const source = e.target.src.split('/');
    console.log(source[4]);
    switch (source[4]) {
        case 'crush%20orange.png': {
            imgSlider('./img/crush orange.png');
            changeBgColor('orange');
            break;
        }
        case 'crush%20strawberry.png': {
            imgSlider('./img/crush strawberry.png');
            changeBgColor('#DC5A7C');
            break;
        }
        case 'crush%20grape.png': {
            imgSlider('./img/crush grape.png');
            changeBgColor('purple');
            break;
        }

        case 'crush%20pineapple.png': {
            imgSlider('./img/crush pineapple.png');
            changeBgColor('#F5D457');
            break;
        }

    }
});