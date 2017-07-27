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

	/* JQUERY CHAININ */

	$('.notification-bar').delay(1000).slideDown().delay(1000).fadeOut();

	/* JQUERY HIDE/SHOW */

	// $('h1').hide();
	// $('div.hidden').show();

	$('div.hidden').fadeIn(5000);

	$('#box1').click(function() {

		$(this).fadeTo(2000, 0.25, function() {

			$(this).slideUp();

		});

	});

	$('div.hidden').slideDown();

	$('button').click(function() {
		$('#box1').slideToggle();
	});

	/* JQUERY ANIMATE */

	$('#left').click(function() {

		$('.box').animate({

			left: "-=40px",
			fontSize: "+=2px"

		}, function() {

		});

	});

	$('#up').click(function() {

		$('.box').animate({

			top: "-=40px",
			opacity: "+=0.1"

		}, function() {

		});

	});	

	$('#right').click(function() {

		$('.box').animate({

			left: "+=40px",
			fontSize: "-=2px"

		}, function() {

		});

	});

	$('#down').click(function() {

		$('.box').animate({

			top: "+=40px",
			opacity: "+=0.1"

		}, function() {

		});

	});

	/*----------------
	JQUERY CSS
	----------------*/

	$('#circle2').css({
		'background-color': '#852',		
		'color':'white',
		'height' : '140px',
		'width' : '140px',
		'display': 'inline-block',
		'line-height':'140px'
	}).addClass('circleShape');


	/*----------------
	JQUERY CAR RACE
	----------------*/
	$('#reset').click(function() {
		
	});

	$('#go').click(function() {

		//set a flag variable to FALSE by default
		var isComplete = false;

		//set a flag variable to FIRST by default
		var place = 'first';

		// build a function that checks to see if a car has won the race
		function checkIfComplete() {

			if ( isComplete == false ) {
				isComplete == true;
			}else {
				place = 'second';
			}

		}

		//get the width of the cars
		var carWidth = $('#car1').width();

		//get the width of the racetrack
		var raceTrackWidth = $(window).width() - carWidth;

		//generate a random # between 1 and 5000
		var raceTime1 = Math.floor( (Math.random() * 5000) + 1 );
		var raceTime2 = Math.floor( (Math.random() * 5000) + 1 );

		// animate car 1
		$('#car1').animate({

			// move the car width of the racetrack
			left: raceTrackWidth

		}, raceTime1, function() {

			// animation is complete 

			// run a function
			checkIfComplete();

			$('#raceInfo1 span').text('Finished in '+ place + ' place and clocked in at '+ raceTime1 + ' milliseconds!');

		});

		// animate car 2
		$('#car2').animate({

			// move the car width of the racetrack
			left: raceTrackWidth

		}, raceTime2, function() {

			// animation is complete 

			// run a function
			checkIfComplete();

			$('#raceInfo2 span').text('Finished in '+ place + ' place and clocked in at '+ raceTime2 + ' milliseconds!');

		});
	});

});