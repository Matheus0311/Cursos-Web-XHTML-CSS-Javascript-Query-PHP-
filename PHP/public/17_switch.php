<?php

$number = 14;

/* if ($numberOne == 14)
    echo 'Quatroze';
else if ($numberOne == 13)
    echo 'Treze';
else if ($numberOne == 12)
    echo 'Doze';
else
    echo 'Não Identificado...'; */

switch ($number) {
    case '12':
        echo 'Doze';
        break;
    case '13':
        echo 'Treze';
        break;
    case '14':
        echo 'Quatroze';
        break;
    case '15':
        echo 'Quinze';
        break;

    default:
        echo 'Não Identificado...';
        break;
}
