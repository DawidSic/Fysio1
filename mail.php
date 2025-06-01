<?php

$name = $_POST["name"];
$from = $_POST["email"];
$subject = "Kontakt skjema melding fra DawDev.com";
$to = "dawid@dawdev.com";
$message = $_POST["msg"];

$txt = "Navn: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Innhold: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status){
    header("Location: /index.html?mail_status=sent");
} else {
    header("Location: /index.html?mail_status=error");
}