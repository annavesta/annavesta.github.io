$(document).ready(function () {
    var tab = $('.tab');
    tab.click(function(){
    	console.log('клик по табу');
    	var target = $(this).attr('data-target');
    	console.log('эта вкладка ведет к содержимому'+ target);
    	$('.tab-content').hide();
    	$('.'+target).show();
    });
    var work = $('.work');
    work.click(function(){
    	console.log('клик по табу');
    	var target = $(this).attr('data-target');
    	console.log('эта вкладка ведет к содержимому'+ target);
    	$('.work-content').hide();
    	$('.'+target).show();
    });
});
