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
    { src: './img/asdfgh-0320.jpg', w: 450, h: 600 },
    { src: './img/dario-0003.jpg', w: 500, h: 600 },
    { src: './img/EkGEK80WkAAQpXx.jfif', w: 500, h: 600 },
    { src: './img/spcol.jpg', w: 500, h: 600 },
    { src: './img/IMG_20200103_175540_885.jpg', w: 500, h: 600 },
    { src: './img/EjaSRA4XYAYouCV.jfif', w: 500, h: 600 },
    { src: './img/IMG_aq5522.jpg', w: 500, h: 600 }
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

// Favorite functionality
document.querySelector('#heartClick').addEventListener('click', e => {
    e.srcElement.name = 'heart';
});