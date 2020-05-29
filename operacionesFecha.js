


var fecha = new Date(2016, 9, 20);

/* console.log( fecha );

fecha.setDate(32);
console.log( fecha ); */

Date.prototype.sumarDias = function ( dias ) {
    this.setDate( this.getDate() + dias );
    return this;
}
console.log( fecha );
console.log( fecha.sumarDias(5) );


Date.prototype.sumarAnios = function ( anios ) {
    this.setFullYear( this.getFullYear() + anios );
    return this;
}

console.log( fecha.sumarAnios(5) );