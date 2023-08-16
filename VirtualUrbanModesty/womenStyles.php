<?php
session_start();

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    header('Location: login.html');
    exit;
}

// User is logged in, display welcome message
$user = isset($_SESSION['user_first']) ? $_SESSION['user_first'] : 'Guest';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Women Styles</title>
    <link rel="stylesheet" href="virtualUrbanModesty.css"> <!-- Linking my external CSS file -->

</head>
<body>
<div class="navbar-container">
        <div class="navbar-left">
          <span>
            <h1 class="navbar-title">Virtual Urban Modesty</h1>
          </span>
        </div>

        <div class="navbar-right">
          <nav class="navbar-nav">
            <div class="navbar-links">
              <div class="navbar-signup">
                <a href="logout.php">Log Out</a>
              </div>
              <div class="navbar-signup">
                <a href="virtualUrbanModesty.html">Home</a>
              </div>
            </div>
          </nav>
        </div>
</div>

<h1 id ="welcome-greeting" > Welcome, <?php echo $user; ?>!</h1>

<div class="video-container">
<video autoplay loop muted id="styles-video">
        <source src="WalkingVideoCanva.mp4" type="video/mp4" />
        Your browser does not support the video tag.
</video>
</div>

<h2 id= "select-style" > PICK YOUR LOOK</h2>



<div class="image-container">
        <a href="http://localhost:8888/chicStyles.html">
            <h2 id = "chic-heading" >Chic </h2>
            <img src="https://i.pinimg.com/564x/eb/a7/13/eba713232143e8df4f3fdf1f18b38c0a.jpg" alt="Chic Style" id="chic-style-image">
        </a>

        <a href="http://localhost:8888/abayaStyles.html">
            <h2 id = "abaya-heading">Abaya </h2>
            <img src="https://i.pinimg.com/474x/18/61/75/1861757ce6ecd9d66aeb6c9773872517.jpg" alt= "Abaya Style" id="abaya-style-image">
        </a>

        <a href="http://localhost:8888/streetwearStyles.html">
            <h2 id = "street-heading">Streetwear</h2>
            <img src="https://i.pinimg.com/564x/1c/8e/6f/1c8e6fb8a6e9b6be7a5869e5324dd2cf.jpg" alt="Street Wear Style" id="streetwear-style-image">
        </a>
</div>

    <!-- <div id="log-out">
        <a href="logout.php">
            <button id ="log-out">
                <h2>Log Out</h2>
            </button>
        </a>
    </div> -->
    <!-- <script>
        // Show an alert after successful login
        window.alert("Yay, login successful!");
    </script> -->

</body>
</html>
