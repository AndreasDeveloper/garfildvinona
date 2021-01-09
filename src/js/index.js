// Import SCSS
import '../styles/main.scss';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

// Photoswipie
var pswpElement = document.querySelectorAll('.pswp')[0];
const blocks = document.querySelectorAll('.gallery img');
const blocksArr = [...blocks];

// Build items array
var items = [
    { src: './img/Eiz-DL-XgAAa7xI.jfif', w: 600, h: 500 },
    { src: './img/spd.jpg', w: 600, h: 500 },
    { src: './img/asdfgh-0320.jpg', w: 600, h: 600 },
    { src: './img/dario-0003.jpg', w: 600, h: 600 },
    { src: './img/EkGEK80WkAAQpXx.jfif', w: 600, h: 600 }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

blocksArr.map((el, i) => {
    el.addEventListener('click', () => {
        options.index = i;
        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    });
});