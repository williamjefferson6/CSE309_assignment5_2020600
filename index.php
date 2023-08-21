<?php
    $todo = $_POST['todo'];
    $link = mysqli_connect("localhost", "root", "", "to-do");

    if ($link === false) {
        die("ERROR: Could not connect." . mysqli_connect_error());
    }

    $sql = "INSERT INTO `information` (`To-Do Activity`) VALUES ('$todo')";
    
    mysqli_query($link, $sql);
    mysqli_close($link);
?>
