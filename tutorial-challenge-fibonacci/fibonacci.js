const fibonacci = (elementos) => {
  if (elementos === 1 || elementos === 2) {
    return 1;
  } else {
    return fibonacci(elementos - 1) + fibonacci(elementos - 2);
  }
};

const exibirSequenciaFibonacci = (elementos) => {
  for (let i = 1; i <= elementos; i++) {
    console.log(fibonacci(i));
  }
};

exibirSequenciaFibonacci(7);