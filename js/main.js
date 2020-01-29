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
	jQuery.scrollSpeed(100, 800, 'easeOutCubic');
})
