$(document).ready(function(){

	// ==============================================================*/
	// Remove loading class to "note" document is ready
	// ==============================================================*/

	$('body').removeClass('loading');

	// ==============================================================*/
	// Override the login link and refer to a login modal
	// ==============================================================*/
	var $loginButton = $('#login-primary');
	$loginButton.attr("href", "#");

	$loginButton.on('click', function(e){
		e.preventDefault();
		$('#login-modal').modal()
	});

})
//# sourceMappingURL=maps/scripts.js.map
