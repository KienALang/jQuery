//script.js

$(function() {

	$('h1').css("color", "#795548");

	$('button').click(function() {
		$('#box').fadeOut(2000);
	});

	// $('h1, h2, h3, h4').css('border','solid 1px red');

	// $('p.lead').css('color', 'gray');

	// $('li:first, p:even').css('border','solid 1px red');

	// $('div em').css('border','solid 1px red');

	// $('div > p').css('border','solid 1px red');

	// $(':header').css('border', 'solid 1px red');

	// $('div:contains("Kenny")').css('border', 'solid 1px red');

	/*----------------
	JQUERY EVENT METHOD
	----------------*/
	$('#box').click(function() {

		$('#box').css('background-color', 'green');

	});

	$("input").blur(function() {

		if ( $(this).val() == "" ) {
			$(this).css('border', 'solid 1px red');
			$('#box').text('Forgot to add text');
		}		

	});

	$("input").keydown(function() {

		if ( $(this).val() !== "" ) {

			$('#box').text( $(this).val() );
			
		}

	});

});