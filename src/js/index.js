// Import SCSS
import '../styles/main.scss';

// Photoswipie
var pswpElement = document.querySelectorAll('.pswp')[0];
const blocks = document.querySelectorAll('.gallery img');
const blocksArr = [...blocks];

// Build items array
var items = [
    { src: './img/Eiz-DL-XgAAa7xI.jfif', w: 1500, h: 900 },
    { src: './img/spd.jpg', w: 1500, h: 900 },
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