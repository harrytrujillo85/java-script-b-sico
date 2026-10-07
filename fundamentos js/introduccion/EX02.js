let a, b;
let c, d;

let suma, resta, mult, div, residuo, potencia;

a = prompt(`Ingrese un numero: `)
b = prompt(`Ingrse otro numero: `)

suma = Number(a) + Number(b);
document.write("La suma es: ", suma, "<br>");
console.log("La suma es: ", suma);

resta = a - b;
document.write("La resta es: ", resta, "<br>");
console.log("La resta es: ", resta);

mult = a * b;
document.write("La multiplicacion es: ", mult, "<br>");
console.log("La multiplicacion es: ", mult);

residuo = a % b;
document.write("el residuo es: ", residuo, "<br>");
console.log("El residuo es: ", residuo);

div = a / b
document.write("La divicion es: ", div, "<br>");
console.log("La divicion es: ", div);

potencia = a ** b;
document.write("La poencia es: ", potencia, "<br>");
console.log("La potencia es: ", potencia);


c = parseInt(prompt(`Ingrese un numero: `));
d = parseInt(prompt(`Ingrese otro numero: `));

suma = c + d
resta = c - d
mult = c * d
div = c / d
residuo = c % d
potencia = c ** d

document.writeln("Los resultados de las operaciones son: ", 
  "suma: ", suma, `<br>`, 
  "resta: ", resta, `<br>`, 
  "multiplicacon: ", mult, `<br>`,
  "Divicion: ", div, `<br>`, 
  "residuo: ", residuo, `<br>`, 
  "potencia: ", potencia, `<br>`,
);

document.log("Los resultados de las operaciones son: ", 
  "suma: ", suma, 
  "resta: ", resta, 
  "multiplicacon: ", mult, 
  "Divicion: ", div, 
  "residuo: ", residuo, 
  "potencia: ", potencia
);




