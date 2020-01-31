// slick-slider
$('.about-slider').slick({
    draggable: true,
    fade: true,
    speed: 500,
    infinite: false,
    cssEase: 'ease-in-out',
    touchThreshold: 100
})
// scroll animation 
 AOS.init({
 	disable: 'phone',
 });



// $('#exampleModal').arcticmodal();

$(function(){
	$('.phone-popup').on('click',function() {
	    $('#exampleModal').arcticmodal();
	});
});


// $(function() {
	
// 	$(".scroll-panel").css({
// 		"height":$(window).height()
// 	});

// 	$.scrollify({
// 		section:".scroll-panel",
// 	    scrollSpeed: 1100,
// 	    offset : 0, // расстояние в пикселях для комппенсации положения каждого раздела.
// 	    scrollbars: false //Будет ли видна полоса прокрутки
// 	});
// });



// PARALLAX
 // const parallax = document.getElementById ("parallax");
 // window.addEventListener("scroll", function () {
 // 	let offset = window.pageYOffset;
 // 	// console.log ( 'Offset:' + offset);
 // 	// console.log ( 'Offset * 0.7' + offset);
 // 	parallax.style.backgroundPositionY = offset * 0.7 + "px";
 // })