$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:6,
    margin:20,
    autowidth:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        350:{
            items:1,
        },
        400:{
            items:2,
        },
        600:{
            items:3,
        },
        1140:{
            items:5,
            loop:false
        }
    }
});
// Go to the next item
$('.patents__slider__btn').click(function() {
    owl.trigger('next.owl.carousel');
})
