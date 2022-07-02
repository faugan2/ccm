<?php 
	header('Access-Control-Allow-Origin: *');
	$id=uniqid();
	$headers = "From: ccm-ch-habitation@ccmcourtiers.com";
	$headers .= "\r\nReply-To: ccmcourtage@gmail.com";
	$headers .= "\r\nX-Mailer: PHP/".phpversion();
	mail(
	"ccmcourtage@gmail.com",
	"CH HABITATION #$id",
	"Un utilisateur vient de soumettre des informationsCH HABITATION\n\nCliquez sur le lien ci-dessous pour consulter la liste\n\nhttps://ccmcourtiers.com/ch-habitation-list
	",
	$headers
	);
?>