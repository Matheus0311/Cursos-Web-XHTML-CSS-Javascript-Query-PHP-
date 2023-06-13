<?php

$taxa = 2;

function sum(int $n1, int $n2): array
{
    global $taxa;
    $teste = 12;
    $soma = (($n1 + $n2) * $taxa);
    return [
        'teste' => $teste,
        'soma' => $soma,
    ];
}

$result = sum(1, 2);
//var_dump($result);
echo sum(2, 2)['soma'];
echo sum(2, 2)['teste'];
