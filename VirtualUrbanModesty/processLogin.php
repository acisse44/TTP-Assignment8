<?php 
session_start(); // Start or resume the session

$email = $_POST['usr-email'];
$pass = $_POST['usr-pass'];

// Establish a connection
$conn = new mysqli("localhost", "root", "root", "virtualurbanmodesty");

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Sanitize inputs and use prepared statement
$stmt = $conn->prepare("SELECT `firstName`, `passwrd` FROM `usr_info` WHERE `email` = ?");
$stmt->bind_param("s", $email);

$stmt->execute();
$res = $stmt->get_result();

if ($res->num_rows > 0) {
    $row = $res->fetch_assoc();
    $hashedPassFromDB = $row['passwrd'];

    // Verify the entered password against the stored hash
    if (password_verify($pass, $hashedPassFromDB)) {
        $_SESSION['user_id'] = $email; // Store user ID or email in session
        $_SESSION['user_first'] = $row['firstName']; // Store user's first name

        // Redirect to the appropriate page after successful login
        header("Location: http://localhost:8888/womenStyles.php");
    } else {
       $_SESSION['login_error'] = "Invalid email or password"; // Store error message in session
        header("Location: http://localhost:8888/signUp.html"); // Redirect to login page
    }
} else {
   $_SESSION['login_error'] = "Invalid email or password"; // Store error message in session
    header("Location: http://localhost:8888/login.html"); // Redirect to login page
}

$stmt->close();
$conn->close();
?>

