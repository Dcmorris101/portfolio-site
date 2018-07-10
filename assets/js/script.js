
// Scripts for possible future use //

// Makes navigation bar scroll with percentage of page scrolled
/*
$(window).scroll(function() {
	var startDistance = 0;

  var scrollTop = $(document).scrollTop();

  var logo = document.querySelector('.logo');
  var logoHeight = ($(logo).outerHeight());

  var scrollAmount = $(window).scrollTop();
  var documentHeight = $(document).height();

  // calculate the percentage the user has scrolled down the page
  var scrollPercent = 100 * scrollAmount / (documentHeight - $(window).height());

  var barHeight = $(window).height() - (logoHeight + 30);
  $('.nav-no-logo').css('height', barHeight + "px");

  if (scrollTop > 50) {
      $('.percent-scroll').css('height', scrollPercent +"%" );
  } else {
      $('.percent-scroll').css('height', startDistance);
  }

});



$(window).on('load', function() {
  var logo = document.querySelector('.logo');
  var logoHeight = ($(logo).outerHeight());
  var barHeight = $(window).height() - (logoHeight);
  var documentHeight = $(document).height();

  $('.nav-no-logo').css('height', barHeight + "px");


  var aboutHeight = $('#about.section').outerHeight();

  var aboutMenuHeight = 100 * (aboutHeight / documentHeight);
  $('.menu-item.about').css('height', aboutMenuHeight + "%");
});

*/



  // Add active class to the current button (highlight it)
  //var header = document.querySelector("nav-no-logo");
  /*
var btns = document.getElementsByClassName("menu-item");
console.log(btns);
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    console.log('test');
  });
}

*/

$(document).ready(function() {
  $('.stonefiregrill-video').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
             $(this).removeClass('active');
         })
         $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.menu-item a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos + 500 && refElement.position().top + refElement.height() > scrollPos + 400) {
            $('.menu-item').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}
