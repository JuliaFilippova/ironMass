// slick-slider
$('.about-slider').slick({
    draggable: true,
    fade: true,
    speed: 500,
    infinite: false,
    cssEase: 'ease-in-out',
    touchThreshold: 100
})

$(function() {
	
	$(".scroll-panel").css({
		"height":$(window).height()
	});

	$.scrollify({
		section:".scroll-panel",
	    scrollSpeed: 1100,
	    offset : 0, // расстояние в пикселях для комппенсации положения каждого раздела.
	    scrollbars: false //Будет ли видна полоса прокрутки
	});
});