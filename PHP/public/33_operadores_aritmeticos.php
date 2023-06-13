<?php

$a = 2;
$b = 4;

$result = $a + $b;

echo "O resultado da soma entre {$a} + {$b} é: {$result} <br><hr>";

$result = $b - $a;

echo "O resultado da subtração entre {$b} - {$a} é: {$result} <br><hr>";

$result = $b * $a;

echo "O resultado da multiplicação entre {$b} * {$a} é: {$result} <br><hr>";

$result = $b / $a;

echo "O resultado da divisão entre {$b} / {$a} é: {$result} <br><hr>";

$result = $b % $a;

echo "O resultado do resto da divisão entre {$b} % {$a} é: {$result} <br><hr>";


if ($b % 2 == 0)
    echo "O número {$b} é Par";
else
    echo "O número {$b} é ímpar";

echo '<br><hr>';

$resultadoString = '((2 + 2 - 8 / 4) *2)';
$result = ((2 + 2 - 8 / 4) * 2);

echo "O Resultado de {$resultadoString} é: {$result}";
