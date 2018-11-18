<?php
include 'connect.php';


//  echo $db_user;
$photo_query = 'SELECT * FROM `tbl_photo&info`';

$getImg = $pdo -> query($photo_query);

$results = array();
while($row = $getImg -> fetch(PDO::FETCH_ASSOC)){
    //var_dump($row);
    $results[] = $row; 
}

header('Access-Control-Allow-Origin: *');
header('Connect-Type: application/json;charset=UTF8');
$reslut_json = json_encode($results, JSON_PRETTY_PRINT);
echo $reslut_json;
?>