const validarNumero = (numero) => {
  return new Promise((resolve, reject) => {
    if (numero > 10) {
      resolve('El número es mayor a 10');
    } else {
      reject(new Error('El número es menor o igual a 10'));
    }
  });
};

const miNumero = 5;

validarNumero(miNumero)
  .then((resultado) => {
    console.log(resultado);
    // Continuar con la ejecución del programa
  })
  .catch((error) => {
    console.error(error.message);
    // Continuar con la ejecución del programa
  });

console.log('Continuando con la ejecución del programa...');
console.log("1")
console.log("2")
console.log("3")