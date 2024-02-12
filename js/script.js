$(function(){

    // *Banner slider* //

    $('.bannerSlider').slick({
        arrows: false,
        dots: true,
        dotsClass:"bannerDots container",
        autoplay: true,
        autoplaySpeed:2000,

    });

    $(".responsiveSlider").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed:2000,


    })

    // *bootstrap tooltip* //

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// *product Slider* //

$(function(){
    $('.productSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:".left",
    nextArrow:".right",
    
})


})



})
        
