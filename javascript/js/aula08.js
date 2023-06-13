//Objetos no Javascript

 //------------------>Objetos Primitivos<-----------------------------

/* var nome = "Matheus";
alert(typeof(nome)); */
/* 
var nome = "Matheus";
alert(new String(nome).length); //mesma coisa que a de baixo
alert(nome.length);//String e string estão muito ligadas
alert(nome.toUpperCase()); */

//------------------>Objeto Boolean<-----------------------------

/* var b = new Boolean (true);
var b = new Boolean (true);
alert(typeof(b));
alert(b instanceof Boolean);
alert(b); */

//var b = new Boolean("");//false
//var b = new Boolean("oi");//true
//var b = new Boolean(NaN);//false
//var b = new Boolean(null);//false
//var b = new Boolean(0);//false
//var b = new Boolean(false);//false
//var b = new Boolean("oi");//true
//var b = new Boolean(true);//true
//var b = new Boolean(1);//true

//var b = new Boolean(0);
//alert(b.valueOf());//false
//alert(typeof(b.valueOf()));//boolean
//alert(b.toString());//false

//------------------>Objeto Number<-----------------------------

//var n = 120.35;
//var n = new Number (120.35);
//alert(n); //120.35
//alert(typeof(n));//object

//var n = new Number ("120.35");
//alert(n);//120.35
//alert(Number.MAX_VALUE);//1.7976931348623157e+308
//alert(Number.MIN_VALUE);//5e-324
//alert(Number.NaN);//NaN
//alert(Number.NEGATIVE_INFINITY);//-Infinity
//alert(Number.POSITIVE_INFINITY);//Infinity

//var n = new Number ("120.35");
//alert(n.toFixed());//120
//alert(n.toFixed(2));//120.35
//alert(n.toFixed(6));//120.350000

//alert(n.toPrecision());//120.35
//alert(n.toPrecision(1));//1e+2
//alert(n.toPrecision(2));//1.2e+2
//alert(n.toPrecision(3));//120
//alert(n.toPrecision(8));//120.35000

//alert(n.toExponential());//1.2035e+2
//alert(n.toExponential(3));//1.203e+2


//------------------>Objeto String<-----------------------------

//var x = "Texto dentro da janela flutuante"
//var x =  new String ("Texto dentro da janela flutuante");
//alert(x);

//document.write(x); //imprime dentro do documento html
//document.writeln(x); //imprime dentro do documento html
 
//var x =  new String ("Texto dentro da janela flutuante");
//alert(x.length); //32
 
// var x =  new String ("Texto dentro da janela flutuante");
// alert(x.charAt(0)); //t 
// alert(x.charAt(1)); //e
// alert(x.charAt(2)); //x
// alert(x.charAt(3)); //t
// alert(x.charAt(4)); //o

// var x =  new String ("Texto dentro da janela flutuante");
// alert(x.concat(" Javascript")); //adiciona a palavra Javascript

// var x =  new String ("Texto dentro da janela flutuante");
// alert(x.indexOf("dentro")); //6

// var x =  new String ("Texto dentro da janela flutuante");
// alert(x.lastIndexOf("janela")); //16

// var x =  new String ("Texto dentro da janela flutuante");
// var re = /Expressão Regular/;
// var re = new RegExp(//Expressão Regular/);

// var re = /x/;
// alert(x.match(re)); //x

// var re = /[a-e]/;
// alert(x.match(re)); //e

// var x =  new String ("Texto dentro da janela flutuante");
// alert(x.replace("janela", "window"));
// alert(x.replace("Texto", "txt"));

// var x =  new String ("Texto dentro da janela flutuante");
// alert(x.substring(5, 8));//de
// alert(x.substr(5, 8));//dentro
// alert(x.slice(1, 4));//ext
// alert(x.split("dentro ")[0]); //texto
// alert(x.split("dentro ")[1]); //da janela flutuante
// alert(x.split("dentro ")[2]); //undefined

// var x =  new String ("Texto dentro da janela flutuante");
// alert(x.toLowerCase()); //minúsculo
// alert(x.toUpperCase()); //MAIÚSCULO

