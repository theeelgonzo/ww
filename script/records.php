<?php

$records = [
    ['date' => 'july012023',
    'weight' => '150'],
    ['date' => 'july072023',
    'weight'=> '175']
];

$dateValue = $_GET['date'];
//echo $dateValue;

  foreach($records as $record) {
      if($record['date'] == $dateValue) {
          echo "<p>";
          echo $record['weight'];
          echo"</p>";
      }
  }
?>
