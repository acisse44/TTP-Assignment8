<?php 
$email = $_POST['sub-email'];

// Establish a connection
$conn = mysqli_connect("localhost", "root", "root", "virtualurbanmodesty");

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "INSERT INTO `usr_newsletter`(`usr_email`) VALUES ('$email')";

$res = mysqli_query($conn, $sql);

if ($res) {
    echo "Email inserted successfully";
} else {
    echo "Error inserting email: " . mysqli_error($conn);
}

error_reporting(E_ALL);
ini_set('display_errors', 1);

$conn->close();
?>

