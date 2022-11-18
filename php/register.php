<?php
$user = $_POST['user'];
$pass = $_POST['pass'];

    $con = mysqli_connect("localhost","root","","guvidb");
    mysqli_query($con, "INSERT INTO 'registration' ('username','password') VALUES ('$user','$pass')");
    
    echo"great";

// $servername = "localhost";
// $username = "root";
// $password = "";
// $db = 'guvidb';
// // Create connection
// $conn = mysqli_connect($servername, $username, $password,$db);

// // Check connection
// if (!$conn) {
//   die("Connection failed: " . mysqli_connect_error());
// }
// echo "Connected successfully";


?>
