<?php

$names = ['a' => 'aa', 'b' => 'bb', 'c' => 'cc', 'd' => 'dd', 'e' => 'ee', 'f' => 'ff', 'g' => 'gg', 'h' => 'hh'];

foreach ($names as $name) {
    echo "{$name} <br>";
}
echo '<hr>';
foreach ($names as $key => $name) {
    echo "{$key} => {$name} <br>";
}
