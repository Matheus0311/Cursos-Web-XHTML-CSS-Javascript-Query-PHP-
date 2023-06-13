<?php

$name = 'Matheus';

if (isset($name))
    echo $name;
else
    echo 'Não existe';

echo '<br><hr>';

unset($name);

if (isset($name))
    echo $name;
else
    echo 'Não existe';
