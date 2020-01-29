$(document).bind( 'mousewheel', function (e) { 
    var nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
    e.preventDefault(); 
    e.stopPropagation(); 
    $(document.body).stop().animate( { 
         scrollTop : nt 
     } , 500 , 'easeInOutCubic' );  
} )

// slick-slider
$('.about-slider').slick({
    draggable: true,
    fade: true,
    speed: 500,
    infinite: false,
    cssEase: 'ease-in-out',
    touchThreshold: 100
})
