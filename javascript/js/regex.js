//------------------>RegExp<-----------------------------


// var regex = new RegExp("Javascript", "i");
// var regex = /Javascript/i;//o /i ignora as letras maiusculas
// var string = "Javascript";
// alert(regex.test(string)); //true

// alert(/javascript/i.test("Javascript"));//mesma coisa das linhas de cima

// alert(/javascript/i.exec("Javascript")); //primeira ocorrência que atende a expressão

//------------------>Funções e Modificadores<-----------------------------

// var str = "Qual é o doce mais dice que o Doce";
// alert(/doce/ig.exec(str)); //traz a primeira ocorrência
// alert(str.match(/doce/ig)); //traz todas as ocorrências

//------------------>Metacaracters<-----------------------------

// alert(/./.test("Pier21"));//encontra qualquer caracter
// alert(/\w/.test("Pier21"));//encontra qualquer caracter de A a Z, 0 a 9 e _
// alert(/\s/.test("Pier 21"));//encontra ocorrência de espaço
// alert(/\d/.test("Pier 21"));//encontra ocorrência de número
// alert(/^21/.test("Pier 21"));//verifica se começa com tal informação
// alert(/21$/.test("Pier 21"));//verifica se termina com tal informação
// alert(/\d$/.test("Pier 21"));//verifica ocorrência de número no fina da string
// alert(/\d\d$/.test("Pier 21"));//verifica ocorrência de dois número no fina da string
// alert(/\d\d\d$/.test("Pier 21"));//verifica ocorrência de três número no fina da string

// alert(/^\d\d\d\d\d\-\d\d\d$/.test("70294-070"));//verifica se o padrão de CEP está certo

//------------------>Quantificadores<-----------------------------

// alert(/\d/.test("Pier21"));//existe numero
// alert(/\d*/.test("Pier21"));//existe 0 ou mais ocorrencia de numeros
// alert(/\d+/.test("Pier21"));//existe 1 ou mais ocorrencia de numeros
// alert(/\d?/.test("Pier21"));//existe 0 ou 1 ocorrencia de numeros
// alert(/\d{2}/.test("Pier21"));//total de ocorrência de numero informado
// alert(/\d{2}$/.test("Pier21"));//total de ocorrência de numero informado no final
// alert(/^\d{2}/.test("Pier21"));//total de ocorrência de numero informado no início

// alert(/^\d{5}-\d{3}$/.test("70294-070")); //jeito abreviado de veriicar cep;

// alert(/^\d{2}\/\d{2}\/\d{4}$/.test("12/10/1980"));// verificar data

//alert(/^\d{2}\/\d{2}\/\d{2,4}$/.test("12/10/80"));// verificar data com ano de 2 ou 4 caracteres

// alert(/\w+@\w+\.\w{2,3}/.test("rh@xtiuniversity.com")); //verifica email


//------------------>Caracteres Opcionais<-----------------------------

// alert(/c[ae]u/.test("ceu")); //encontra tanto cau quanto ceu
// alert(/\d*[\d,]*/.test("23, 24"));

//------------------>Buscas e Substituições<-----------------------------

// var str = "Qual é o doce mais doce que o Doce";

// alert(str.match(/doce/ig));
// alert(str.replace(/doce/ig, "docinho")); //substitui

// var str = "O rato roeu a roupa do rei de roma";

// alert(str.match(/r[a-z]/ig));
// alert(str.replace(/r[a-z]/ig, "XXX")); //substitui

// var url = "www.xti.com.br/clientes-2011.html";
// "https://www.xti.com.br/clientes-2011.jsp";

// var re = /www.xti.com.br\/\w{2,}-\d{4}\.html/;

//alert(re.test(url));

// re = /(www.xti.com.br)\/(\w{2,})-(\d{4})\.html/;

// alert(url.replace(re, "https://$1/$3/$2.jsp"));

