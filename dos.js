function mostrar()
{
  let nombre;
	let situacionLaborar;
	let cantMaterias;
	let sexo;
	let notaPromedio;
	let edad;
	let flagViejo = 0;
	let flagNota = 0;
	let nombreViejo;
	let nombrePromedio;
	let notamax = 0;
	let mayorEdad = 0;
	let promedioB;
	let promedioT;
	let promedioE;
	let acumB = 0;
	let acumT = 0;
	let acumE = 0;
	let contB = 0;
	let contT = 0;
	let contE= 0;
	let flagMaterias = 0;
	let seguir;
  let menosMaterias;
  let menosEdad;




	do{
		nombre = prompt("Ingrese el nombre: ");
		situacionLaborar = prompt("Ingrese la situacion laboral: ");
      while(!(situacionLaborar == "buscando" || situacionLaborar == "trabajando" || situacionLaborar == "solo estudiante")){
      situacionLaborar = prompt("Error. Ingrese la situacion laboral: ");
     }
      
      cantMaterias = parseInt(prompt("Ingrese la cantidad de  materias: "));
      while((cantMaterias < 1 && cantMaterias > 8) || isNaN(cantMaterias)){
      cantMaterias = parseInt(prompt("Error. Ingrese la cantidad de  materias: "));
     }
     sexo = prompt("Ingrese el sexo: ");
      while(!(sexo == 'm' || sexo == 'f' || sexo == 'no binario')){
      sexo = prompt("Error. Ingrese el precio: ");
     }
     notaPromedio = parseInt(prompt("Ingrese nota promedio: "));
     while(notaPromedio < 0 && notaPromedio > 10){
     notaPromedio = parseInt(prompt("Error. Ingrese nota promedio: "));
     }
     edad = parseInt(prompt("Ingrese edad: "));

     if((flagNota == 0 || notamax < notaPromedio) && situacionLaborar == "solo estudiante"){
	   notamax = notaPromedio;
	   nombrePromedio = nombre;
	   flagNota = 1;
     }
     switch(situacionLaborar){
       case "buscando":
         acumB += notaPromedio;
         contB++;
         break;
       case "trabajando":
         acumT += notaPromedio;
         contB++;
         break;
       case "solo estudiante":
         acumE += notaPromedio;
         contE++;
         break;    
        
        }

     if((flagViejo == 0 || mayorEdad < edad) && situacionLaborar == "solo estudiante"){
	   mayorEdad = edad;
	   nombreViejo = nombre;
	   flagViejo = 1;
     }
     
	 if((flagMaterias == 0 || menosMaterias > cantMaterias) && situacionLaborar == "buscando"){
		menosMaterias = cantMaterias;
		menosEdad = edad;
		menosNombre = nombre;
		flagMaterias = 1
	 }


     seguir = prompt("Desea agregar algun dato?: ");
	}while(seguir == 's');

	promedioB = acumB / contB;
	promedioE = acumE / contE;
	promedioT = acumT / contT;

	alert("a. El nombre del mejor promedio Estudiante: " + nombrePromedio);
	alert("b. El nombre del mas viejo de Estudiante: " + nombreViejo);
	alert("c. El promedio de nota de los que Buscan: " + promedioB);
  alert("c. El promedio de nota de los que Trabajan: " + promedioT);
  alert("c. El promedio de nota de los que solo Estudian: " + promedioE);
	alert("La edad y nombre del que cursa menos materias y busca trabajo: " + menosEdad + " y " + menosNombre);
}
