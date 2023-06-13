<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu site em PHP</title>
</head>

<body>

    <?php
    // include('includes/header.php'); // simplesmente inclui o arquivo
    require('includes/header.php'); // obriga ter esse arquivo pra continuar rodando, usado pra banco de dados e arquivos importantes
    require_once('includes/header.php'); // faz o require apenas uma vez
    ?>
    <div>
        <?php
        echo 'Sou o conteúdo do site';
        ?>
    </div>
    <?php
    include_once('includes/footer.php'); //inclui apenas uma vez
    ?>



</body>

</html>