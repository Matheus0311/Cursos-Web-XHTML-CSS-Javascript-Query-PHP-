<?php

$cart = ['Arroz', 'Sabão', 'Feijão', 'Balinhas'];

echo '<pre>'; // ajuda a observar melhor
echo '<hr>';

var_dump($cart);

echo '<hr>';

array_pop($cart); // remove o último
var_dump($cart);

echo '<hr>';

array_shift($cart); // remove o primeiro
var_dump($cart);

echo '<hr>';

unset($cart[0]); // remove determinado elemento
var_dump($cart);

echo '<hr>';

array_push($cart, 'Tapete'); // adiciona um elemento no final do array
var_dump($cart);

echo '<hr>';

array_unshift($cart, 'Microondas'); // adiciona um elemento no começo do array
var_dump($cart);

echo '<hr>';

array_push($cart, 'Tapete'); // adiciona um elemento no final do array
array_push($cart, 'Rodo'); // adiciona um elemento no final do array
var_dump($cart);

echo '<hr>';

array_unshift($cart, 'Microondas'); // adiciona um elemento no começo do array
array_unshift($cart, 'Tapete'); // adiciona um elemento no começo do array
var_dump($cart);

echo '<hr>';

$cart = array_unique($cart); // remove os elementos duplicados no array
var_dump($cart);

echo '<hr>';
