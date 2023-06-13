<?php

// $cart = ['Macarrão', 'Feijão', 'Arroz', 'Batata'];

// echo '<pre>'; // ajuda a observar melhor
// echo '<hr>';

// arsort($cart); // ordena em ordem alfabetica decrescente o array

// var_dump($cart);


echo '<pre>'; // ajuda a observar melhor
echo '<hr>';
$cart = [
    0 => 'Macarrão',
    1 => 'Feijão',
    2 => 'Arroz',
    3 => 'Batata',
];

arsort($cart); // ordena em ordem alfabetica decrescente o array
var_dump($cart);
echo '<hr>';

asort($cart);  // ordena em ordem alfabetica crescente o array
var_dump($cart);
echo '<hr>';
sort($cart);
var_dump($cart); // ordena em orderm alfabetica crescente e também ordena as chaves
echo '<hr>';
