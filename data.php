<?php
  header('Content-type: application/json');

  echo json_encode(
      [ date('Y-m-d H:i:s'), rand(60, 100) ]
  );
