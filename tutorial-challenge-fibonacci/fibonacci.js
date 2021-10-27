const fibonacci = (posicao) => {
  if (posicao === 1 || posicao === 2) {
    return 1;
  } else {
    return fibonacci(posicao - 1) + fibonacci(posicao - 2);
  }
};

const exibirSequenciaFibonacci = (elementos) => {
  for (let i = 1; i <= elementos; i++) {
    console.log(fibonacci(i));
  }
};

exibirSequenciaFibonacci(7);