// var x =  new String ("Texto dentro da janela flutuante");
// document.write(x.blink() + "<br>");
// document.write(x.big() + "<br>");
// document.write(x.sup() + "<br>");
// document.write(x.strike() + "<br>");
// document.write(x.bold() + "<br>");
// document.write(x.italics() + "<br>");
// document.write(x.small() + "<br>");
// document.write(x.link("https://gooogle.com.br") + "<br>");
// document.write(x.fontcolor("orange") + "<br>");


//------------------>Objeto Array<-----------------------------

// var paises = new Array("Brasil", "Rússia", "Índia", "China");
// alert(paises); //Brasil,Rússia,Índia,China
// alert(paises[2]); //Índia
// paises[0] = "BRAZIL";
// alert(paises); //BRAZIL,Rússia,Índia,China

// var paises = new Array("Brasil", "Rússia", "Índia", "China");
// alert(paises.length); //4
// for(var i=0; i<paises.length; i++){
	// alert(paises[i]);
// }

// var paises = new Array("Brasil", "Rússia", "Índia", "China", "Brasil");
// alert(paises.indexOf("Rússia")); //1
// alert(paises.lastIndexOf("Brasil"));
 
// Sintaxe Literal - Efetivamente criando um objeto do tipo Array
// var paises = ["Brasil", "Rússia", "Índia", "China", "Brasil"];

// var s = "Açaí";
// alert(s[1]);//Ç

// for(var i=0; i<s.length; i++){
	// alert(s[i]);
// }

// var paises = new Array();
// paises[0] = "Brasil";
// paises[1] = "Rússia";
// paises[2] = "Índia";
// paises[3] = "China";
// alert(paises); //Brasil,Rússia,Índia,China
 
// var paises = ["Brasil", "Rússia", "Índia", "China"];
// alert(paises.reverse()); //China,Índia,Rússia,Brasil
// alert(paises.sort());// Brasil,China,Rússia,Índia
// alert(paises.join(" - "));// Brasil - Rússia - Índia - China
// alert(paises.concat("EUA", "Argentina"));//Brasil,Rússia,Índia,China,EUA,Argentina

// var frutas = ["cupuaçú", "banana", "graviola", "açaí", "laranja"];
// alert(frutas.slice(3));// açaí,laranja
// alert(frutas.slice(2, 4));// graviola,açaí
// alert(frutas.splice(2, 2, "abacate", "acerola", "umbu", "maçã" ));// graviola,açaí
// alert(frutas);// cupuaçú,banana,abacate,acerola,umbu,maçã,laranja

// var pessoas = ["Ricardo", "Sandra", "Beatriz", "Lawrence"];
// alert(pessoas.push("Janaína"));// 5
// alert(pessoas);// Ricardo,Sandra,Beatriz,Lawrence,Janaína

// alert(pessoas.shift(""));// Ricardo
// alert(pessoas);// Sandra,Beatriz,Lawrence

// alert(pessoas.pop(""));// Lawrence
// alert(pessoas);// Ricardo,Sandra,Beatriz

// alert(pessoas.unshift("Furão"));// Adiciona no início da fila
// alert(pessoas);// Furão,Ricardo,Sandra,Beatriz,Lawrence

//------------------>Objeto Array Avançado<-----------------------------
//var pessoas = new Array();
/* var pessoas = 
[
	["Ricardo","M"],
	["Sandra","F"]
];
pessoas[0] = new Array("Ricardo", "M");

alert (pessoas[0][0]);
alert (pessoas[0][1]);
alert (pessoas[1][0]);
alert (pessoas[1][1]); */

/* var pessoas = 
[
	[["XTI", "Tecnologia"], "M"],
	["Sandra","F"]
];
alert (pessoas[0][0][0]);
 */
 
//------------------>Objeto Array Associativo<-----------------------------

// var pessoas = {nome:"Beatriz", cidade:"Brasília"};
// alert(pessoas.nome);
// alert(pessoas["nome"]);

//------------------>Objeto Array Avançado II<-----------------------------


// var frutas = ["cupuaçú", "banana", "graviola", "açaí", "laranja"];

// function todos(elem, ind, obj){
	// return(typeof elem == "string");
