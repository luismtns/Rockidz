divPlaceImg2 = '<div class="coluna"><img src="" alt="" ></div>'
slice1DIV2 = divPlaceImg2.slice(0,30);
slice2DIV2 = divPlaceImg2.slice(30,46);
wall = 'img/GALERIA/wall';


function PlaceImages(x) {
    var text = '';
    for(cont = 1; cont<= x;cont++){
        text += slice1DIV2;
        text += wall + cont + '.jpg';
        text += slice2DIV2;
    };
    
    $('.galeria').html(text);
    console.log(text);
};

$(document).ready(function(){

PlaceImages(16);



$('.galeria .coluna img').click(function(){
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