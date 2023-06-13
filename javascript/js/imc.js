function calcularIMC(){
	var formulario = document.getElementById("formulario");
	
	var peso = formulario.peso.value;
	var altura = formulario.altura.value;
	var classificacao = formulario.classificacao.value;
	var imc = (peso / ((altura*altura)/100))*100;
	
	formulario.imc.value = imc.toFixed(2);
	
	if(imc<20){
		formulario.classificacao.value = "Abaixo do Peso";
	}else if(imc >= 20 && imc < 25){
		formulario.classificacao.value = "Peso Ideal";
	}else if(imc >= 25 && imc < 30){
		formulario.classificacao.value = "Sobrepeso";
	}else if(imc >= 30 && imc < 35){
		formulario.classificacao.value = "Obesidade Moderada";
	}else if(imc >= 35 && imc < 40){
		formulario.classificacao.value = "Obesidade Severa";
	}else if(imc >= 40 && imc < 50){
		formulario.classificacao.value = "Obesidade Mórbida";
	}else{
		formulario.classificacao.value = "Super Obesidade";
	}
	
}