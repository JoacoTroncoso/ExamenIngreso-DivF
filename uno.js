
function mostrar()
{
 let tipo;
 let precio;
 let cantUnidades;
 let categoria;
 let marca;

 let promedioAl;
 let promedioIac;
 let promedioQuat;
 let contAl = 0;
 let contIac = 0;
 let contQuat = 0;
 let cantAlc = 0;
 let cantIac = 0;
 let cantQuat = 0;

 let contDesin = 0;
 let contBac = 0;
 let contDet = 0;
 let mayorTipo;

 let contPrecioDet = 0;

 let maxFabr = 0;
 let maxCat = 0;

 let i = 0;
 let flag = 0;
 let precioCaro = 0;

 do{
   tipo = prompt("Ingrese el tipo de producto: ");
   while(!(tipo == "ALCOHOL" || tipo == "IAC" || tipo == "QUAT")){
   tipo = prompt("Error. Ingrese el tipo de producto: ");
   }
   precio = parseInt(prompt("Ingrese el precio: "));
   while((precio < 100 && precio > 300) || isNaN(precio)){
   precio = parseInt(prompt("Error. Ingrese el precio: "));
   }
   cantUnidades = parseInt(prompt("Ingrese la cantidad de  unidades: "));
   while((cantUnidades <= 0 && cantUnidades > 1000) || isNaN(cantUnidades)){
   cantUnidades = parseInt(prompt("Error. Ingrese la cantidad de  unidades: "));
   }
   categoria = prompt("Ingrese categoria: ");
   while(!(categoria == "desinfectante" || categoria == "bactericida" || categoria == "detergente")){
	categoria = prompt("Ingrese categoria: ");
   }
   fabricante = prompt("Ingrese fabricante: ");

   switch(tipo){
     case "ALCOHOL":
       cantAlc += cantUnidades;
       contAl ++;
       break;
       
     case "IAC":
       cantIac += cantUnidades;
       contIac ++;
       break;
       
     case "QUAT":
       cantQuat += cantUnidades;
       contQuat ++;
       break;  
   }
   switch(categoria){
     case "desinfectante":
       contDesin += cantUnidades;
       break;
     case "bactericida":
       contBac += cantUnidades;
       break;
     case "detergente":
       contDet += cantUnidades;
       break;
   }
   if(categoria == "detergente" && precio <= 200){
     contPrecioDet++;
   }
   if(flag == 0 || precioCaro < precio){
     precioCaro = precio;
     maxCat = categoria;
     maxFabr = fabricante;
     flag = 1;
   }


   i++;
 }while(i < 5)
 promedioAl = cantAlc / contAl;
 promedioIac = cantIac / contIac;
 promedioQuat = cantQuat / contQuat;

 if(contDesin > contBac && contDesin > contDet){
   mayorTipo = categoria;
 }
 else if( contBac >= contDesin && contBac > contDet){
   mayorTipo = categoria;
 }
 else{
   mayorTipo = categoria;
 }
 alert("a. Promedio del ALCOHOL: " + promedioAl);
 alert("a. Promedio del IAC: " + promedioIac);
 alert("a. Promedio del QUAT: " + promedioQuat);
 alert("b. La categoria con mas cantidad de unidades: " + mayorTipo);
 alert("c. Unidades de detergente: " + contPrecioIac);
 alert("d. De los mas caros de los prductos. Fabricante: " + maxFabr + " y Ctegoria: " + maxCat);


}
