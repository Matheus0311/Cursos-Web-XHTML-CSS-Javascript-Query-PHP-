<?php

function factorial(int $number): int
{
    if ($number <= 1)
        $number = $number;
    else
        $number *= factorial($number - 1);

    return $number;
}

echo factorial(4);
