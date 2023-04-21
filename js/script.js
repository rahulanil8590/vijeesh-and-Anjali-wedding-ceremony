
$(document).ready(function(){

	


	
	/* ---- Countdown timer ---- */

	$('#counter').countdown({
		timestamp : (new Date( "may 08,2023")).getTime() + 00*00*00*00*1000
	});


	/* ---- Animations ---- */

	$('#links a').hover(
		function(){ $(this).animate({ left: 6 }, 'fast'); },
		function(){ $(this).animate({ left: 0 }, 'fast'); }
	);

	$('footer a').hover(
		function(){ $(this).animate({ top: 3 }, 'fast'); },
		function(){ $(this).animate({ top: 0 }, 'fast'); }
	);



	
});
