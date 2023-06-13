<?php

/* $pessoa = array(1,  'Carlos', 175);

var_dump($pessoa);
echo '<br>';

$cars = ['Uno', 'Gol', 'Fusion', 'Civic'];
var_dump($cars[0]);
echo '<br>';
var_dump($cars[1]);
echo '<br>';
var_dump($cars[2]);
echo '<br>'; */

/* $car = [
    'nome' => 'Gol',
    'cor' => 'Branco',
    'portas' => 4,
    'ano' => 2018,
];


//adicionando depois
$car['airbag'] = 'sim';
$car['som'] = 'Modelo 37239';



echo 'Número de Portas: ' . $car['portas'];
echo '<br><br>';
echo 'airbags: ' . $car['airbag'];
echo '<br><br>';
echo 'Nome: ' . $car['nome'];
echo '<br><br>';
echo 'Cor: ' . $car['cor'];
echo '<br><br>';


//mudando depois os valores
$car['airbag'] = 'Não';
$car['som'] = 'Modelo 00001111';
$car['nome'] = 'Vectra';
$car['cor'] = 'Verde Safira';

echo 'Número de Portas: ' . $car['portas'];
echo '<br><br>';
echo 'airbags: ' . $car['airbag'];
echo '<br><br>';
echo 'Nome: ' . $car['nome'];
echo '<br><br>';
echo 'Cor: ' . $car['cor'];
 */


$cars = [
    'Mercedes' => [
        'cor' => 'preto',
        'motor' => [
            'cilindros' => 6,
            'cilindradas' => 5.2,
            'cavalos' => 789,
        ],
        'nome' => 'Mercedes-AMG EQS 53 4MATIC+'
    ],
    'Ford' => [
        'cor' => 'amarelo',
        'motor' => 3.2,
        'nome' => 'Ford Mustang Boss 429',
    ],
    'Ferrari' => [
        'cor' => 'vermelho',
        'motor' => 4.5,
        'nome' => 'Ferrari Purosangue',
    ],
];

echo $cars['Ford']['nome'];
echo '<br><br>';
$especificacoesMotor = $cars['Mercedes']['motor'];

echo 'Cilindros: ' . $especificacoesMotor['cilindros'] . '<br>';
echo 'Cilindradas: ' . $especificacoesMotor['cilindradas'] . '<br>';
echo 'Cavalos: ' . $especificacoesMotor['cavalos'] . '<br>';
