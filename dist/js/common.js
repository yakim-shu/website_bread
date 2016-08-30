$(function() {
    $('.gallery_1').vegas({
        slides: [
            { src: 'images/pic_pc_1.png' },
            { src: 'images/pic_a_2.jpg' },
            { src: 'images/pic_a_3.jpg' }
        ],

        align: "center",
        valign: "center",
        cover: "true",
        preload: "true",
        overlay: '../lib/jquery.vegas/overlays/05.png'

    });
});