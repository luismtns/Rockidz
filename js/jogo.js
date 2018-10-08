var music = document.getElementById("song"),
    play = document.getElementById("play"),
    // pause = document.getElementById("pause"),
    replay = document.getElementById("replay"),
    time = document.getElementById("time"),
    timealert = document.getElementById("timealert"),
    image1 = document.getElementById("image1"),
    image2 = document.getElementById("image2"),
    image3 = document.getElementById("image3"),
    image4 = document.getElementById("image4"),
    alert1 = document.getElementById("alert1"),
    slider = document.getElementById("slider"),
    volume = document.getElementById("volume"),
    sw = document.getElementById("stopwatch"),
    pontoRodada = 0,
    pontosTotal = 0,
    jogoErros = 0,
    rodada = 1,
    respostacerta = '',
    imagemClicada = '',
    musicaAtual = '',
    respondido = false,
    fbPlayer = document.getElementById("feedbackPlayer");

//Jquery
banda1 = $("#banda1"),
    banda2 = $("#banda2"),
    banda3 = $("#banda3"),
    banda4 = $("#banda4"),
    divPontos = $("#pontos");


// console.log(slice1Musica);
// console.log(slice2Musica);



play.addEventListener('click', function (e) {
    // console.log(music.onplaying);
    if (respondido == true) {
        return false;
    } else {
        music.play()
    }

    if (music.duration > 0 && !music.paused) {
        play.classList.add("btn-disable");
        image1.classList.remove("hidden");
        image2.classList.remove("hidden");
        image3.classList.remove("hidden");
        image4.classList.remove("hidden");
        banda1.removeClass("hidden");
        banda2.removeClass("hidden");
        banda3.removeClass("hidden");
        banda4.removeClass("hidden");

    } else {
        play.classList.remove("btn-disable");
        music.play();

    }

});

music.addEventListener('ended', function () {
    // pause.classList.add("hidden");
    play.classList.remove("btn-disable");
    sw.innerHTML = '<h3 id="stopwatch">:00</h3>';
    // image1.classList.add("hidden");
    // image2.classList.add("hidden");
    // image3.classList.add("hidden");
    // image4.classList.add("hidden");
    // banda1.addClass("hidden");
    // banda2.addClass("hidden");
    // banda3.addClass("hidden");
    // banda4.addClass("hidden");

    certoErrado(1,5); //Acabou Perdeu, a regra é clara
    sw.innerHTML = ":00";

});

music.addEventListener('timeupdate', function (e) {
    var timenow = document.getElementById("song").currentTime;
    var minutes = Math.floor(timenow / 60);
    var seconds = Math.round(timenow - minutes * 60);
    var duracao = Math.round(music.duration);
    var alarm = seconds + 5;
    var sobra = Math.abs(seconds - duracao);
    var seconds2 = duracao - seconds;
    var alarm2 = Math.round(seconds2 - 5);
    // console.log(seconds2);
    // console.log(alarm2);
   
    if (music.duration > 0 && !music.paused) {
        if (seconds2 > 9) {

            sw.innerHTML = ":" + seconds2;


        } else {
            
            if(seconds2 >= 1){
                if (alarm2 <=  5) {
                    sw.innerHTML = '<span style="color:#ffd34d">:' + seconds2 + '</span>';
                }else{
                sw.innerHTML = ":0" + seconds2;
                }
            }else{sw.innerHTML = ":00"}
            
        }
    }else{
    }

});

//   replay.addEventListener('click', function(e) {
//     console.log("replay");
//     if(music.currentTime > 100){
//         music.currentTime = 0;
//         music.play();
//     }else{
//         alert1.classList.remove("hidden");
//         setTimeout(function () {alert1.classList.add("hidden");}, 2000);

//     }



//   });

  function StopfbPlayer(){

    console.log("stop");
    fbPlayer.pause();
    fbPlayer.currentTime = 0;

  };



//   slider.addEventListener('click', function(e) {
//     var value = slider.value;
//     console.log(slider);
//     music.volume = (value / 100);
//     if(value > 30){
//         volume.innerHTML = '<i class="fas fa-volume-up"></i>';
//     }else if(value >= 1){
//         volume.innerHTML = '<i class="fas fa-volume-down"></i>';
//     }else{
//         volume.innerHTML = '<i class="fas fa-volume-off"></i>';
//     }

//   });

