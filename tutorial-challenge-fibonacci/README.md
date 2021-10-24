
# Desafio Recursividade - Fibonacci

**Vamos ao enunciado:**

Faça uma função recursiva que exiba os 7 primeiros números da sequência Fibonacci:

1, 1, 2, 3, 5, 8, 13, 21, 34, 55

Dicas:

- A sequência começa com os números 1, 1
- O próximo número, ou seja, o terceiro é igual a soma dos dois número anteriores. Cada número novo será a soma dos dois números anteriores

**Exemplo de Entrada**

A função recebe como argumento um número inteiro que representa a quantidade de elementos da sequência a serem exibidos.
Por exemplo, passar como argumento o número 7 significa que serão exibidos os sete primeiros números da sequência.

**Exemplo de Saida**

Os sete primeiros números são:

```
  1
  1
  2
  3
  5
  8
  13

```

# Estrutura do projeto

Um único arquivo fibonacci.js que contém as funções para resolver esse desafio.

Legal! Foi construido dessa forma mas, como funciona?

# CÓDIGO

:thinking: vamos resolver esse problema?

# Função exibirSequenciaFibonacci(elementos)

Essa função é o ponto de entrada, pois é ela que invocará a função fibonacci(elementos) que calcula o valor de cada número da sequência. 
Recebe como argumento **elementos** um valor inteiro que corresponde ao número de elementos da sequência a serem exibidos.

```
  const exibirSequenciaFibonacci = (elementos) => {
    for (let i = 1; i <= elementos; i++) {
    // Chama a função fibonacci que propriamente calcula o valor de cada elemento da sequência,
    // mostrando no console.
      console.log(fibonacci(i));
    }
  };
```

É realizado um loop para exibir os valores da primeira a última posição (inteiro passado como argumento).
No exemplo utilizado acima, exibirá os números nas posições de 1 a 7.


# Função fibonacci(posição)

Essa função vai calcular o valor de cada elemento da sequência, e tem como parâmetro a posição do número que vai ser calculado.
Por exemplo, para calcular o primeiro item da sequência utiliza-se fibonacci(1) e para calcular o sétimo elemento utiliza-se fibonacci(7).


```
const fibonacci = (posição) => {
// aqui é a condição de saída da recursividade, ou seja, quando a posição for 1 ou 2, retornaremos o número 1,
// uma vez que os dois primeiros números da sequência são 1, e a partir desse ponto será retornado cada valor
// das funções chamadas anteriormente.
  if (posição === 1 || posição === 2) {
    return 1;
  } else {
    return fibonacci(posição - 1) + fibonacci(posição - 2);
  }
};
```

A primeira parte do if, que verifica se a condição (posição === 1 || posição === 2) é verdadeira, é a condição de saída da recursividade. Ou seja,
quando a posição passada for igual a 1 ou a 2, iremos retornar o número 1, uma vez que os dois primeiros números da sequência são 1.
Já a cláusula ELSE é a que irá conter a recursividade, uma vez que para calcular o valor atual da sequência precisamos somar os dois valores anteriores.

Assim, se precisarmos calcular o terceiro elemento da sequencia (fibonacci(3)), executará da seguinte forma:

```
const fibonacci = (3) => {
  if (posição === 1 || posição === 2) { //FALSO, posicao === 3
    return 1;
  } else { //ENTRA NESSA CLAUSULA
    return fibonacci(posição - 1) + fibonacci(posição - 2);
  }
};
```

Iremos cair no bloco else, e chamaremos novamente a função fibonacci agora passando como argumento as duas posicões anteriores, pois assim poderemos 
calcular o valor de cada posição e somá-los de forma a saber o valor da posição atual. Esse código retorna a soma do elemento da posição anterior (posição - 1)
e do elemento da posição anterior ao anterior (posição - 2). No caso, as duas posições anteriores ao 3 é a posição 2 (posição 3 - 1) e a 1 (posição 3 - 2).

```
return fibonacci(2) + fibonacci(1);
```

Ao cair nesse trecho, entra a recursividade, pois iremos chamar novamente a função fibonacci agora passando novos valores como argumento. Observe que essa soma
ficará suspensa até obtermos os valores retornados pela função fibonacci(2) e fibonacci(1).

```
const fibonacci = (2) => {
  if (posição === 1 || posição === 2) { //VERDADEIRO, posicao === 2
    return 1;
  } else {
    return fibonacci(posição - 1) + fibonacci(posição - 2);
  }
};
```

Assim, fibonacci(2) retorna 1.

```
const fibonacci = (1) => {
  if (posição === 1 || posição === 2) { //VERDADEIRO, posicao === 1
    return 1;
  } else {
    return fibonacci(posição - 1) + fibonacci(posição - 2);
  }
};
```

E fibonacci(1) retorna 1.

Agora que temos os dois elementos anteriores, podemos calcular a soma deles e obter o valor do terceiro elemento da sequência:

```
return fibonacci(2) + fibonacci(1); //RETORNA 1 + 1, OU SEJA, FIBONACCI(3) = 2
```

## FIM

Espero ter ajudado com algum novo conhecimento ou talvez um novo olhar sobre o desafio :) Se tiverem alguma dúvida, sugestão,
queiram discutir sobre algum ponto ou só mandar um oi mesmo, podem me achar por aqui [Giu Roperto](https://www.linkedin.com/in/giuliaroperto/)
