//fincion para calcular el total de los productos

function calcular() {

//productos cantidad y valor 

	var cantidadpan=document.getElementById("cantipan").value;
	var valorpan=document.getElementById("valpan").value;
	
	var cantidadjabon=document.getElementById("cantijabon").value;
	var valorjabon=document.getElementById("valjabon").value;
	
	var cantidadleche=document.getElementById("cantileche").value;
	var valorleche=document.getElementById("valleche").value;
	
	var cantidadshampoo=document.getElementById("cantishampoo").value;
	var valorshampoo=document.getElementById("valshampoo").value;
	
	var cantidadhuevos=document.getElementById("cantihuevos").value;
	var valorhuevos=document.getElementById("valhuevos").value;
	
	var cantidadcremadental=document.getElementById("canticrema").value;
	var valorcremadental=document.getElementById("valcrema").value;
	
//operaciones cantidad y valor

	subtpan=cantidadpan*valorpan; 
	subtjabon=cantidadjabon*valorjabon;
	subtleche=cantidadleche*valorleche;
	subtshampoo=cantidadshampoo*valorshampoo;
	subthuevos=cantidadhuevos*valorhuevos;
	subtcremadental=cantidadcremadental*valorcremadental;

// sub total 1 y 2
	
	var subtotal1=subtpan+subtleche+subthuevos;
	var subtotal2=subtjabon+subtshampoo+subtcremadental;
	
	document.getElementById("subtotal1").value = subtotal1;
	document.getElementById("subtotal2").value = subtotal2;
	
	
// iva	1 y 2 
	
	var iva1=document.getElementById("valiva1").value;
	var iva2=document.getElementById("valiva2").value;
	
	subiva1= calculariva(subtotal1,iva1);
	subiva2= calculariva(subtotal2,iva2);
	
	document.getElementById("iva1").value = subiva1;
	document.getElementById("iva2").value = subiva2;
	
//total factura

	var subtotalfinal=document.getElementById("subtotalfinal").value;
	var ivafinal=document.getElementById("ivafinal").value;
	var totalfactura=document.getElementById("totalfactura").value;
	
	var subtotalfinal=subtotal1+subtotal2;
	var ivafinal=subiva1+subiva2;
	var totalfactura=subtotalfinal+ivafinal;
	
	document.getElementById("subtotalfinal").value = subtotalfinal;
	document.getElementById("ivafinal").value = ivafinal;
	document.getElementById("totalfactura").value = totalfactura;

	}
	
//funcion para calcular iva	
	
	function calculariva(sub,iva){
		
		ivacalculado = ((sub*iva)/100);
		
		return ivacalculado;
		
	}
	
	
	