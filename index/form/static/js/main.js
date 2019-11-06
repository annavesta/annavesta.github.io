$(document).ready(function () {
    $('#form').validate({
    	rules: {
    		name: {
    			required: true,
    			minlength:2
    		},
    		email: {
    			required: true,
    			minlength: 3,
    			email:true
    		}
    	},
    	messages: {
    		name: {
    			required: 'это поле обязательно для заполнения',
    			minlength: 'не менее 2 символов'
    		},
    		email: {
    			required: 'это поле обязательно для заполнения',
    			minlength: 'не менее 2 символов',
    			email: 'введите корректный email'
    		}
    	}
    });
});
