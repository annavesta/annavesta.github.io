$(document).ready(function () {
	var tab = $(".tab");
	tab.click(function(){
		
		var target = $(this).attr("href");
		console.log('эта ссылка ведет на' + target);
		$('.content').hide();
		$(target).show();
	});
});
