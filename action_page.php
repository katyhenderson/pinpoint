<?php 

require 'web/PHPMailer-master/src/Exception.php';
require 'web/PHPMailer-master/src/PHPMailer.php';
require 'web/PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

	$fname = $_POST['firstname'];
	$lname = $_POST['lastname'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];


	if (empty($name) && empty($lname) && empty($email) && empty($subject)) {
		header_remove(); 
		header("Location: /?error");
    	die();
	} else {
		require 'web/PHPMailer/examples/gmail.phps';
		echo '<script>window.location = "/pinpoint/?sent=true#contact";</script>';
	}

}