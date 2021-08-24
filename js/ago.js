$(document).ready(function(){



    $(window).scroll(function(){

        $(window).scroll(function(){

            var sct = $(window).scrollTop();
            // console.log(sct)

            if(sct >= 500) {
                $('header').addClass("on_header");

            }else{
                $('header').removeClass('on_header');
            }

            if(sct >= 3000){
                $('header').addClass("on2_header");
            }
    



        });

        $(window).scroll(function(){

            var sct = $(window).scrollTop();
            var sec_1_top = $(".section_1").offset().top;
            var sec_2_top = $(".section_2").offset().top;
            var sec_3_top = $(".section_3").offset().top;
            var sec_4_top = $(".section_4").offset().top;
            var sec_5_top = $(".section_5").offset().top;
            var sec_6_top = $(".section_6").offset().top;
            var sec_7_top = $(".section_7").offset().top;
            var sec_8_top = $(".section_8").offset().top;


            var useScroll = sct / sec_2_top;

            if (sct >= sec_1_top && sct <sec_2_top) {
                console.log(useScroll);
                $(".text_wrap_2, .border, .text_wrap_2_1").css({
                    opacity:useScroll,
                });
            }else {
                $('.title_wrap_2, .border, .text_wrap_2_1').css({
                    position:"unset",
                });
            };


            var useScroll = sct / sec_5_top;



            if (sct >= sec_5_top * 0.2) {
                console.log(useScroll);
                $(".object_1").css({
                    opacity:useScroll,
                });
            }else {
                $('.object_1').css({
                    position:"unset",
                });
            };

            if (sct >= sec_5_top * 0.5) {
                console.log(useScroll);
                $(".object_2").css({
                    opacity:useScroll,
                });
            }else {
                $('.object_2').css({
                    position:"unset",
                });
            };

            if (sct >= sec_5_top * 0.7) {
                console.log(useScroll);
                $(".object_3").css({
                    opacity:useScroll,
                });
            }else {
                $('.object_3').css({
                    position:"unset",
                });
            };




           
            var sct = $(window).scrollTop();
            console.log(sct);

            if(sct >= sec_5_top * 0.2){
                $('.img_6').css({
                    display:'block',
                    opacity:'1',

                })
                
            }

            if(sct >= sec_5_top * 0.6){
                $('.img_7').css({
                    display:'block',
                    opacity:'1',

                })
                
            }

            if(sct >= sec_5_top * 0.7){
                $('.img_8').css({
                    display:'block',
                    opacity:'1',

                })
                
            }


                    
         







        })









    })






    // $('.img_1 ').mouseenter(function(){
    //     $('.board_1, .board_2, .board_3, .board_4').css({
    //         opacity:1,
    //     })
    // });

    // $('.img_1 ').mouseleave(function(){
    //     $('.board_1, .board_2, .board_3, .board_4').css({
    //         opacity:0, transition:'0.5s'
    //     })
    // });
   

    $('.img_1 ').mouseenter(function(){
        $('.board_1').css({
            opacity:1, height:'16%'
        })
        $('.board_2').css({
            opacity:1, width:'12%'
        })
        $('.board_3').css({
            opacity:1, height:'16%'
        })
        $('.board_4').css({
            opacity:1, width:'12%'
        })
    });

    $('.img_1 ').mouseleave(function(){
        $('.board_1').css({
            opacity:1, height:"0%",transition:'0.6s'
        })
        $('.board_2').css({
            opacity:1, width:"0%", transition:'0.6s'
        })
        $('.board_3').css({
            opacity:1, height:"0%", transition:'0.6s'
        })
        $('.board_4').css({
            opacity:1, width:"0%", transition:'0.6s'
        })
    });

    $('.img_2 ').mouseenter(function(){
        $('.board_11').css({
            opacity:1, height:'14%'
        })
        $('.board_22').css({
            opacity:1, width:'14%'
        })
        $('.board_33').css({
            opacity:1, height:'14%'
        })
        $('.board_44').css({
            opacity:1, width:'14%'
        })
    });

    $('.img_2 ').mouseleave(function(){
        $('.board_11').css({
            opacity:1, height:"0%",transition:'0.6s'
        })
        $('.board_22').css({
            opacity:1, width:"0%", transition:'0.6s'
        })
        $('.board_33').css({
            opacity:1, height:"0%", transition:'0.6s'
        })
        $('.board_44').css({
            opacity:1, width:"0%", transition:'0.6s'
        })
    });

    $('.img_3 ').mouseenter(function(){
        $('.board_111').css({
            opacity:1, height:'14%'
        })
        $('.board_222').css({
            opacity:1, width:'14%'
        })
        $('.board_333').css({
            opacity:1, height:'14%'
        })
        $('.board_444').css({
            opacity:1, width:'14%'
        })
    });

    $('.img_3 ').mouseleave(function(){
        $('.board_111').css({
            opacity:1, height:"0%",transition:'0.6s'
        })
        $('.board_222').css({
            opacity:1, width:"0%", transition:'0.6s'
        })
        $('.board_333').css({
            opacity:1, height:"0%", transition:'0.6s'
        })
        $('.board_444').css({
            opacity:1, width:"0%", transition:'0.6s'
        })
    });

    $('.img_4 ').mouseenter(function(){
        $('.board_1111').css({
            opacity:1, height:'12%'
        })
        $('.board_2222').css({
            opacity:1, width:'14%'
        })
        $('.board_3333').css({
            opacity:1, height:'12%'
        })
        $('.board_4444').css({
            opacity:1, width:'14%'
        })
    });

    $('.img_4 ').mouseleave(function(){
        $('.board_1111').css({
            opacity:1, height:"0%",transition:'0.6s'
        })
        $('.board_2222').css({
            opacity:1, width:"0%", transition:'0.6s'
        })
        $('.board_3333').css({
            opacity:1, height:"0%", transition:'0.6s'
        })
        $('.board_4444').css({
            opacity:1, width:"0%", transition:'0.6s'
        })
    });

 
   



})

$(document).ready(function(){
    //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

    




});

