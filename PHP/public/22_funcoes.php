<?php

function pt($value)
{
    echo "{$value} <br>";
}

/* $teste = 123;
pt($teste);
pt(321);
pt('Algo');
pt(90);
pt(129); */


function sum(int $n1, int $n2): int
{
    return $n1 + $n2;
}

echo 'Soma 1 = ' . sum(12, 90);
echo '<br>';
function sum2(int $n1, int $n2, int $taxa = 2): int //n]ap é obrigado passar o terceiro parametro
{
    return ($n1 + $n2) * $taxa;
}

echo 'Soma 2 = ' . sum2(1, 2);
