
$(document).ready(function(){


    var section1Offset = $('#section1').position().top;
    var section2Offset = $('#section2').position().top;
    var section3Offset = $('#section3').position().top;
    var section4Offset = $('#section4').position().top;
    var scrollPos = $(document).scrollTop();



        //this part is for smooth scroll
        $('#nav1,#nav2,#nav3,#nav4').on('click', function(event){
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop:$(hash).offset().top
                },800,function(){
                    window.location.hash = hash;
                });
            }
        });

    $(document).on("scroll",function(){
        //the first part is for the resizing of the navigation bar
      if($(document).scrollTop()>80){
            $("#nav-bar").removeClass("large").addClass("small");
        }
        else{
            $("#nav-bar").removeClass("small").addClass("large");
        }
      //the later part is for the location indicator
      //welcome 0px Collections 803 Inspiration 1480
      // console.log(scrollPos);
      if($(document).scrollTop()<$('#section2').position().top){
            $('#nav1').addClass('nav-active');
            $('#nav2').removeClass('nav-active');
            $('#nav3').removeClass('nav-active');
            $('#nav4').removeClass('nav-active');
      }
      else if($(document).scrollTop() < 1000){
            $('#nav1').removeClass('nav-active');
            $('#nav2').addClass('nav-active');
            $('#nav3').removeClass('nav-active');
            $('#nav4').removeClass('nav-active');
      }
      else if($(document).scrollTop() < $('#section4').position().top){
            $('#nav1').removeClass('nav-active');
            $('#nav2').removeClass('nav-active');
            $('#nav3').addClass('nav-active');
            $('#nav4').removeClass('nav-active');
      }
      else{
            $('#nav1').removeClass('nav-active');
            $('#nav2').removeClass('nav-active');
            $('#nav3').removeClass('nav-active');
            $('#nav4').addClass('nav-active');
      }

    });
      //now this part is for carousel
      var slideIndex = 1;
      $('#rightbtn').click(function(){
        $("#carousel img:nth-child("+slideIndex+")").removeClass('active').addClass('inactive');
        slideIndex = slideIndex+1;
        if (slideIndex==5) {slideIndex=1}
        $("#carousel img:nth-child("+slideIndex+")").removeClass('inactive').addClass('active');
      });

      $('#leftbtn').click(function(){
        $("#carousel img:nth-child("+slideIndex+")").removeClass('active').addClass('inactive');
        slideIndex = slideIndex-1;
        if (slideIndex==0) {slideIndex=4}
        $("#carousel img:nth-child("+slideIndex+")").removeClass('inactive').addClass('active');
      });
      //this is for modal
      $("#section4 img").click(function(){
        $("#myModal").css("display","block");
        $("#modal-content").attr('src',$(this).attr("src"));
      });
      $(".close").click(function(){
        $("#myModal").css("display","none");
      })


})

