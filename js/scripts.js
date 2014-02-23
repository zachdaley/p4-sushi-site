// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

	$.backstretch("img/sushi_bg.jpg");

	$("[id*='Btn']").stop(true).on('click',function(e){e.preventDefault();$(this).scrolld();});

}); 
