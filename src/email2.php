<?php 
	header('Access-Control-Allow-Origin: *');
	$id=uniqid();
	$headers = "From: ccm-alerte-assurance@ccmcourtiers.com";
	$headers .= "\r\nReply-To: ccmcourtage@gmail.com";
	$headers .= "\r\nX-Mailer: PHP/".phpversion();
	mail(
	"ccmcourtage@gmail.com",
	"Alerte-Assurance #$id",
	"Un utilisateur vient de soumettre des informations ALERTE-ASSURANCE\n\nCliquez sur le lien ci-dessous pour consulter la liste\n\nhttps://ccmcourtiers.com/alerte-assurance-list
	",
	$headers
	);
?>