$(document).ready(function() {
	
	arreglo=new Array();
	var num;
	var contador=0;

	// funcion para agregar numeros
	function  agregar(){ 
		num=$('#txt_numero').val();  //almacenar el valor del input text
		if (isNaN(num) || num=="") {  //validando si lo ingresado son números
			//alert("Ingresar un número");
			$('#alerta').slideDown(300).delay(1000).slideUp(1000);
			$('#txt_numero').val("");
			$('#txt_numero').val("").focus();

		} else{
			// Evitar ingresar numeros repetidos
			for (var z = 0; z < arreglo.length; z++) {
				if (arreglo[z]==num) {
					$('#alerta2').slideDown(300).delay(1000).slideUp(1000);
					$('#txt_numero').val("");
					$('#txt_numero').val("").focus();
					return false;  
				}
			}
			arreglo[contador]=parseInt(num);  // almacenar en array como valor enteros
			$('#cont_numeros').append('<div class="caja_num">' + arreglo[contador] + '</div>');  //imprimimos los elementos en forma de div
			contador++;
			}
		$('#txt_numero').val("").focus();
	};

	// llamando funcion agregar
	$('#btn_agregar').click(function(){
		return agregar();
	});

	// usando evento tecla enter en boton y llamando a funcion agregar()
	$('#btn_agregar').keypress(function(event){
    if(event.keyCode == 13){
        event.preventDefault();
        agregar(); 
    }
});


	$('#btn_ordenar').click(function(){
		//llamamos la función mandando 0 en el primer parametro
	 	//y mandando la longitud del arreglo -1
		 quicksort(0,(arreglo.length-1));
	});

	//funcion que plasma el arreglo para poder ser visualizado
	function arreglo_ordenado(){
	    //borramos el contenido del div del contenido
	    $("#cont_numeros").html("");
	 
	    //imprimimos los elementos en forma de div
	    for(r=0; r<arreglo.length; r++){
	 	        //anexamos un div con clase bloque
	        $('#cont_numeros').append('<div class="caja_num2">' + arreglo[r] + '</div>');
	        setTimeout(function() {
	        	$(".caja_num2").css('background-color', '#FA7B0B');
	    	},1000);
	    }
 	}

	//función quicksort para ordenamiento
	function quicksort(primero,ultimo){
    //definimos variables indices
    i = primero
    j = ultimo
 
    //sacamos el pivote de la mitad del arreglo
    pivote = arreglo[parseInt((i+j)/2)];
 
    iteracionQS(i,j,pivote,primero,ultimo)  //llamamos a la funcion que suplanta al while
	}

	//funcion que suplanta el while y se llama recursivamente
	function iteracionQS(i,j,pivote,primero,ultimo){
 
        //mientras arreglo[i] sea menor a pivote
        while(arreglo[i]<pivote)
            i++;
        //mientras j sea mayor a pivote
        while(arreglo[j]>pivote)
            j--;

        //si el indice i es menor o igual a j entonces intercambiamos
        if(i<=j){
 
            //variable temporal auxiliar para guardar valor de arreglo[j]
            aux=arreglo[j];
 
            //intercambiamos los valores de arreglo[j] y arreglo[i]
            arreglo[j] = arreglo[i]
            arreglo[i] = aux
 
            // incrementamos y decrementamos i y j
            i++;
            j--;
 
            arreglo_ordenado(arreglo);
        }

        //repetimos
	    if(i<j){
	        //hacemos una pausa de medio segundo
	        setTimeout(function(){
	            iteracionQS(i,j,pivote,primero,ultimo)
	        },500);
	    }else{
	         //si primero es menor a j llamamos la funcion nuevamente
	         if(primero<j){
		        //pausa de medio segundo
		        setTimeout(function(){
		        quicksort(primero,j);
		         },500);
	         }

	         //si ultimo es mayor que i llamamos la funcion nuevamente
	        if(ultimo>i){
	            //pausa de medio segundo
		        setTimeout(function(){
		        quicksort(i,ultimo)
	         	},500);
	        }
	   	}
	}  

});





		


