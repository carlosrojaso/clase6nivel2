var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    function hola() {
        return "Hola";
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

var instance1 = Singleton.getInstance();

var instance2 = Singleton.getInstance();

if(instance1 === instance2){ 
alert("Misma Instancia");
}
else{
alert("No es la misma instancia");    
}