function evento (arg){
    console.log("Me disparé");
    console.log(arg);
}

var objeto = document.getElementById("objDemo");

console.log(objeto);

//el on se ocupa del lado dle html

objeto.addEventListener("click",evento);


