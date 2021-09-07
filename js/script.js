$(document).ready(function(){
    $('.services_carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    $('.instructors-carousel').owlCarousel({
        center:true,
        nav:true,
        responsive:{
            0:{
                items:1,
                loop:false,
            },
            1000:{
                items:3,
                loop:true,
                margin:82,
                autoWidth: true,
            }
        }
    });
    $('.reviews_carousel').owlCarousel({
        loop:true,
        nav:true,
        items:1,
    });
});