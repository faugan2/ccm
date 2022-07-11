<?php 
	header('Access-Control-Allow-Origin: *');
	$id=uniqid();
	$headers = "From: ccm-autocredit@ccmcourtiers.com";
	$headers .= "\r\nReply-To: ccmcourtage@gmail.com";
	$headers .= "\r\nX-Mailer: PHP/".phpversion();
	mail(
	"ccmcourtage@gmail.com",
	"Auto-crédit #$id",
	"Un utilisateur vient de soumettre des informations auto-crédit\n\nCliquez sur le lien ci-dessous pour consulter la liste\n\nhttps://ccmcourtiers.com/autocredit-list
	",
	$headers
	);
?>