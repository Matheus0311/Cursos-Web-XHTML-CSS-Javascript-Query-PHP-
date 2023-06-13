<?php

$infoCompany = [
    'name' => 'EspecializaTI',
    'founder' => 'Carlos Ferreira',
    'year_current' => 2023,
];

$infoCompany2 = [
    'courses' => ['PHP', 'JS', 'VueJS', 'Laravel'],
    'totalCourses' => 26,
];

// var_dump(array_keys($infoCompany));
// echo '<br><br>';
// var_dump(array_values($infoCompany));

// var_dump(count($infoCompany));

$infoCompany = array_merge($infoCompany, $infoCompany2);

echo '<pre>';
var_dump($infoCompany);
