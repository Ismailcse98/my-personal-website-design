<?php
$host = "localhost";
$dbname = "portfolio";
$user = "root";
$pass = "";

try{
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8",$user,$pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e){
    die("Database connection failed");
}

if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $name = trim($_POST['name']);
    $phone = trim($_POST['phone']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);

    // Validation
    if(empty($name) || empty($phone) || empty($email) || empty($message)){
        echo "<div style='color:red'>Please fill all fields.</div>";
        exit;
    }

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo "<div style='color:red'>Invalid email address.</div>";
        exit;
    }

    // Insert data
    $stmt = $pdo->prepare("INSERT INTO contacts(name,phone,email,message) VALUES(?,?,?,?)");
    $stmt->execute([$name,$phone,$email,$message]);
   

    echo "<div style='color:green'>
    ✅ Thank you <b>$name</b>, your message has been sent successfully.  
    Our team will contact you soon.
    </div>";
}
?>