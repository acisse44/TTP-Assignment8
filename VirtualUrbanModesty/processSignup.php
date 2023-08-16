<?php 
$fname = $_POST['usr-first'];
$lname = $_POST['usr-last'];
$email = $_POST['usr-email'];
$bday = $_POST['usr-bday'];
$ref = $_POST['usr-ref'];
$pass = $_POST['usr-pass'];

// Establish a connection
$conn = mysqli_connect("localhost", "root", "root", "virtualurbanmodesty");

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//Hashing the users password into our database
$hashedPass = password_hash($pass, PASSWORD_DEFAULT);

$sql = "INSERT INTO `usr_info`(`firstName`, `lastName`, `email`, `birthDate`, `reference`, `passwrd`) VALUES ('$fname','$lname','$email','$bday','$ref','$hashedPass')";

$res = mysqli_query($conn, $sql);

if ($res) {
    header('Location: http://localhost:8888/login.html');
} else {
    echo "Error saving information: " . mysqli_error($conn);
}

$conn->close();
?>
