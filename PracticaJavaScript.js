const para = document.querySelector('p');
 
para.addEventListener('click', ModificarNombre);
 
function ModificarNombre() {
  let nombre = prompt('Ingresa tu nombre');
  let anioNac = prompt('Ingresa tu año de nacimiento');
  let edad = 2022 - anioNac;
  para.textContent = 'Hola soy ' + nombre + ' y tengo ' + edad;
}
//Ambitos
if (true) {
    var x = 5;
  }
  console.log(x);  // x es 5
 
  if (true) {
    let y = 5;
  }
  //console.log(y); // ReferenceError: y no está definida

  //Este es un comentario unilinea
/**
 * Este es un comentario multilinea
 * Tipos de datos: 
Undefined: typeof instance === "undefined"
Boolean: typeof instance === "boolean"
Number: typeof instance === "number"
String: typeof instance === "string"
BigInt: typeof instance === "bigint"
Symbol: typeof instance === "symbol"
 */
let VariableTipo1 = 42;    // VariableTipo1 ahora es un número
VariableTipo2     = 'bar'; // VariableTipo2 ahora es un string
VariableTipo3     = true;  // VariableTipo3 ahora es un booleano
 
console.log(VariableTipo3); // Registrará el valor en la consola