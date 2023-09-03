<?php

$email = $_POST["email"];
$estado = $_POST["estado"];

if ($email == "" || $estado == "") {
    echo json_encode("error");
    exit;
}else{
    echo json_encode("correcto <br>email :".$email."<br>estado: ".$estado."");
    exit;
}