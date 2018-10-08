$(function(){ 
    // site preloader -- also uncomment the div in the header and the css style for #preloader
    $( window ).on("load", function() {
        setTimeout(function () {
            $('#preloader').fadeOut('easy',function(){
                $(this).remove();
            });
        }, 100)
    });
});

    
    setTimeout(function () {
        if($('#preloader').is(':visible')){
            $('#preloader').fadeOut('easy',function(){
                $(this).remove();
            }); 
           }
    }, 2200);

$(document).ready(function() {


    $('#cortina').css("opacity", "1");
    $('#cortina').css("display", "block");

    function carregarCortina() {
        var larguraJanela = $(window).width(),
        larguraIMG = $('#cortinaDireita').width(),
        sairTela = larguraJanela + larguraIMG;
        console.log(sairTela);
    
         $('#cortinaDireita').animate({right: '-' + sairTela}, 2000);
         $('#cortinaEsquerda').animate({left: '-' + sairTela}, 2000);

         setTimeout(function () {
            $('#cortina2Direita').animate({right: '-700px'}, 1500);
            $('#cortina2Esquerda').animate({left: '-700px'}, 1500);
         }, 500);

         setTimeout(function () {
            $('#cortina').animate({opacity: "0"}, 500);
            $('#cortina').css("display", "none");
         }, 1500); 
    }

    $('html,body').on('load',function() {
        carregarCortina();
    });

    
    window.setTimeout(function() {
        carregarCortina();
    }, 1100);

  
});



