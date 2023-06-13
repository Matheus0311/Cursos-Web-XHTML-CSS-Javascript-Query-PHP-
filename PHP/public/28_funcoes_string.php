<?php

$domain = 'https://www.especializati.com.br';

//echo str_replace('www.', 'https://www.', $domain);

//echo substr($domain, 0, 4); //retorna www.

//echo substr($domain, -7); //.com.br

$protocol = substr($domain, 0, 8);
if ($protocol == 'https://')
    echo 'É seguro!';
else
    echo 'Não é seguro';

echo '<br><hr>';

var_dump(substr($domain, 12, -7));

echo '<br><hr>';

echo strlen($domain);
