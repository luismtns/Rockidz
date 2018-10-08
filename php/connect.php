<?php

$servername = "mysql.hostinger.com.br";
$username = "u510869642_darkg";
$password = "AQbpClnq3VdF";
$dbname = "u510869642_rkz";

// Create connection
$conn = @mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . @mysqli_connect_error());
}
// echo "Banco de dados Conectado\n";

?>