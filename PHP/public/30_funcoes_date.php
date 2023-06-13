<?php
date_default_timezone_set('America/Manaus');
echo 'O ano atual é ' . date('Y') . '<br>';
echo 'O mês atual é ' . date('m') . '<br>';
echo 'O dia atual é ' . date('d') . '<br>';
echo 'A data atual é ' . date('d/m/Y') . '<br>';
echo 'A hora atual é ' . date('H') . '<br>';
echo 'O minuto atual é ' . date('i') . '<br>';
echo 'O segundo atual é ' . date('s') . '<br>';
echo 'A hora atual é ' . date('H:i:s') . '<br>';
echo 'O Timezone é ' . date_default_timezone_get() . '<br>';
