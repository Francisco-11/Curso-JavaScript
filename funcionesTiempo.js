//Tiene dos funciones para manejar tiempo
//1 cuando queremos ejecutar un codigo cuando pasa x cantidad de tiempo
//2 cuando queremos que ese código en particular se repita x cantidad de veces en n segundos

//1

/* setTimeout(function(){
    console.log("Paso un segundo");
},1000);
 */
//2

/* var segundos = 0;

var interval = setInterval(function(){
    segundos ++;
    console.log("seg", segundos);

    if(segundos === 3 ){
        clearInterval( interval);
    }
},1000)
 */

 var juan = {
     nombre: "Francisco",
     edad: 30,
     imprimir: function(){

        var self = this;

         setTimeout(function(){
             console.log(self);
             console.log(self.nombre, self.edad);
         },1000);
     }
 };

 juan.imprimir();