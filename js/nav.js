



$(document).ready(function(){
        
   const header = `
   
   <!-- JS Loader Content -->
   <meta property="og:url"           content="" />
   <meta property="og:type"          content="Website" />
   <meta property="og:title"         content="Rockdiz" />
   <meta property="og:description"   content="Rockdiz venha descobrir o rock com a gente!" />
   <meta property="og:image"         content="" />
   <!-- Favicon -->
   <link rel="apple-touch-icon-precomposed" sizes="57x57" href="css/fav/apple-touch-icon-57x57.png" />
   <link rel="apple-touch-icon-precomposed" sizes="114x114" href="css/fav/apple-touch-icon-114x114.png" />
   <link rel="apple-touch-icon-precomposed" sizes="72x72" href="css/fav/apple-touch-icon-72x72.png" />
   <link rel="apple-touch-icon-precomposed" sizes="144x144" href="css/fav/apple-touch-icon-144x144.png" />
   <link rel="apple-touch-icon-precomposed" sizes="60x60" href="css/fav/apple-touch-icon-60x60.png" />
   <link rel="apple-touch-icon-precomposed" sizes="120x120" href="css/fav/apple-touch-icon-120x120.png" />
   <link rel="apple-touch-icon-precomposed" sizes="76x76" href="css/fav/apple-touch-icon-76x76.png" />
   <link rel="apple-touch-icon-precomposed" sizes="152x152" href="css/fav/apple-touch-icon-152x152.png" />
   <link rel="icon" type="image/png" href="css/fav/favicon-196x196.png" sizes="196x196" />
   <link rel="icon" type="image/png" href="css/fav/favicon-96x96.png" sizes="96x96" />
   <link rel="icon" type="image/png" href="css/fav/favicon-32x32.png" sizes="32x32" />
   <link rel="icon" type="image/png" href="css/fav/favicon-16x16.png" sizes="16x16" />
   <link rel="icon" type="image/png" href="css/fav/favicon-128.png" sizes="128x128" />
   <meta name="application-name" content="&nbsp;"/>
   <meta name="msapplication-TileColor" content="#FFFFFF" />
   <meta name="msapplication-TileImage" content="css/fav/mstile-144x144.png" />
   <meta name="msapplication-square70x70logo" content="css/fav/mstile-70x70.png" />
   <meta name="msapplication-square150x150logo" content="css/fav/mstile-150x150.png" />
   <meta name="msapplication-wide310x150logo" content="css/fav/mstile-310x150.png" />
   <meta name="msapplication-square310x310logo" content="css/fav/mstile-310x310.png" />
   `

const txt1 = `<div class="row">
<div class="col-6">
    <ul>
        <li><img src="img/raio_l.png" alt=""></li>
        <li><a href="index.html">HOME</a></li>
        <li><a href="rock.html">ROCK</a></li>
        <li><a href="jogo.html">JOGO</a></li>
    </ul>
</div>       

<div class="logo">
<img src="img/logo.png" alt="Logo">
</div>

<div class="col-6">
     <ul>
        <li><a href="piadocas.html">PIADAS</a></li>
        <li><a href="galeria.html">GALERIA</a></li>
        <li><a href="nos.html">NÓS</a></li>
        <li><img src="img/raio_r.png" alt=""></li>
    </ul>
</div>`;


const txt2 = `
<div class="container-large">
<div class="row">
<div class="col-2">
    <img src="img/logo.png" alt="">
</div>
<div class="col-4 hidden-xs">
</div>
<div class="col-2 col-sm-4">
<a href="https://www.youtube.com/channel/UCC9RcGqBuI771qZ4bQ3c3jw" target="_blank"><i class="fab fa-youtube"></i></a>
</div>
<div class="col-2 col-sm-4">
<a href="https://www.facebook.com/RockidzOficial" target="_blank"><i class="fab fa-facebook"></i></i></a>
</div>
<div class="col-2 col-sm-4">
<a href="https://open.spotify.com/user/2pf2xe7sw93xqubxugg33d0my/playlist/62Cz8nV6CESSBSI3wERuZR" target="_blank"><i class="fab fa-spotify"></i></a>
</div>

</div>
</div>
<div class="row direitos">
    <div class="col-12">
        <p>Todos os direitos reservados</p>
    </div>
</div>
`;

const txt3 = `<div class="cortina-bg">
                    <div class="coluna" >
                        <img src="img/cortina_e.png" id="cortinaEsquerda" alt="cortina Esquerda">
                    </div>
                    <div class="coluna">
                        <img src="img/cortina_d.png" id="cortinaDireita" alt="cortina Direita">
                    </div>
                </div>
                <div class="amarras">
                    <div class="coluna">
                        <img src="img/cortina2_e.png" id="cortina2Esquerda" alt="">
                    </div>
                    <div class="coluna">
                        <img src="img/cortina2_d.png" id="cortina2Direita" alt="">
                    </div>
                </div>`;

const txt4 = `<div class="row">
<div class="col-1 col-sm-1"></div>
<div class="col-2 col-sm-4 logo-sm">
    <img src="img/logo.png" alt="Logo">
</div>
<div class="col-6 col-sm-3"></div>
<div class="col-2 col-sm-3 dropdown-content">
    <button class="dropdownBtn"><i class="fas fa-bars"></i></button>
    <div id="navDropdown" class="navDropdown">
        <a href="index.html">HOME</a>
        <a href="rock.html">ROCK</a>
        <a href="jogo.html">JOGO</a>
        <a href="piadocas.html">PIADAS</a>
        <a href="galeria.html">GALERIA</a>
        <a href="nos.html">NÓS</a>
    </div>
</div>
</div>`;

const txt5 = `
<img src="img/thunder.gif" alt="">
`

$(".nav").html(txt1);
$(".footer").html(txt2);
$("#cortina").html(txt3);
$(".nav-sm").html(txt4);
$('head').append(header);
$("#preloader").html(txt5)

var logo = $(".logo");

logo.click(function () {
    
    $(location).attr('href','index.html');
})

var logosm = $(".logo-sm");

logosm.click(function () {
    
    $(location).attr('href','index.html');
})

var ddbtn = $(".dropdownBtn"),
ddcontent = $("#navDropdown");

ddbtn.click(function () {
    if(ddcontent.attr("display", "none")){
        ddcontent.css("display", "block");
    }else{
        ddcontent.css("display", "none");
    }
})

/* Anything that gets to the document
   will hide the dropdown */
   $(document).click(function(){
    ddcontent.css("display", "none");
  });
  
  /* Clicks within the dropdown won't make
     it past the dropdown itself */
  $(".dropdownBtn").click(function(e){
    e.stopPropagation();
  });
  $("#navDropdown").click(function(e){
    e.stopPropagation();
  });   

});