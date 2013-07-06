$('.inloggen').on('click', function(){
	var password = $('.password-field').val(),
		email = $('.email-field').val();

	if((password === 'wachtwoord') && (email === 'gebruiker@home.nl') ) {
		location.href = 'home.html'
	} else {
		alert('De gegevens die u heeft ingevoerd zijn niet bekend bij ons.');
	}
});

$('.password-field').keyup(function(event){
    if(event.keyCode == 13){
        $('.inloggen').click();
    }
});