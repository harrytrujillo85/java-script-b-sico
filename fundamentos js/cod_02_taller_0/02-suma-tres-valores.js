// ============================================================
// EJERCICIO 3 - SUMAR 4 VALORES Y RESTAR EL ÚLTIMO
// Leer 4 valores, sumarlos y a la suma restarle el último valor.
// ============================================================


// Buscamos en el HTML los 4 inputs y la caja del resultado (por su id).

const inputPrimero = document.getElementById("primerValor");
const inputSegundo = document.getElementById("segundoValor");
const inputTercero = document.getElementById("tercerValor");
// const inputCuarto = document.getElementById("cuartoValor");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    // Si falta algún valor no se calcula.
    
    if (inputPrimero.value === "" || inputSegundo.value === "" || inputTercero.value === "") {
        cajaResultado.textContent = "Escribe los 3 valores";
        return;
    }

    // Lo que se escribe en un input es texto: Number() lo convierte en número.
    const primerValor = Number(inputPrimero.value);
    const segundoValor = Number(inputSegundo.value);
    const tercerValor = Number(inputTercero.value);
    // const cuartoValor = Number(inputCuarto.value);

    // Sumar los 4 valores.
    const sumaValores = primerValor + segundoValor + tercerValor;

    // A la suma total se le resta el cuarto valor.
    // const resultadoResta = sumaValores - cuartoValor;

    // Mostrar los resultados en la página.
    cajaResultado.innerHTML =
        "Suma de los 3 valores: <b>" + sumaValores + "</b><br>" 
//         "Suma menos el cuarto valor: <b>" + resultadoResta + "</b>";
}

// Cada vez que se escribe en cualquiera de los inputs, se vuelve a calcular.

inputPrimero.addEventListener("input", calcular);
inputSegundo.addEventListener("input", calcular);
inputTercero.addEventListener("input", calcular);
inputCuarto.addEventListener("input", calcular);