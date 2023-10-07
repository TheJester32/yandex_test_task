export function slider () {
    let offSet = 0;
    const PICTURE_PADDING = 16;
    const sliderLine = document.querySelector('.events__slider-line');
    const arrowLeft = document.getElementById('arrowLeft');
    const arrowRight = document.getElementById('arrowRight');
    const picture = document.querySelector('.events__slider-picture');
    const pictures = document.querySelectorAll('.events__slider-picture');
    
    arrowRight.addEventListener('click', () => {
        offSet += picture.width + PICTURE_PADDING;
        if(offSet > picture.width * pictures.length - 1){
            offSet = 0;
        }
        sliderLine.style.left = -offSet + 'px';
    });
    
    arrowLeft.addEventListener('click', () => {
        offSet -= picture.width + PICTURE_PADDING;
        if(offSet < 0){
            offSet = 1077;
        }
        sliderLine.style.left = -offSet + 'px';
    });
}