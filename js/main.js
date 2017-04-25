function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesión";
}

translate();

function imprime(){
	var impEmail = document.getElementById('inputEmail').value;
	var impPassword = document.getElementById('inputPassword').value;
		alert("El correo es: " + impEmail + " " + "La contraseña es: " + impPassword);
}
