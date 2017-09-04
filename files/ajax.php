<?php

  $email = $_POST['email'];


  sleep(2);

  if(filter_var($email,FILTER_VALIDATE_EMAIL)){
    echo "<p>Success : ".$email." is  valid!</p>";
  }else{
    echo "<p>Error: ".$email." is not valid!</p>";
  }

?>
