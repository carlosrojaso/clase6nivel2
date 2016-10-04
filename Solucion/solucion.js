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

function agregarPelicula(objPeli){
	console.log(objPeli.getId() + " " + objPeli.getTitulo());
	
	if(buscarPelicula(objPeli.getTitulo()) != -1){ console.log("Pelicula existe."); }
	else{
	peliculas.push(objPeli);
	}
	
	//console.log(objPeli);
	for(i in peliculas){
		console.log("Pelicula " + i + " : " + peliculas[i].getTitulo());
	}
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

function ordenarPeliculas(){
	
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
	  	else if (a.titulo < b.titulo) {
	    	return -1;
	  	}
	  	// a must be equal to b
	  	else{
	  		return 0;
	  	}
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


var Movie1 = new Pelicula();
Movie1.setId(1);
Movie1.setTitulo("Shrek");


var Movie2 = new Pelicula();
Movie2.setId(2);
Movie2.setTitulo("Duro de Matar");

var Movie3 = new Pelicula();
Movie3.setId(3);
Movie3.setTitulo("Anabelle");

agregarPelicula(Movie1);
agregarPelicula(Movie3);
agregarPelicula(Movie2);

console.log("Busqueda: " +buscarPelicula(Movie2.getTitulo()));
ordenarPeliculas();
eliminarPeliculas(2);
ordenarPeliculas();


