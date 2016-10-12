var emailIsValid = false;

var phoneIsValid = false;

$(document).ready(function(){
	
	//Check the email for generic formatting
	$("input[type=email]").keyup(function(){
		var input = $(this);
		var emailText = $(this).val();
		if(!validateElonEmail(emailText)){
			$(input).css('outline','1px solid red');
			emailIsValid = true;
		}else{
			$(input).css('outline','1px solid green');
		}
	});
	
	// Format the phone number
	$("input[type=tel]").keyup(function(){
		var input = $(this);
		var phoneValue = $(this).val();
		input.val(formatPhoneNumber(input, phoneValue));
	});
});

/*
	This function will check to see if the email is valid. 
	We are looking for two things, an @
*/
function validateGenericEmail(text){
	var isValid = false;
	if(text.length>0){
		if(text.indexOf("@") > 0){
			isValid = true;	
		}
	}
	return isValid;
}

/*
	This function will validate elon.edu email addresses. 
	Like the function above it is fairly simple, but will look specifically for the @elon.edu domain
*/
function validateElonEmail(text){
	var isValid = false;
	if(text.indexOf("@elon.edu")>0){
		isValid = true;
	}
	return isValid;
}

/*
	This function will format the phone number as such XXX.XXX.XXXX
	It will also only allow a total of 10 characters to be entered by the user
*/

function formatPhoneNumber(input, phoneText){
	// Regex to only allow numbers 0-9 to be input
	var formattedInput = input.val().replace(/[^\d\.]/g,'');
	// Sets the max length of the input to 12 characters
	input.attr('maxLength','12');
	if(phoneText.length === 3){
		formattedInput = phoneText.replace(/(\d\d\d)/,"$1.");
	}else if(phoneText.length === 7){
		formattedInput = phoneText.replace(/(\d\d\d\.)(\d\d\d)/,"$1$2.");
	}
	return formattedInput
}

