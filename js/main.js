(function($) {

  "use strict";

  $(window).on('load', function() {


  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('nav').addClass('nav-on-scroll');
        } else {
            $('nav').removeClass('nav-on-scroll');
        }
    });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();

     /* Testimonials Carousel
    ========================================================*/
    var owl = $("#testimonials");
      owl.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        center: true,
        margin: 15,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive : {
            0 : {
                items: 1
            },
            768 : {
                items: 1
            },
            960 : {
                items: 1
            },
            1200 : {
                items: 1
            },
            1920 : {
                items: 1
            }
        }
      });

     /*  Slick Slider
    ========================================================*/
    $('.slider-center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });


    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

      /* Map Form Toggle
      ========================================================*/
      $('.map-icon').on('click',function (e) {
          $('#conatiner-map').toggleClass('panel-show');
          e.preventDefault();
      });

      /* Tutorial Videos
      ========================================================*/

      var thumbnailsArr = [
        "https://mdbootstrap.com/img/screens/yt/screen-video-3.jpg",
        "https://mdbootstrap.com/img/screens/yt/screen-video-3.jpg",
        "https://mdbootstrap.com/img/screens/yt/screen-video-3.jpg",
        "https://mdbootstrap.com/img/screens/yt/screen-video-3.jpg",
        "https://mdbootstrap.com/img/screens/yt/screen-video-3.jpg"
      ];


      var videoArr = [
        "https://www.youtube.com/embed/vlDzYIIOYmM",
        "https://www.youtube.com/embed/vlDzYIIOYmM",
        "https://www.youtube.com/embed/vlDzYIIOYmM",
        "https://www.youtube.com/embed/vlDzYIIOYmM",
        "https://www.youtube.com/embed/vlDzYIIOYmM"
      ];

      var videoBlock = document.getElementsByClassName('videoContainer');

      for (var i = 0; i < 5; i++) {
      const videoContent = `
        <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">

            <div class="modal-content">

              <div class="modal-body mb-0 p-0">

                <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                  <iframe class="embed-responsive-item" src="${videoArr[i]}"
                    allowfullscreen></iframe>
                </div>

              </div>

            </div>

          </div>
        </div>

        <a><img class="img-fluid z-depth-1" src="${thumbnailsArr[i]}" alt="video"
            data-toggle="modal" data-target="#modal1"></a>
      `

      videoBlock[i].insertAdjacentHTML('beforeend', videoContent);
    }





      $('#modal1').on('hidden.bs.modal', function (e) {
        // do something...
        $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
      });

      $('#modal6').on('hidden.bs.modal', function (e) {
        // do something...
        $('#modal6 iframe').attr("src", $("#modal6 iframe").attr("src"));
      });

      $('#modal4').on('hidden.bs.modal', function (e) {
        // do something...
        $('#modal4 iframe').attr("src", $("#modal4 iframe").attr("src"));
      });


  });

}(jQuery));
