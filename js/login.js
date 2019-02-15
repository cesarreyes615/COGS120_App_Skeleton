var infoArray = [];

$('#login').submit(function(event) {
	event.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();

    
    var newUser = {"email": email,
					"password":password};
	users.push(newUser);

});


