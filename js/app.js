$(document).ready(function(){
    $(window).on('load', function(){
        $('.preloader').addClass('complete')
    });

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

    //progress bars

    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function() {
            let p = document.querySelectorAll('.progress-bar');
            p[0].setAttribute("style", "width:100%;transition:1s all");
            p[1].setAttribute("style", "width:95%;transition:1.5s all");
            p[2].setAttribute("style", "width:85%;transition:1.7s all");
            p[3].setAttribute("style", "width:99%;transition:2s all");
            p[4].setAttribute("style", "width:85%;transition:2.3s all");
            p[5].setAttribute("style", "width:95%;transition:2.5s all");
        },
        offset:'90%'
      });

      let filterized = $('.filter-container').filterizr({
        animationDuration: 0.5
      })

      // Owl Carousel

      $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1

      });
    
});