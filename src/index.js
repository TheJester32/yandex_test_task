import './index.html';
import './index.scss';
import { animOnScroll } from './modules/animation';
import { slider } from './modules/slider'

document.addEventListener('DOMContentLoaded', function() {
document.querySelector('.header__picture').classList.add('_anim-items');
document.querySelector('.header__pictureText').classList.add('_anim-items');
setTimeout(() => {
    animOnScroll();
}, 300);
});

slider();