//Sección 3: Profundizando objetos

//Arreglos Parte 1

var arr =  [5, 4, 3, 2, 1];

console.log(arr);

console.log(arr[0], arr[4]);

arr.reverse();
console.log(arr);

arr = arr.map( function (elem){
    elem *= 2;
    return elem;
});

console.log(arr);

/* arr = arr.map(Math.sqrt);
console.log(arr); */

arr = arr.join("|");
console.log(arr);

arr = arr.split("|");
console.log(arr);

//última posición del arreglo
arr.push("6");
console.log(arr);

//Primera posición del arreglo

arr.unshift("0");
console.log(arr);

//Coloca la representación textual del arreglo
console.log(arr.toString());

//eliminar el último elemento del arreglo
var elimine = arr.pop();
console.log(arr, elimine);

//Puede recibir n parametros, tiene que ser un número que indica la posición del arreglo (primer parametro)
//El segundo paramétro es lo que se quiere eliminar de esa posición o varias posiciones
/* arr.splice(1, 1);
console.log(arr);

arr.splice(1, 3);
console.log(arr); */

//El tercer paramétro se pueden ingresar otros paramétros o valores
arr.splice(1, 1, "10", "20", "30");
console.log(arr);


//Es la función opuesta a la anterior, esta corta

arr = arr.slice(3,3);
console.log(arr);

