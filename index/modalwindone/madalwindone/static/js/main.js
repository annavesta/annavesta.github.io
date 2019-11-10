$(document).ready(function () {
    var link = $('.modal-link');
    var popup = $('.popup');
    var close = $('.popup-close');
    var overlay = $('.popup-overlay');

    link.click(function(){
    	overlay.fadeIn();
    	popup.fadeIn();
    });
    close.click(function(){
    	overlay.fadeOut();
    	popup.fadeOut();
    });
     overlay.click(function(){
    	overlay.fadeOut();
    	popup.fadeOut();
    });
});
