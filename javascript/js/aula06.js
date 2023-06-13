// Estudo dos operadores do Javascript

/* //operador unário
alert(-2)//-2;

//operador binário
//um operando, um operador e outro operando
alert(2+3);//5

//operador ternário
alert(1+2+3);//6 */

/* var meuInt = 5;
var meuFloat = 6.667;

alert(meuInt+meuFloat); //11.667 */


/*alert("oi " + "2")//oi 2;
alert("oi " - "2")//NaN;
alert("oi " * "2")//NaN;
alert("oi " / "2")//NaN; */

/* alert(4%2);//0 é par
alert(5%2);//1 é ímpar */

/* var x= -(+2);
alert(x);//-2
var x= -(-2);
alert(x);//+2 */

/* var x = 6;
var y = ++x;
alert("X = " + x + "\nY = " + y);//X = 7 Y = 7 */

/* var x = 6;
var y = x++;
alert("X = " + x + "\nY = " + y);//X = 7 Y = 6 */

/* var x = 6;
var y = --x;
alert("X = " + x + "\nY = " + y);//X = 5 Y = 5 */

/* var x = 6;
var y = x--;
alert("X = " + x + "\nY = " + y);//X = 5 Y = 6 */


/* var x = 6;
alert(x==6);//true */

/* var x = 6;
alert(x==9);//false */

/* var x = 6;
alert(x=="6");//true */

/* var x = 6;
alert(x==="6");//false pois retorna também se o tipo de dado é igual */

/* var x = 6;
alert(x!=6);//false */

/* var x = 6;
alert(x!=5);//true */

/* var x = 6;
alert(x!="6");//false */

/* var x = 6;
alert(x!=="6");//true são diferentes pois o tipo de dado é diferente */

/* var x = 6;
alert(x>7);//false */

/* var x = 6;
alert(x<7);//true */

/* var x = 6;
alert((x>=1) && (x<=10));//true */

/* var x = 6;
alert((x>=1) && (x<=5));//false */

/* var x = 6;
alert((x>=1) || (x<=10));//true */

/* var x = 6;
alert((x>=1) || (x<=5));//true */

/* var x = 6;
alert((x>=1));//true */

/* var x = 6;
alert(!(x>=1));//false */


//operadores de atribuição

/* var x = 6;
x = x + 3;
alert(x);//9 */

/* var x = 6;
x += 3;
alert(x);//9 */

/* var x = 6;
x *= 3;
alert(x);//18 */

/* var x = 6;
x /= 3;
alert(x);//2 */

/* var x = 6;
x -= 3;
alert(x);//3 */


//operadores especiais

//?: Operador ternário

/* var idade = 21;
x = (idade>=18)?"Maior de Idade" : "Menor de Idade";
alert(x); //Maior de Idade */


//, Separa expressões avaliadas

/* var idade = 21, sexo = "Masculino", nacionalidade = "Brasileiro";
x = (idade>=18)?"Maior de Idade \n" + sexo + " \n" + 
nacionalidade + " \n" : "Menor de Idade \n" + sexo + " \n" + 
nacionalidade + " \n";
alert(x);  */

//delete Apaga o operando

/* Pessoa = {
		nome: "Fulano"
}
alert(Pessoa.nome);//Fulano
delete Pessoa.nome;
alert(Pessoa.nome);//undefined */

//in Indica se existe a propriedade especificada

/* Pessoa = {
		nome: "Fulano"
}
alert("nome" in Pessoa);//true
alert("email" in Pessoa);//false */

//instanceof Indica se o objeto é do tipo especificado

/* var idade = new Number(31);
alert(idade instanceof Number);//true */

/* var idade = new Number(31);
alert(idade instanceof String);//false */

//new Cria nova instância do objeto

/* var idade = new Number(31);
alert(idade);//31 */

//this Referência ao objeto atual

/* alert(this.document.title);//Javascript Aula 06 */

//typeof Retorna o tipo de operando

/* alert(typeof(3));//number

alert(typeof(true));//boolean

alert(typeof(function(){}));//function */

//( ) Chama uma função

/* alert("Chamou o alerta); */