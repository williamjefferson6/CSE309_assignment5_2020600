<?php
    $link = mysqli_connect("localhost", "root", "", "to-do");

    if ($link === false) {
        die("ERROR: Could not connect." . mysqli_connect_error());
    }

    $sql = "SELECT * FROM information";
    $result = mysqli_query($link, $sql);

    $tasks = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $tasks[] = $row['To-Do Activity'];
    }

    mysqli_close($link);
    
    echo json_encode($tasks);
?>
