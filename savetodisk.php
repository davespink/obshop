<?php
$data = $_POST['data'];

if (isset($_GET['filename'])) 
    $filename = $_GET['filename'];

file_put_contents($filename, $data);


echo "data saved";
