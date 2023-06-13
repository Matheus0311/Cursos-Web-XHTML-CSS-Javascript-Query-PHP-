
function validar(){
	var formulario = document.getElementById("formulario");
	var cpf = formulario.cpf;
	var email = formulario.email;
	
	var re_email = /\S+@\S+\.\S+/;
	var re_cpf = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
	
	if(re_cpf.test(cpf.value)){
		alert("CPF Válido");
		cpf.value = cpf.value.replace(re_cpf, "$1.$2.$3-$4");
	}else{
		alert("CPF Inválido");
	}
	if(re_email.test(email.value)){
		alert("E-mail Válido");
	}else{
		alert("E-mail Inválido");
	}
}
