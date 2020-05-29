//Arreglos Parte 2

var arr = [
    true,
    {
        nombre: "Francisco",
        apellido: "Vera"
    },
    function(){
        console.log("Estoy en el arreglo");
    },
    function( persona ){
        console.log(persona.nombre + " " + persona.apellido );
    },
    ["Carlos", "Raul", "Diego", "Luis", 
        [
            "Melissa",
            "FCO",
            "Cony",
            function(){
                console.log( this );
            }
        ]
    ]
];
console.log(arr);
console.log(arr[0]);
console.log(arr[1].nombre + " " + arr[1].apellido);

arr[2]();

arr[3]( arr[1] );

console.log( arr[4][4][1] );

var arreglo2 = arr[4][4];

//Los objetos se pasan por referencia, por lo tanto cambian

arreglo2[1] = "Pedra!";

console.log( arreglo2 );

console.log(arr);
