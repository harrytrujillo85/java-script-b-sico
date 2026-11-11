// Escriba el factorial de un numero

const n = 5;

console.log("======CICLO FOR======")
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(`El factorial de ${n} es: "`, factorial);



console.log("======CICLO WHILE======")
let facrorialwhile = 1;
let i = 1;
while (i <= n) {
  facrorialwhile *= i;
  i++;
}
console.log(`El factorial de ${n} es: "`, factorialwhile);

