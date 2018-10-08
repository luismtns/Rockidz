<?php

@include('connect.php');

$nome = $_POST['Nome'];
$pontos = $_POST['Pontos'];

if(@mysqli_query($conn, "INSERT INTO rank (nome, pontos) VALUES ('$nome', '$pontos')")){
    echo "Pontuacao Registrada com Sucesso!";
} else {
    echo "Erro no cadastro...";
}

?>