<?php

$HOST = 'localhost';
$USER = 'root';
$PASSWORD = 'Damned1234';
$BD = 'collections';

$name = $_POST['txtNameUser'];
$company = $_POST['txtCompanyUser'];
$email = $_POST['txtEmailUser'];
$adress = $_POST['txtAddressUser'];
$code = $_POST['txtPostCodeUser'];

$connection = new msqli($HOST, $USER, $PASSWORD, $BD);
$connection -> query("INSERT INTO data(name, company, email, adress, post_code) VALUES('$name', '$company', '$email', '$adress', '$code')");
