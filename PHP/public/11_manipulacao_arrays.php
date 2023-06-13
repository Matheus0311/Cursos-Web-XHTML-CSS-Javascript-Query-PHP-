<?php

$ages = [12, 14, 18, 20, 44, 50, 98, 78, 56, 90];

// echo $ages[count($ages)  - 1];
// echo end($ages); // último elemento

$agesFiltred = array_filter($ages, function ($age) {
    return $age >= 18;
});
// echo '<pre>';
// var_dump($agesFiltred);

echo '<pre>';
$names = ['Carlos', 'EspecializaTI', 'Company'];
/*
$names[0] = strtoupper($names[0]);
$names[1] = strtoupper($names[1]);
$names[2] = strtoupper($names[2]);
*/

/*
$names = array_map(function ($names) {
    return strtoupper($names);
}, $names); // no array_map primeiro passa a função de callback e depois passa o array com os valores
*/

$names = array_map('applyToupper', $names);

function applyToupper($value)
{
    return strtoupper($value);
}
var_dump($names);
