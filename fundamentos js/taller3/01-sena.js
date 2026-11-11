// imprimer 5 veces la palabra SENA

// ciclo FOR (para)
console.log("======CICLO FOR======")
for (let contador = 1; contador <= 5; contador++) {
  // CONTADOR = 1 -> Valor inicial
  // contador <= 5 -> condicion: se repite mientras sea verdadera
  // contador++ -> al finañ de cada vuelta, contador aumenta 1
  console.log("SENA"); // Esto se imprime en cada una de las 5 vueltas 
}

// Ciclo while (mientras)
console.log("======CICLO WHILE======")
let contadorwhile = 1;
while (contadorwhile <= 5) {
  console.log("SENA");
  contadorwhile++;
}


console.log("======CICLO DO WHILE======") 
let contadorDoWhile = 1;
do {
    console.log("SENA");
    contadorDoWhile++
  } while (contadorDoWhile <= 5);
