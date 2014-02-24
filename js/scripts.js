// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

	$.backstretch("img/sushi_bg.jpg");

	$("[id*='Btn']").stop(true).on('click',function(e){e.preventDefault();$(this).scrolld();});

	new Maplace({
	show_markers: true,
	locations: [{
		lat: 47.659381, 
		lon: -117.4236639,
		zoom: 17
	}]
}).Load(); 
}); 
