$(window).on('load',function(){
    setTimeout(function(){ 
        $('body').addClass("dont-scroll");
    },1);
    
    setTimeout(function(){ 
        $('.mid-box').css('visibility', 'visible');
    },500);

    setTimeout(function(){ 
        $('.layer2').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 'slow');
    },600);

    setTimeout(function(){ 
        $('.layer1').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 'slow');
    },1000);
    
    setTimeout(function(){ 
        $('#w').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 100);
        doBounce($('#w'), 1);
    },1600);

    setTimeout(function(){ 
        $('#e').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 100);
        doBounce($('#e'), 1);
    },1700);

    setTimeout(function(){ 
        $('#l').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 100);
        doBounce($('#l'), 1);
    },1800);

    setTimeout(function(){ 
        $('#c').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 100);
        doBounce($('#c'), 1);
    },1900);
        
    setTimeout(function(){ 
        $('#o').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 100);
        doBounce($('#o'), 1);
    },2000);

    setTimeout(function(){ 
        $('#m').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 100);
        doBounce($('#m'), 1);
    },2100);

    setTimeout(function(){ 
        $('#ee').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 100);
        doBounce($('#ee'), 1);
    },2200);    

    setTimeout(function(){ 
        $('.page-loader').fadeOut('slow');
    },5000);

    setTimeout(function(){ 
        $('body').removeClass("dont-scroll");
    },6000);

    var lastScrollTop = 0;
    var header = $('header');

    $(window).scroll(function(){
    var st = $(this).scrollTop();
        if($(".small-menu-list").css("opacity")=="0"){
            if (st > lastScrollTop){
                header.addClass('hide');
                } else {
                header.removeClass('hide');
            }
            lastScrollTop = st;
        }
        
    });
    
    $(".menu-button").click(function(){
    var windowWidth=$(window).width();
        if(windowWidth<=770){
            $("#list").toggle();
            $("#cross").toggle();
            $("#list, #cross").addClass("rotate")
            $(".mid-container").toggleClass("blur-all");
            $(".small-menu-list").toggleClass("slide");
            $("body").toggleClass("dont-scroll");
        }
    })

    $(window).resize(function(){
    var windowWidth=$(window).width();
        if(windowWidth==770){
            $("#list").css("display","block");
            $("#cross").css("display", "none");
            $(".mid-container").removeClass("blur-all");
            $("body").removeClass("dont-scroll");
            $(".small-menu-list").removeClass("slide");
        }else if(windowWidth>770){
            $("#list").css("display","block");
            $("#cross").css("display", "none");
            $(".mid-container").removeClass("blur-all");
            $("body").removeClass("dont-scroll");
            $(".small-menu-list").removeClass("slide");
        }
    })
    
    
});

function doBounce(element, times) {
    for(var i = 0; i < times; i++) {
        element.animate({'margin-bottom': '40px'}, 500)
            .animate({'margin-bottom': '-20px'}, 550)
            .animate({'margin-bottom': '0px'}, 350);
    }
}