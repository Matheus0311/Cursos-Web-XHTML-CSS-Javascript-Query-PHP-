<?php

$var1 = 'Algo';
$var2 = 'Outro';

$var3 = $var1 . ' ' . $var2 . ' ' . 12;

$name = 'Carlos Ferreira';
$company = 'EspecializaTI';

echo 'O ' . $name . ' é fundador da Empresa: ' . $company;
echo '<br>';
echo "O $name é fundador da Empresa: $company"; // bom pra concatenar
echo '<br>';
echo "O {$name} é fundador da Empresa: {$company}"; //bom pra colocar o caracter $ por exemplo em R$
