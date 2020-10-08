<?php

include_once 'config.php';

$id = mysqli_real_escape_string($conn, $_POST['id']);
$name = mysqli_real_escape_string($conn, $_POST['name']);
$address = mysqli_real_escape_string($conn, $_POST['address']);
$salary = mysqli_real_escape_string($conn, $_POST['salary']);

if(!empty($id)) {
    //updating the table
    $sql = "UPDATE employees SET emp_name='$name', emp_address='$address', emp_sal='$salary' WHERE id=$id ";
    $result = mysqli_query($conn, $sql);
    header("Location: ../index.php?update=success");
} else {
    $sql = "INSERT INTO employees (emp_name, emp_address, emp_sal) VALUES( '$name', '$address', '$salary' )";
    $result = mysqli_query($conn, $sql);
    header("Location: ../index.php?create=success");
}