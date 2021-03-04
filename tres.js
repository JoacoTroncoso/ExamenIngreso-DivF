function mostrar()
{
	let nombre;
	let obraSocial;
	let sexo;
	let edad;
	let temperatura;
	let precio = 600;
	let contOsde = 0;
	let flagJoven = 0;
	let maxJoven = 0;
	let nombreJoven;
	let tempJoven;
	let precioViaje;
	let contPasaj = 0;
	let siempre;
	let pasajPami = 0;
	let descuento;

	do{
		nombre=prompt("Nombre:");
		obraSocial=prompt("Ingrese su obra social: ");
		while(!(obraSocial == "PAMI" || obraSocial == "OSDE" || obraSocial == "otras")){
			obraSocial=prompt("Error. Ingrese su obra social: ");
		}
		edad=parseInt(prompt("Edad:"));
		while(isNaN(edad)||edad<17){
			edad=parseInt(prompt("Error. Ingrese una edad válida:"));
		}
		temperatura=parseFloat(prompt("Ingrese Temperatura: "));
		while(isNaN(temperatura)||temperatura <= 0){
			temperatura=parseFloat(prompt("Error. Ingrese una temperatura válida:"));
		}	
		sexo=(prompt("Ingrese Sexo: "));
		while(!(sexo =="f" && sexo =="m")){
			sexo=prompt("Error. Ingrese Sexo: ");
		}	

		if(obraSocial == "OSDE" && edad > 60){
			contOsde++;
		}
		if((flagJoven == 0 || maxJoven > edad) && obraSocial == "PAMI"){
			maxJoven = edad;
			nombreJoven = nombre;
			tempJoven = temperatura;

		}
		if(obraSocial == "PAMI"){
			pasajPami++;
		}
		contPasaj++;
		siempre = prompt("¿Desea agregar algun dato mas?: ");

	}while(siempre == 's');
	precioViaje = contPasaj * precio;

	if(pasajPami > (contPasaj / 2)){
		descuento = precio - precio * 25 / 100;

	}
	alert("A.Personas con osde mas de 60 años: " + contOsde);
	alert("B. nombre: " + nombreJoven + " edad: " + tempJoven);
	alert("c. Viaje total sin descuento: " + precioViaje);
	if(descuento != 0){
		alert("d. " + descuento;)
		
	}
	else{
		alert("d. " + precio);
	}
}
