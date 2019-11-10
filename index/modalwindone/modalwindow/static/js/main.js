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
    $('#our-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var recipient = button.data('whatever'); // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this);
        modal.find('.modal-title').text('Вы хотите купить  ' + recipient);
        modal.find('.modal-body input').val(recipient);
        modal.find('.btn-primary').text('Купить ' + recipient);
})     
});
