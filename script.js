function fibonacci(n) {
  let fibArray = [0, 1];

  for (let i = 2; i < n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }

  return fibArray.slice(0, n);
}

function obtenerNumeroValido() {
  let numero = NaN;

  while (isNaN(numero)) {
    let userInput = prompt("Ingrese la cantidad de números de la serie de Fibonacci que desea ver:");
    numero = parseFloat(userInput);

    if (isNaN(numero)) {
      alert("Por favor, ingrese un número válido.");
    }
  }

  return Math.floor(numero);
}

let n = obtenerNumeroValido();

let fibonacciNumbers = fibonacci(n);

console.log(`Los primeros ${n} números de la serie de Fibonacci son: ${fibonacciNumbers.join(", ")}`);

