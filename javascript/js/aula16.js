var texto; // declaração da variável fora da função

window.onload = function() {
    document.getElementById("gravar").onclick = gravarTexto;
    document.getElementById("exibir").onclick = exibirTexto;
    texto = document.getElementById("texto"); // atribuição dentro da função onload
}

function gravarTexto() {
    localStorage.setItem("meuTexto", texto.value);
    console.log("Clicou!");
}

function exibirTexto() {
    texto.value = localStorage.getItem("meuTexto"); // correção para getItem
    console.log("Clicou!");
}
