/*
Crear un array de peliculas 
Crear una funcion que agrege una pelicula al array de peliculas 
La pelicula debera tener un ID y un Titulo 
Crear una funcion que evalue antes de agregar que la pelicula no fue ingresada previamente 
Crear una funcion que ordene las peliculas por Titulo y por ID 
Crear una funcion que elimine una pelicula por su ID. 


falta validar datos de entrada y hacer una funcion para mostrar el menu con opciones 
*/

var identificador = 0;
var peliculas = new Array();

var Pelicula = function(){
	this.id = 0;
	this.titulo = "";
	this.setId = function(id){
		this.id = id;
	}
	this.getId = function() { return this.id }
	this.setTitulo = function(titulo) { this.titulo = titulo }
	this.getTitulo = function() { return this.titulo }
}

function buscarPelicula(titulo){
	var existe = -1;
	for(var x in peliculas){
		if(titulo == peliculas[x].titulo){
			existe = x;
		}
	}
	return existe;
}

function ordenarPeliculas(objPeli){
	
	//ordenando peliculas por id
	peliculas.sort(function (a, b) {
	  	if (a.id > b.id) {
	    	return 1;
	  	}
	  	
	  	if (a.id < b.id) {
	    	return -1;
	  	}
	  	// a must be equal to b
	  		return 0;
	});

	document.write("Peliculas ordenadas por ID" + "<br />");
	//peliculas.sort(); 
	
	for(var y in peliculas){
		document.write("id: " + peliculas[y].id + " | " + "titulo: " + peliculas[y].titulo + "<br />");
	}	

	peliculas.sort(function (a, b) {
	  	if (a.titulo > b.titulo) {
	    	return 1;
	  	}
	  	
	  	if (a.titulo < b.titulo) {
	    	return -1;
	  	}
	  	// a must be equal to b
	  		return 0;
	});

	document.write("<br />");
	document.write("Peliculas ordenadas por Título" + "<br />");

	for(var y in peliculas){
		document.write("id: " + peliculas[y].id + " | " + "titulo: " + peliculas[y].titulo + "<br />");
	}

	//leer esto: https://davidwalsh.name/array-sort
	//leer esto:  http://fiddle.jshell.net/BumbleB2na/s8HwU/
	//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort

}

function eliminarPeliculas(id){
	for(var y in peliculas){
		if(id == peliculas[y].id){
			delete peliculas[y];
		}
	}

	alert("Se ha eliminado la pelicula");
	alert("Las peliculas que existen aun son: ");
	for(var y in peliculas){
		alert("id: " + peliculas[y].id + " | " + "titulo: " + peliculas[y].titulo + "\n");
	}
}

function agregarPelicula(objPeli){
	console.log(objPeli.getId() + " " + objPeli.getTitulo());
	peliculas.push(objPeli);
	console.log(objPeli);
}

function mostrarPeliculas(){
	var identificador = -1;
	alert("Las peliculas ingresadas son: " + "\n");
	for(var y in peliculas){
		alert("id: " + peliculas[y].id + " | " + "titulo: " + peliculas[y].titulo + "\n");
	}
	identificador = parseInt(prompt("Ingrese el ID de la pelicula a eliminar: "));
	if(identificador != -1){
		eliminarPeliculas(identificador);
	}
}

function principal(){
	var titulo;
	var op = 0;
	var existe = 0;
	do{
		identificador++;
		alert("Se ha generado el ID " + identificador + " para su película");
		var peli = new Pelicula();
		do{
			titulo = prompt("Ingrese el título: ");
			existe = buscarPelicula(titulo);
			if(existe > -1){
				alert("La película ya existe. Por favor, ingrese otro título");
			}
		}while(existe > -1);
		peli.setId(identificador);
		peli.setTitulo(titulo);
		agregarPelicula(peli);
		op = prompt("¿Desea agregar otra película (s/n): ").toLowerCase();
		if(op != 's' && op !='n'){
			alert("La opción ingresada no es válida");
		}
		//reparar la perdida del id generado cuando ingresan una opcion no valida.
	}while( (op != 's' && op !='n') || op == 's');

	do{
		op = parseInt(prompt("1- Ordenar Peliculas \n 2- Eliminar Pelicula \n Ingrese su opción: "));
		if(op < 1 || op > 3){
			alert("Opción no válida.");
		}
	}while(op < 1 || op > 3);

	switch(op){
		case 1:
			ordenarPeliculas(peli);
		break;

		case 2:
			mostrarPeliculas();
		break;
	}
	
} //cierre funcion principal


principal();