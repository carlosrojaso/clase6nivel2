/*
Crear el modulo Diario

- El objeto noticia debera contener un id, un titulo, una descripcion y una imagen
- El modulo Debera validar que la noticia no fue ingresada previamente
- El modulo Debera tener la posibilidad de eliminar una noticia por ID
- El modulo Debera tener la posibilidad de ordernar sus noticias
- El modulo debera persistir las noticias creadas en session o local storage, 
por lo tanto cuando recargue deberan volver a aparecer.

http://www.w3schools.com/html/html5_webstorage.asp

*/

var diarioModulo = (function () {
  
//Objeto Noticia

function Noticia (id, titulo, descripcion, imagen) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;

    this.setId = function(){
    };
    this.setTitulo = function() {
    };
    this.setDescripcion = function() {
    };
    this.setImagen = function() {
    };
    this.getId = function(){
    };
    this.getTitulo = function() {
    };
    this.getDescripcion = function() {
    };
    this.getImagen = function() {
    };
};

   // Propiedades Privadas
   var diarioNoticias = [];

  var buscarNoticia = function () {
    // buscar Noticia por si fue agregada

   }; 

  var ordenarNoticias = function(){

  };

  return {
    numeroNoticias: 0,
    agregarNoticia: function (titulo,descripcion,imagen) {
      //metodo publico que agrega Noticia.
      buscarNoticia(titulo);
      ordenarNoticias();
    },
    eliminarNoticia: function(id){
     // metodo publico que elimina noticia.
    },
    imprimirDiario: function(){
    	// imprime todo el arreglo diarioNoticias
    }
	};

  }();

  // Programa usando el modulo


document.write("El numero de noticias hoy es:" + diarioModulo.numeroNoticias);  

diarioModulo.agregarNoticia("Titulo","Descripcion","pic1.jpg");

// ver todas las noticias

diarioModulo.imprimirDiario();
/*
Noticia 1
Titulo
Imagen
Descripcion

Noticia 2
Titulo
Imagen
Descripcion

Noticia 3
Titulo
Imagen
Descripcion
*/