$('#slider').on('change', function () {
    var valor = this.value;
    value = slider.value;
    $('#song').prop("volume", (valor / 100));
    if (value > 50) {
        volume.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else if (value >= 1) {
        volume.innerHTML = '<i class="fas fa-volume-down"></i>';
    } else {
        volume.innerHTML = '<i class="fas fa-volume-off"></i>';
    }
});

$('#volume').on('click', function (e) {
    $('#sliderctrl').toggle();
})

$('body').click(function () {
    $('#sliderctrl').hide();

    $('#sliderctrl').click(function (e) {
        e.stopPropagation();
    });

    $('#volume').click(function (e) {
        e.stopPropagation();
    });
});

//Configurações Jogo 
//Configurações Jogo 
//Configurações Jogo 

function trocarMusica(n) {

    music.src = n;
}

var rodadaVal = $("#rodada");

function escolherJogo(n) {
    respondido = false;
    // var n = rodada;
    console.log('Escolhendo jogo, rodada numer: ' + n);
    if (n == 1) {
        console.log('\nrodada 1');
        jogoRodada1();
        rodadaVal.html(rodada);
    } else if (n == 2) {

        console.log('\nrodada 2');
        jogoRodada2();
        rodadaVal.html(rodada);
    } else if (n == 3) {

        console.log('\nrodada 3');
        jogoRodada3();
        rodadaVal.html(rodada);
    } else if (n == 4) {

        console.log('\nrodada 4');
        jogoRodada4();
        rodadaVal.html(rodada);
    } else if (n == 5) {

        console.log('\nrodada 5');
        jogoRodada5();
        rodadaVal.html(rodada);
    } else if (n == 6) {

        console.log('\nrodada 6');
        jogoRodada6();
        rodadaVal.html(rodada);
    } else if (n == 7) {

        console.log('\nrodada 7');
        jogoRodada7();
        rodadaVal.html(rodada);
    } else if (n == 8) {

        console.log('\nrodada 8');
        jogoRodada8();
        rodadaVal.html(rodada);
    } else if (n == 9) {

        console.log('\nrodada 9');
        jogoRodada9();
        rodadaVal.html(rodada);
    } else if (n == 10) {

        console.log('\nrodada 10');
        jogoRodada10();
        rodadaVal.html(rodada);
    } else if (n == 11) {

        console.log('\nrodada 11');
        jogoRodada11();
        rodadaVal.html(rodada);
    } else if (n == 12) {

        console.log('\nrodada 12');
        jogoRodada12();
        rodadaVal.html(rodada);
    } else if (n == 13) {

        console.log('\nrodada 13');
        jogoRodada13();
        rodadaVal.html(rodada);
    } else if (n == 14) {

        console.log('\nrodada 14');
        jogoRodada14();
        rodadaVal.html(rodada);
    } else if (n == 15) {

        console.log('\nrodada 15');
        jogoRodada15();
        rodadaVal.html(rodada);
    } else if (n == 16) {

        console.log('\nrodada 16');
        jogoRodada16();
        rodadaVal.html(rodada);
    } else if (n == 17) {

        console.log('\nrodada 17');
        jogoRodada17();
        rodadaVal.html(rodada);
    } else if (n == 18) {

        console.log('\nrodada 18');
        jogoRodada18();
        rodadaVal.html(rodada);
    } else if (n == 19) {

        console.log('\nrodada 19');
        jogoRodada19();
        rodadaVal.html(rodada);
    } else if (n == 20) {

        console.log('\nrodada 20');
        jogoRodada20();
        rodadaVal.html(rodada);
    } else if (n == 21) {
        registrarPontos();
        console.log('\nFinal');
        
    } else{
        console.log("\n\n\nERRO AO SELECIONAR RODADAS\n\n\n");
    }
}

function certoErrado(imagemClicada, respostacerta) {
    // console.log(music.play())


    sw.innerHTML = '<h3 id="stopwatch">:00</h3>';
    music.pause();
    music.currentTime = 0;

    if (imagemClicada != respostacerta) { //Errou
        // alert("Errou Campeão!");
        respondido = true;

        //Punição
        jogoErros = jogoErros + 50;
        console.log('Erros: ' + jogoErros);

        //Feedback
        somErrado();
        feedbackImagemErrada(imagemClicada);
        feedbackImagemCerta(respostacerta);

        //TrocarJogo
        rodada++;
        console.log('Trocar Rodada:' + rodada);
        setTimeout(function () {
            esconderCampos();
            StopfbPlayer();
            escolherJogo(rodada);
            play.classList.remove("btn-disable");
        }, 3000);


    } else { //Acertou
        // alert("Acertou Mongolão");
        respondido = true;

        //Feedback
        somCerto();
        feedbackImagemCerta(imagemClicada);


        //Calculo Pontos
        pontoRodada = rodada * 100 - jogoErros;
        console.log('Rodada - Erros =' + pontoRodada);
        pontosTotal += pontoRodada;

        console.log('pontos Totais = ' + pontosTotal);


        //Atualizar Pontos
        divPontos.html(pontosTotal);

        //TrocarJogo
        rodada++;
        console.log('Trocar Rodada:' + rodada);
        setTimeout(function () {
            esconderCampos();
            StopfbPlayer();
            escolherJogo(rodada);
            play.classList.remove("btn-disable");
        }, 3000);

        pontoRodada = 0;
        if (jogoErros > 0) {
            jogoErros = 0;
        } else {
            console.log('Erros esta em Zero');
            return true;

        }

        console.log('Pontos Rodada Zerado:' + pontoRodada);
    }

}

//Imagens on Click
$("#image1").click(function () {
    if (respondido == true) {
        // alert("Ops!Não da pra voltar atras vacilão!");
        return false;
    } else {
        certoErrado(1, respostacerta);
    }
});


$("#image2").click(function () {
    if (respondido == true) {
        return false;
    } else {
    certoErrado(2, respostacerta);
    }
});

$("#image3").click(function () {
    if (respondido == true) {
        return false;
    } else {
    certoErrado(3, respostacerta);
    }
});

$("#image4").click(function () {
    if (respondido == true) {
        return false;
    } else {
    certoErrado(4, respostacerta);
    }
});


//Helpers
function esconderCampos() {
    image1.classList.add("hidden");
    image2.classList.add("hidden");
    image3.classList.add("hidden");
    image4.classList.add("hidden");
    banda1.addClass("hidden");
    banda2.addClass("hidden");
    banda3.addClass("hidden");
    banda4.addClass("hidden");
}


//Feedbacks
function feedbackImagemCerta(i) {

    var certa = '#0be528',
        padrao = '#04293e';

    if (i == 1) {
        $("#banda1").css('background-color', certa);
        setTimeout(function () {
            $("#banda1").css('background-color', '');
        }, 3000);

    } else if (i == 2) {
        $("#banda2").css('background-color', certa);
        setTimeout(function () {
            $("#banda2").css('background-color', '');
        }, 3000);

    } else if (i == 3) {
        $("#banda3").css('background-color', certa);
        setTimeout(function () {
            $("#banda3").css('background-color', '');
        }, 3000);

    } else {
        $("#banda4").css('background-color', certa);
        setTimeout(function () {
            $("#banda4").css('background-color', '');
        }, 3000);

    }
}

function feedbackImagemErrada(i) {

    var errada = '#e01818',
        padrao = '#04293e';

    if (i == 1) {
        $("#banda1").css('background-color', errada);
        setTimeout(function () {
            $("#banda1").css('background-color', '');
        }, 3000);

    } else if (i == 2) {
        $("#banda2").css('background-color', errada);
        setTimeout(function () {
            $("#banda2").css('background-color', '');
        }, 3000);

    } else if (i == 3) {
        $("#banda3").css('background-color', errada);
        setTimeout(function () {
            $("#banda3").css('background-color', '');
        }, 3000);

    } else {
        $("#banda4").css('background-color', errada);
        setTimeout(function () {
            $("#banda4").css('background-color', '');
        }, 3000);

    }
}

function somErrado() {
    fbPlayer.src = 'files/audio/Boo.mp3';
    fbPlayer.play();
}

function somCerto() {
    fbPlayer.src = 'files/audio/applauses.mp3';
    fbPlayer.play();
}


//Jogos

function jogoRodada1() {

    musicaAtual = "rodadas/rodada1/AC-DC.mp3";

    image1.src = "rodadas/rodada1/ac-dc.jpg";
    image2.src = "rodadas/rodada1/BeastieBoys.jpg";
    image3.src = "rodadas/rodada1/billyidol.jpg";
    image4.src = "rodadas/rodada1/BlackSabbath.jpg";

    banda1.html('AC/DC');
    banda2.html('Beastie Boys');
    banda3.html('Billy Idol');
    banda4.html('Black Sabbath');

    respostacerta = 1;

    trocarMusica(musicaAtual);
}

function jogoRodada2() {

    musicaAtual = "rodadas/rodada2/Black_Sabbath.mp3";

    image1.src = "rodadas/rodada2/JanisJoplin.jpg";
    image2.src = "rodadas/rodada2/IronMaiden.jpg";
    image3.src = "rodadas/rodada2/BlackSabbath.jpg";
    image4.src = "rodadas/rodada2/Blackhearts.jpg";

    banda1.html('Janis Joplin');
    banda2.html('Iron Maiden');
    banda3.html('BlackSabbath');
    banda4.html('Joan Jett & the Blackhearts');

    respostacerta = 3;

    trocarMusica(musicaAtual);
}

function jogoRodada3() {

    musicaAtual = "rodadas/rodada3/BonJovi.mp3";

    image1.src = "rodadas/rodada3/The-Cure.jpg";
    image2.src = "rodadas/rodada3/theSmiths.jpg";
    image3.src = "rodadas/rodada3/van_halen.jpg";
    image4.src = "rodadas/rodada3/bonjovi.jpg";

    banda1.html('The Cure');
    banda2.html('The Smiths');
    banda3.html('Van Halen');
    banda4.html('Bon Jovi');

    respostacerta = 4;

    trocarMusica(musicaAtual);
}

function jogoRodada4() {

    musicaAtual = "rodadas/rodada4/David_Bowie.mp3";

    image1.src = "rodadas/rodada4/Derek_dominos.jpg";
    image2.src = "rodadas/rodada4/david-bowie.jpg";
    image3.src = "rodadas/rodada4/Dexys_runners.jpg";
    image4.src = "rodadas/rodada4/Genesis.jpg";

    banda1.html('Derek and the Dominos');
    banda2.html('David Bowie');
    banda3.html('Dexys Midnight Runners');
    banda4.html('Genesis');

    respostacerta = 2;

    trocarMusica(musicaAtual);
}

function jogoRodada5() {

    musicaAtual = "rodadas/rodada5/deep.mp3";

    image1.src = "rodadas/rodada5/deep.jpg";
    image2.src = "rodadas/rodada5/dexys.jpg";
    image3.src = "rodadas/rodada5/genesis.jpg";
    image4.src = "rodadas/rodada5/guns.jpg";

    banda1.html('Deep Purple');
    banda2.html('Dexys Midnight Runners');
    banda3.html('Genesis');
    banda4.html("Guns N' Roses");

    respostacerta = 1;

    trocarMusica(musicaAtual);
}

function jogoRodada6() {

    musicaAtual = "rodadas/rodada6/ritalee.mp3";

    image1.src = "rodadas/rodada6/CassiaEller.jpg";
    image2.src = "rodadas/rodada6/KidAbelha.jpg";
    image3.src = "rodadas/rodada6/MarinaLima.jpg";
    image4.src = "rodadas/rodada6/RitaLee.jpg";

    banda1.html('Cassia Eller');
    banda2.html('Kid Abelha');
    banda3.html("Marina Lima");
    banda4.html("Rita Lee");

    respostacerta = 4;

    trocarMusica(musicaAtual);
}

function jogoRodada7() {

    musicaAtual = "rodadas/rodada7/IronMaiden.mp3";

    image1.src = "rodadas/rodada7/IronMaiden.jpg";
    image2.src = "rodadas/rodada7/Thebeatles.jpg";
    image3.src = "rodadas/rodada7/thecult.jpg";
    image4.src = "rodadas/rodada7/Thejesusandmarychain.jpg";

    banda1.html('Iron Maiden');
    banda2.html('The Beatles');
    banda3.html("The Cult");
    banda4.html("The Jesus and Mary Chain");

    respostacerta = 1;

    trocarMusica(musicaAtual);
}

function jogoRodada8() {

    musicaAtual = "rodadas/rodada8/Exagerado.mp3";

    image1.src = "rodadas/rodada8/cazuza.jpg";
    image2.src = "rodadas/rodada8/legiaourbana.jpg";
    image3.src = "rodadas/rodada8/RaulSeixas.jpg";
    image4.src = "rodadas/rodada8/TimMaia.jpg";

    banda1.html('Cazuza');
    banda2.html('Legião Urbana');
    banda3.html("Raul Seixas");
    banda4.html("Tim Maia");

    respostacerta = 1;

    trocarMusica(musicaAtual);
}

function jogoRodada9() {

    musicaAtual = "rodadas/rodada9/JoanJett.mp3";

    image1.src = "rodadas/rodada9/The-Cure.jpg";
    image2.src = "rodadas/rodada9/JoanJett _theBlackhearts.jpg";
    image3.src = "rodadas/rodada9/thesmiths.jpg";
    image4.src = "rodadas/rodada9/JanisJoplin.jpg";

    banda1.html('The Cure');
    banda2.html('Joan Jett & the Blackhearts');
    banda3.html("The Smiths");
    banda4.html("Janis Joplin");

    respostacerta = 2;

    trocarMusica(musicaAtual);
}

function jogoRodada10() {

    musicaAtual = "rodadas/rodada10/JudasPriest.mp3";

    image1.src = "rodadas/rodada10/JudasPriest.jpg";
    image2.src = "rodadas/rodada10/neilYoung.jpg";
    image3.src = "rodadas/rodada10/pink-floyd.jpg";
    image4.src = "rodadas/rodada10/queen.jpg";

    banda1.html('Judas Priest');
    banda2.html('Neil Young');
    banda3.html("Pink Floyd");
    banda4.html("Queen");

    respostacerta = 1;

    trocarMusica(musicaAtual);
}

function jogoRodada11() {

    musicaAtual = "rodadas/rodada11/Kizz.mp3";

    image1.src = "rodadas/rodada11/Gun_sandroses.jpg";
    image2.src = "rodadas/rodada11/ac-dc.jpg";
    image3.src = "rodadas/rodada11/kizz.jpg";
    image4.src = "rodadas/rodada11/IronMaiden.jpg";

    banda1.html("Guns N' Roses");
    banda2.html('AC/DC');
    banda3.html("Kiss");
    banda4.html("Iron Maiden");

    respostacerta = 3;

    trocarMusica(musicaAtual);
}

function jogoRodada12() {

    musicaAtual = "rodadas/rodada12/LegiaoUrbana.mp3";

    image1.src = "rodadas/rodada12/ramones.jpg";
    image2.src = "rodadas/rodada12/legiaourbana.jpg";
    image3.src = "rodadas/rodada12/RaulSeixas.jpg";
    image4.src = "rodadas/rodada12/ZZTop.jpg";

    banda1.html('Ramones');
    banda2.html('Legião Urbana');
    banda3.html("Raul Seixas");
    banda4.html("ZZ Top");

    respostacerta = 2;

    trocarMusica(musicaAtual);
}

function jogoRodada13() {

    musicaAtual = "rodadas/rodada13/Queen.mp3";

    image1.src = "rodadas/rodada13/Lou-Reed.jpg";
    image2.src = "rodadas/rodada13/metallica.jpg";
    image3.src = "rodadas/rodada13/motorhead.jpg";
    image4.src = "rodadas/rodada13/queen.jpg";

    banda1.html('Lou Reed');
    banda2.html('Metallica');
    banda3.html("Motorhead");
    banda4.html("Queen");

    respostacerta = 4;

    trocarMusica(musicaAtual);
}

function jogoRodada14() {

    musicaAtual = "rodadas/rodada14/RaulSeixas.mp3";

    image1.src = "rodadas/rodada14/Billyidol.jpg";
    image2.src = "rodadas/rodada14/RaulSeixas.jpg";
    image3.src = "rodadas/rodada14/Bostonband.jpg";
    image4.src = "rodadas/rodada14/legiaourbana.jpg";

    banda1.html('Billy Idol');
    banda2.html('Raul Seixas');
    banda3.html("Boston");
    banda4.html("Legião Urbana");

    respostacerta = 2;

    trocarMusica(musicaAtual);
}

function jogoRodada15() {

    musicaAtual = "rodadas/rodada15/Slayer.mp3";

    image1.src = "rodadas/rodada15/Dexysmidnightrunners.jpg";
    image2.src = "rodadas/rodada15/IronMaiden.jpg";
    image3.src = "rodadas/rodada15/slayer.jpg";
    image4.src = "rodadas/rodada15/kizz.jpg";

    banda1.html('Dexys Midnight Runners');
    banda2.html('Iron Maiden');
    banda3.html("Slayer");
    banda4.html("Kiss");

    respostacerta = 3;

    trocarMusica(musicaAtual);
}

function jogoRodada16() {

    musicaAtual = "rodadas/rodada16/ImmigrantSong.mp3";

    image1.src = "rodadas/rodada16/ledzeppelin.jpg";
    image2.src = "rodadas/rodada16/Gun_sandroses.jpg";
    image3.src = "rodadas/rodada16/aerosmith.jpg";
    image4.src = "rodadas/rodada16/pink-floyd.jpg";

    banda1.html('Led Zeppelin');
    banda2.html("Guns N' Roses");
    banda3.html("Aerosmith");
    banda4.html("Pink Floyd");

    respostacerta = 1;

    trocarMusica(musicaAtual);
}

function jogoRodada17() {

    musicaAtual = "rodadas/rodada17/VanHalen.mp3";

    image1.src = "rodadas/rodada17/Derekandthedominos.jpg";
    image2.src = "rodadas/rodada17/Judaspriest.jpg";
    image3.src = "rodadas/rodada17/van_halen.jpg";
    image4.src = "rodadas/rodada17/neilYoung.jpg";

    banda1.html('Derek and the Dominos');
    banda2.html('Judas Priest');
    banda3.html("Van Halen");
    banda4.html("Neil Young");

    respostacerta = 3;

    trocarMusica(musicaAtual);
}

function jogoRodada18() {

    musicaAtual = "rodadas/rodada18/AC-DC.mp3";

    image1.src = "rodadas/rodada18/ramones.jpg";
    image2.src = "rodadas/rodada18/Thejesusandmarychain.jpg";
    image3.src = "rodadas/rodada18/legiaourbana.jpg";
    image4.src = "rodadas/rodada18/ac-dc.jpg";

    banda1.html('Ramones');
    banda2.html('The Jesus and Mary Chain');
    banda3.html("Legião Urbana");
    banda4.html("AC/DC");

    respostacerta = 4;

    trocarMusica(musicaAtual);
}

function jogoRodada19() {

    musicaAtual = "rodadas/rodada19/BlackSabbath.mp3";

    image1.src = "rodadas/rodada19/metallica.jpg";
    image2.src = "rodadas/rodada19/BlackSabbath.jpg";
    image3.src = "rodadas/rodada19/mottthehoople.jpg";
    image4.src = "rodadas/rodada19/motorhead.jpg";

    banda1.html('Metallica');
    banda2.html('Black Sabbath');
    banda3.html("Mott The Hoople");
    banda4.html("Motorhead");

    respostacerta = 2;

    trocarMusica(musicaAtual);
}

function jogoRodada20() {

    musicaAtual = "rodadas/rodada20/GunsN_Roses.mp3";

    image1.src = "rodadas/rodada20/kizz.jpg";
    image2.src = "rodadas/rodada20/pink-floyd.jpg";
    image3.src = "rodadas/rodada20/Gun_sandroses.jpg";
    image4.src = "rodadas/rodada20/Thebeatles.jpg";

    banda1.html('Kiss');
    banda2.html('Pink Floyd');
    banda3.html("Guns N' Roses");
    banda4.html("The Beatles");

    respostacerta = 3;

    trocarMusica(musicaAtual);
}




$('document').ready(function () {
    rodada = 1;
    escolherJogo(rodada);
});


// RANK
var nomeJogador;
function registrarPontos(){
    nomeJogador = prompt("Digite seu nome para inseri-lo no rank:");

    $.ajax({
        url: "php/rank.php",
        type: "POST",
        data: {
            "Nome": nomeJogador,
            "Pontos": pontosTotal
        }
    
        }).done(function (resposta) {
            
            console.log(resposta);
            window.location.reload();
            
        }).fail(function (jqXHR, textStatus) {
            console.log("Request failed: " + textStatus);
    
        }).always(function () {
            console.log("Completou");
        });
}


var pontosArray = [];
function pegarPontos() {
    
    $.ajax({
        url: "php/getrank.php",
        type: "GET",
        data: '' 
        }).done(function (resposta) {
            pontosArray = resposta.split('/', 20);
            var nomes = [];
            var pontos = [];
            nomes =  $("td.Nome");
            pontos =  $("td.Pontos");
             
            for (var i = 0, o = 0; i < 10; i++) {
                if(pontosArray[o] == null){
                    pontosArray[o] = ''
                }
                 nomes[i].innerHTML = pontosArray[o];
                 o++;
                 if(pontosArray[o] == null){
                    pontosArray[o] = ''
                }
                 pontos[i].innerHTML = pontosArray[o];
                 o++;      
            }
            
        }).fail(function (jqXHR, textStatus) {
            console.log("Request failed: " + textStatus);
    
        }).always(function () {
            console.log("Completou");
        });

    // $.ajax({    //create an ajax request to display.php
    //     type: "GET",
    //     url: "php/getrank.php",             
    //     dataType: "html",   //expect html to be returned                
    //     success: function(response){                    
    //         $("#rank").html(response); 
    //         //alert(response);
    //     }

    // });

}
$(document).ready(function () {
    pegarPontos();
})

