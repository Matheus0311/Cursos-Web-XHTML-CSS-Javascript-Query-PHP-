<?php

$password = 'Matheus';

function cryptC(String $value): String
{
    $salt = 'jklfnrofcdçkmjtrvqrfj';
    $salt2 = 'cfsnrjhrewyqpwiejgtwgtren8i';

    $hash = crypt($value, $salt);
    $hash = crypt($hash, $salt2);
    $hash = crypt($hash, $hash);
    $hash = md5($value);
    $hash = sha1($hash);
    $hash = hash('sha512', $hash);
    $hash = md5($hash);

    return $hash;
}

echo cryptC($password);
