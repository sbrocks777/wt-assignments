<?php

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '12345678');
define('DB_NAME', 'employee');

/** Attemp to connect MySQL databse */
$conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

/** Check connection */
if($conn == false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}