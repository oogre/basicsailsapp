$(document).ready(function(){
	$("#signup-form").validate({
		onKeyup : true,
		eachValidField : function() {

			$(this).closest('div').removeClass('error').addClass('success');
		},
		eachInvalidField : function() {

			$(this).closest('div').removeClass('success').addClass('error');
		},
		conditional : {
			confirmation : function() {
				return $(this).val() == $('#password').val();
			}
		}
	});
});