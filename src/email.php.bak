<?php 
	header('Access-Control-Allow-Origin: *');
	$id=uniqid();
	$headers = "From: ccm-autocredit@ccmcourtiers.com";
	$headers .= "\r\nReply-To: contact@ccmcourtiers.com";
	$headers .= "\r\nX-Mailer: PHP/".phpversion();
	mail(
	"contact@ccmcourtiers.com",
	"Auto-crédit #$id",
	"Un utilisateur vient de soumettre des informations auto-crédit\n\nCliquez sur le lien ci-dessous pour consulter la liste\n\nhttps://ccmcourtiers.com/autocredit-list
	",
	$headers
	);
?>