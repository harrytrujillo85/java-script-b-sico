// Equilatero = Los tres lados son iguales
// isosceles = dos lados iguales
// Escaleno = Todos los lados son diferentes

const ladoA = 5;
const ladoB = 6;
const ladoC = 4;

// Primero validamos que ningun lado sea cero o negativo
if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0 ) {
  console.log ("los lados deben ser mayores que cero");
  // "||" es el operador "0" basta con que una de las condiciones se cumpla
} else if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
  // Regla geometrica: la suma de los lados siempre debe ser mayor que el tercer lado, si no, no se puede formar un triangulo real.
  console.log("los valores no forman un triangulo valido");

} else if ( ladoA === ladoB && ladoB === ladoC) {
  // "&&" Esl el operador "Y" Las condiciones evaluadas deben ser verdaderoas
  console.log("El triangulo es EQUILATERO");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
  // si no es equilatero, pero al menos dos de los lados coinciden, el triangulo es Isosceles
  console.log("El triangulo es ISOSCELES");

} else {
  // si no se cumple ninguna de las condiciones anteriores es decir que todos los lados son distintos
  console.log("El triangulo es ESCALENO");
  
}
