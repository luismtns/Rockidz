<?php
@include('connect.php');

$query = "SELECT nome, pontos FROM `rank` ORDER by pontos DESC LIMIT 10" ;
$resultado = @mysqli_query($conn, $query);


while ($data = @mysqli_fetch_array($resultado)) {
     echo $data['nome'] . '/' .  $data['pontos'] . '/';
  }

?>