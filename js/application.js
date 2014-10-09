$('.logo--nav').on('click', '.site_logo',function(evt){
    evt.preventDefault();
    navToggle();
});

$('.logo--nav').on('click', '.site_logo',function(evt){
    evt.preventDefault();
    navToggle();
});

function navToggle(){
    $('body').toggleClass('nav--active');
}

$(".site--content").click(function(e){
    $('body').removeClass("nav--active");
});

$(".home .site_logo").click(function(e){
    $('body').toggleClass("nav--closed");
});


// $('.logo--nav').on('click', '.nav--closed .site_logo a',function(evt){
//     evt.preventDefault();
//     navToggle();
// });

// function navDisplay(){
//     $('.nav--state').removeClass('nav--closed');
//     $('.nav--state').addClass('nav--active');
// }

// function navHide(){
//     $('.nav--state').removeClass('nav--active');
//     $('.nav--state').addClass('nav--closed');
// }

  var isPinned = false;
  var navPulledY = false;
  var xOffset = $(".site--content").position().left;

$(".site_logo").click(function(e){
    // if (isPinned) {
    //     return;
    // }
    $('body').toggleClass("nav--active");
    e.preventDefault();
    console.log('click');
    navPulledY = $(window).scrollTop();
    if(navPulledY < 1) navPulledY = 1;

    console.log('offset' + xOffset );
})

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".site_logo");

    // var sidebar = $(".sidebar");
    // var section_list = $(".section_list");


    var pinLevel = 410;

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (navPulledY >= 1) {
            var scrollDelta = Math.abs(navPulledY - scroll);
            console.log("Delta: " + scrollDelta);
            if (scrollDelta > 300){
                navPulledY = false;
                $('body').removeClass("nav--active");
            }
        }

        if (scroll >= pinLevel && !isPinned  ) {
            header.addClass("pin");
            isPinned = true;
        } else if(scroll < pinLevel && isPinned){
            header.removeClass("pin");
            isPinned = false;
        }

        // if (scroll >= 600) {
        //     section_list.addClass("pin");
        // } else {
        //     section_list.removeClass("pin");
        // }
    });
});
