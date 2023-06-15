$(document).ready(function(){
    $(window).on('scroll',function(){
        let scroll = $(window).scrollTop();
        if(scroll >= 50){
            $(".sticky").addClass("stickyadd")
        } else {
            $(".sticky").removeClass("stickyadd")
        }
    })

    let typed = new Typed(".element", {
        strings : ["Awsam Barahmeh","a Developer","a Designer","a Businessman"],
        smartBackspace : true,
        backSpeed : 100,
        typeSpeed: 100,
        loop : true,
        loopCount : Infinity,
        startDelay : 1000
    });
});