<?php

echo '<hr>';

for ($i = 1; $i <= 10; $i++) {
    echo "{$i} <br>";
}

echo '<hr>';

for ($i = 10; $i >= 0; $i--) {
    echo "{$i} <br>";
}

echo '<hr>';

$names = ['a', 'b', 'c', 'd', 'e'];

for ($i = 0; $i < count($names); $i++) {
    echo $names[$i] . '<br>';
}
