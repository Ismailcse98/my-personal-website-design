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

    $(window).scroll(function(){
        var windowSize = $(this).scrollTop();
        if(windowSize > 41){
            $('.header-section').addClass('header-fixed');
        }else{
            $('.header-section').removeClass('header-fixed');
        }
        //Skill Progessbar Efficts
        if(windowSize>900){
            $('.skill-content ul li .bar .php').css({
                'width':'90%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .php').css({
                'width':'0'
            });
        }
        if(windowSize>962){
            $('.skill-content ul li .bar .laravel').css({
                'width':'93%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .laravel').css({
                'width':'0'
            });
        }
        if(windowSize>1086){
            $('.skill-content ul li .bar .api').css({
                'width':'95%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .api').css({
                'width':'0'
            });
        }
        if(windowSize>1024){
            $('.skill-content ul li .bar .livewire').css({
                'width':'95%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .livewire').css({
                'width':'0'
            });
        }
        if(windowSize>1024){
            $('.skill-content ul li .bar .vue').css({
                'width':'85%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .vue').css({
                'width':'0'
            });
        }
        if(windowSize>1148){
            $('.skill-content ul li .bar .javascript').css({
                'width':'90%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .javascript').css({
                'width':'0'
            });
        }
        if(windowSize>1210){
            $('.skill-content ul li .bar .react').css({
                'width':'90%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .react').css({
                'width':'0'
            });
        }
        if(windowSize>900){
            $('.skill-content ul li .bar .mysql').css({
                'width':'90%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .mysql').css({
                'width':'0'
            });
        }
        if(windowSize>962){
            $('.skill-content ul li .bar .postgresql').css({
                'width':'80%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .postgresql').css({
                'width':'0'
            });
        }
        if(windowSize>1024){
            $('.skill-content ul li .bar .node').css({
                'width':'70%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .node').css({
                'width':'0'
            });
        }
        if(windowSize>1086){
            $('.skill-content ul li .bar .mongo').css({
                'width':'70%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .mongo').css({
                'width':'0'
            });
        }
        if(windowSize>1148){
            $('.skill-content ul li .bar .devops').css({
                'width':'45%',
                'transition':'2s'
            });
        }else{
            $('.skill-content ul li .bar .devops').css({
                'width':'0'
            });
        }
    });
});


$(document).ready(function(){

    $("#contactForm").submit(function(e){
        e.preventDefault();

        var name = $("#name").val();
        var phone = $("#phone").val();
        var email = $("#email").val();
        var message = $("#message").val();

        // Validation
        if(name == "" || phone == "" || email == "" || message == ""){
            $("#response").html("<span style='color:red'>All fields are required</span>");
            return false;
        }

        if(!/^\S+@\S+\.\S+$/.test(email)){
            $("#response").html("<span style='color:red'>Invalid email address</span>");
            return false;
        }

        $.ajax({
            url: "insert.php",
            type: "POST",
            data:{
                name:name,
                phone:phone,
                email:email,
                message:message
            },
            success:function(data){
                $("#response").html(data);
                $("#contactForm")[0].reset();
            }
        });

    });

});