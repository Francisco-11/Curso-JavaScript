
//Parte 1
/* var nota= 55;

if(nota >= 90){
    console.log("A");
}else if( nota >= 80){
    console.log("B");
}else if( nota >= 70){
    console.log("C");
}else if( nota >= 60){
    console.log("D");
}else{
    if(nota >50)
        console.log("F");
    
        console.log("Algo por aqui");
    
    

}


console.log("Termino el codigo"); */



//Parte 2

//var a = 10;
//var b = 20;

//(a>b)? si es verdadero....si es verdadero el return es a sino b
//una forma
//var c = (a > b)? a : b;
//otra forma
//var c = ( a > b)? function(){
//    console.log("A es nayor a B");
//    return a;
//}() : function(){
//    console.log("B es mayor a A");
//    return b;
//}();
//
//
//console.log(c);


//Parte 3

var a = 10;
var b = undefined;

//tome un valor que este definido y con  un valor, si estan los dos definidos toma el primer valor
var c = a || b;

console.log(c);