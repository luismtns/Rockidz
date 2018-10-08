    var divPlaceImg = '<div class="coluna"><img src="" alt="" ></div>',
    slice1DIV = divPlaceImg.slice(0,30),
    slice2DIV = divPlaceImg.slice(30,46),
    memes = 'img/PIADOCAS/meme';


    function PlaceImages(x) {
        var text = '';
        for(cont = 1; cont<= x;cont++){
            text += slice1DIV;
            text += memes + cont + '.png';
            text += slice2DIV;
        };
        
        $('.piadas').html(text);
        console.log(text);
    };

$(document).ready(function(){
    
PlaceImages(17);


$('.piadas .coluna img').click(function(){
    var htmlsrc = $(this).attr('src'),
    // html = '<a path="img/GALERIA/" download="' + htmlsrc[2];
    html = $(this).closest('.coluna').html();

    console.log(html);
    
    $("#modal").css("display", "block");
    
    $("#modal-content").html(html);
    $("#close").attr('href', htmlsrc);

});

$("#modal").click(function(){
    
    $("#modal").css("display", "none");
})

$("#close").click(function (e) {
    e.stopPropagation();
})


});