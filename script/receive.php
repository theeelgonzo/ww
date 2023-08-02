<?php
// Handling data in JSON format on the server-side using PHP
//
header("Content-Type: application/json");
// build a PHP variable from JSON sent using POST method
$v = file_get_contents("php://input");
// build a PHP variable from JSON sent using GET method
$data = json_decode($v);
// encode the PHP variable to JSON and send it back on client-side
//echo $data;
echo json_encode($data);

$records = [
    ['date' => 'july012023',
    'weight' => '150'],
    ['date' => 'july072023',
    'weight'=> '175']
];
$dateValue = isset($_GET['date']) ? (int) $_GET['date'] : 0;

  foreach($records as $record) {
      if($record['date'] == $dateValue) {
          echo $record['weight'];
      }
  }
?>
