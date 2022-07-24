$(document).ready(function(){
    // Plugin Custom code 
    //===================================
    // jquery.animatedheadline code
    $('.animated').animatedHeadline({
        animationType: 'clip'
    });
    //Wow.js code
    new WOW().init();
    //Aos.js code
    AOS.init({
        duration:1000
    });
    //counterUp js code
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    //filterizr
    $('.filter-container').filterizr({});
    const simpleFilters = document.querySelectorAll('.simplefilter li');
    Array.from(simpleFilters).forEach((node) =>
      node.addEventListener('click', function() {
        simpleFilters.forEach((filter) => filter.classList.remove('active'));
        node.classList.add('active');
      })
    );
    //owlCarousel
    $('#testmonial-carousel').owlCarousel({
        autoplay:true,
        dots:false,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    //scrollspy js code
    $('body').scrollspy({ target: '#my-nav' });

    // Scroll to top
    $('.totop').tottTop({
        scrollTop:0
    });
    //My Custom Code
    //=====================================
    //Header Section Fixed

    $('input[type="submit"]').click(function(e){
        e.preventDefault();
    });
    $(window).scroll(function(){
        var windowSize = $(this).scrollTop();
        if(windowSize > 41){
            $('.header-section').addClass('header-fixed');
        }else{
            $('.header-section').removeClass('header-fixed');
        }
        //Skill Progessbar Efficts
        if(windowSize>900){
            $('.skill-content ul li .bar .html').css({
                'width':'95%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .html').css({
                'width':'0'
            });
        }
        if(windowSize>962){
            $('.skill-content ul li .bar .css').css({
                'width':'90%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .css').css({
                'width':'0'
            });
        }
        if(windowSize>1024){
            $('.skill-content ul li .bar .bootstrap').css({
                'width':'95%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .bootstrap').css({
                'width':'0'
            });
        }
        if(windowSize>1086){
            $('.skill-content ul li .bar .jquery').css({
                'width':'95%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .jquery').css({
                'width':'0'
            });
        }
        if(windowSize>1148){
            $('.skill-content ul li .bar .Wordpress').css({
                'width':'95%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .Wordpress').css({
                'width':'0'
            });
        }
        if(windowSize>1210){
            $('.skill-content ul li .bar .laravel').css({
                'width':'95%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .laravel').css({
                'width':'0'
            });
        }
        if(windowSize>900){
            $('.skill-content ul li .bar .php').css({
                'width':'85%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .php').css({
                'width':'0'
            });
        }
        if(windowSize>962){
            $('.skill-content ul li .bar .mysql').css({
                'width':'85%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .mysql').css({
                'width':'0'
            });
        }
        if(windowSize>1024){
            $('.skill-content ul li .bar .java').css({
                'width':'70%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .java').css({
                'width':'0'
            });
        }
        if(windowSize>1086){
            $('.skill-content ul li .bar .javascript').css({
                'width':'85%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .javascript').css({
                'width':'0'
            });
        }
        if(windowSize>1148){
            $('.skill-content ul li .bar .photoshop').css({
                'width':'80%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .photoshop').css({
                'width':'0'
            });
        }
        if(windowSize>1210){
            $('.skill-content ul li .bar .illustrator').css({
                'width':'75%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .illustrator').css({
                'width':'0'
            });
        }
    });
});