// }
// alert(frutas.every(todos));//true

// var frutas = ["cupuaçú", "banana", "graviola", 1,  "açaí", "laranja"];
// function todos(elem, ind, obj){
	// return(typeof elem == "string");
// }
// alert(frutas.every(todos));//false
 
// var frutas = ["cupuaçú", "banana", "graviola", 1,  "açaí", "laranja"];
// function todos(elem, ind, obj){
	// return(typeof elem == "number");
// }
// alert(frutas.some(todos));//true

// var frutas = ["cupuaçú", "banana", "graviola",  "açaí", "laranja"];
// function todos(elem, ind, obj){
	// return(elem.indexOf("an") > 0);// indexOf só funciona com String
// }
// alert(frutas.filter(todos));// banana,laranja

// var frutas = ["cupuaçú", "banana", "graviola",  "açaí", "laranja"];
// function todos(elem, ind, obj){
	// return(elem = elem.toUpperCase());
// }
// alert(frutas.map(todos)); //CUPUAÇÚ,BANANA,GRAVIOLA,AÇAÍ,LARANJA

// var frutas = [10, 23, 45, 67, 89, 01];
// function todos(elem, ind, obj){
	// return(elem = elem * 12);
// }
// alert(frutas.map(todos)); //120,276,540,804,1068,12

//------------------>Objeto Date<-----------------------------

// var data = new Date("Jul-22-2014 04:30:20:05");
// alert(data);
// alert(data.getHours()); //retorna as horas locais
// alert(data.getUTCHours()); //retorna as horas do UTC

// var dias = ["dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
// alert(dias[data.getDay()]);//dia da semana 0 a 6)

// alert(data.getFullYear()); //ano com 4 dígitos
// alert(data.getDate());//dia do mês
// alert(data.getMilliseconds()); //retorna os milissegundos
// alert(data.getMinutes()); //retorna os minutos
// alert(data.getSeconds()); //retorna os segundos

// var mes = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
// alert(mes[data.getMonth()]); //retorna os meses de 0 a 11

// alert(data.getTime()); //total de milissegundos desde o tempo inicial suportado 01-01-1970
// alert(data.getTimezoneOffset()); //diferença entre utc e hora local
// alert(Date.parse(data)); //quantidade de milissegundos do obj Date

// data.setFullYear(2016); //altera o ano
// alert(data); //Fri Jul 22 2016 04:30:20 GMT-0400 (Horário Padrão do Amazonas)

// data.setDate(28); //altera o dia
// alert(data); //Mon Jul 28 2014 04:30:20 GMT-0400 

// data.setMonth(3); //altera o mês
// alert(data); //Tue Apr 22 2014 04:30:20 GMT-0400 

// alert(data.toDateString()); // escreve a data Tue Jul 22 2014
// alert(data.toLocaleDateString()); // 22/07/2014

//------------------>Objeto Math<-----------------------------

// alert(2 * Math.PI *30); //188.49555921538757
// alert(Math.abs(-3.5)); //3.5
// alert(Math.max(2, 3.7, -5, 9, 1)); //9
// alert(Math.min(2, 3.7, -5, 9, 1)); //-5
// alert(Math.round(3.6)); //arredonda para o mais próximo - 4
// alert(Math.floor(3.6)); //arredonda para baixo - 3
// alert(Math.ceil(3.6)); //arredonda para cima - 4
// alert(Math.pow(2,6)); //exponenciação - 64
// alert(Math.sqrt(25)); //raiz quadarada - 5

// alert(Math.random()); //número aleatório 0 a 1
// alert(Math.random()*10); //número aleatório 0 a 10
// alert(Math.floor(Math.random()*10 + 1)); //número inteiro aleatório 1 a 10

// alert(Math.exp(3)); //número de Euler elevado a n
// alert(Math.log(3)); //log de n
// alert(Math.sin(3)); //valor do seno de um ângulo
// alert(Math.cos(3)); //valor do coseno de um ângulo
// alert(Math.asin(0)); //valor do radianus representando o arco do seno informado
// alert(Math.asin(0)); //valor do radianus representando o arco do coseno informado
//alert(Math.atan(0)); 
//alert(Math.atan2(0));

