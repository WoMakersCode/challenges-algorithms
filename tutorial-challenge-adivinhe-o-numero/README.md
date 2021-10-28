
# Desafio Adivinhe o Número

**Vamos ao enunciado:**

Escreva um programa que escolhe um número aleatório inteiro entre 0 e 100.
O usuário deve sugerir um número, se ele acertar, o computador mostra quantas tentativas foram feitas,
caso ele não acerte o número, o computador deve dizer se o número aleatório é maior ou menor que o número sugerido
e permitir que o usuário faça até 10 sugestões.

**Exemplo de Entrada**

Um número inteiro entre 0 e 100.

**Exemplo de Saida**

Caso a pessoa acerte o número, será exibida a mensagem:

```
  Parabéns! Você ACERTOU!
  Número de tentativas: 5
```

Caso a pessoa digite um número maior do que o número aleatório gerado, será exibida a mensagem:

```
  Tente novamente com um número menor!
```

Caso a pessoa digite um número menor do que o número aleatório gerado, será exibida a mensagem:

```
  Tente novamente com um número maior!
```

E caso alcance as 10 tentativas e não consiga adivinhar o número, e por exemplo, o número seja 38, será exibida a mensagem:

```
  Você não conseguiu acertar! O número era: 38
```

# Estrutura do projeto

Um único arquivo Main.java que contém a classe Main com a resolução do desafio.
Essa é uma aplicação de linha de comando.

Legal! Foi construido dessa forma mas, como funciona?

# CÓDIGO

:thinking: vamos resolver esse problema?

Por uma preferência pessoal, separei o código em vários métodos para que ficasse melhor organizado. Ainda mais se tratando de uma aplicação de console, tentei criar uma formatação para o texto a ser impresso na tela que facilitasse a leitura.

Assim, além da função main, criei três outras funções para printar textos na tela (showHeader, showInstructions e gameOver) e uma que realiza a parte lógica do desafio (readNumber).

# Funções showHeader, showInstructions e gameOver

Essas funções são para mostrar o header, mostrar as instruções e mostrar mensagem quando o jogo terminar, respectivamente.
São apenas funções que printam textos na tela e interagem com o usuário, de forma a mostrar o nome da aplicação (header), a passar as instruções de como jogar (instructions) e dá um retorno caso o jogo acabe (gameOver), seja por acertar o número ou por esgotar o número de tentativas. 
Em Java, para printar essa mensagens no console, usamos o System.out.println().

```
  System.out.println("texto que quer que apareça na tela");
```

# Variável estática number

A classe Main apresenta a variável estática number que vai ter um número aleatório de 0 a 100 atribuído a ela cada vez que rodarem a aplicação.
Para gerar um número aleatório, utilizei a função Math.random() que gera um valor de tipo double (com casas decimais) aleatório maior ou igual 0 e menor do que 1.
Porém, no enunciado diz que devemos gerar um número entre 0 e 100, assim, precisamos pegar o retorno da função Math.random() e multiplicar por 101.

:thinking: mas por que 101?

Conforme explicado anteriormente, o Math.random() retorna um número maior ou igual a zero e MENOR do que 1. Assim sendo, a função pode retornar qualquer valor entre 0 e 1, inclusive o número 0, mas não o número 1.
Quando gerarmos um número aleatório 0, ao multiplicarmos por 101, vamos ter 0, que é o menor valor possível nesse intervalo de números.
Já se gerarmos 0.999, por exemplo, ao multiplicarmos por 101, vamos ter 100,899. E por maior que seja o número aleatório gerado, ele nunca vai ser 1, e portanto nunca chegará ao valor de 101.
Desta maneira, quando fazemos o casting (conversão) desse valor double para int usando o *(int)*, ou seja, convertemos o valor com casas decimais para um valor inteiro, ele irá simplesmente cortar qualquer casa decimal que o número tenha e ficar apenas com os valores inteiros. Assim, no caso do valor de 100,899, ao convertermos para inteiro, ele irá descartar o ,899 e assim chegaremos ao valor de 100. Como o maior valor aleatório que podemos gerar nunca chegará ao 101, sempre que convertermos esse double para int, iremos ter como o maior valor do intervalo o número 100.

E é assim que conseguimos gerar números aleatórios entre 0 e 100.

```
  static int number = (int) (Math.random() * 101);
```

# Variável estática guesses

Temos a declaração de mais uma variável estática guesses, que contabiliza o número de tentativas da pessoa para adivinhar o número. Inicializei com o valor de um, pois logo em seguida a pessoa irá tentar adivinhar o número pela primeira vez.
A cada rodada que a pessoa errar o número, e contanto que ainda não tenha atingido as 10 tentativas possíveis, será dada mais uma chance da pessoa tentar adivinhar e essa chance será contabilizada nessa variável guesses, adicionando 1 ao seu valor.
É por meio dessa variável que conseguimos acompanhar quantas tentativas a pessoa já fez, e se já chegou a 10, o que determina o fim do jogo.

```
static int guesses = 1;
```

# Função readNumber()

Essa função contém praticamente toda a lógica do jogo. Vamos em partes!

A primeira vez que ela é chamada, é logo após informar as instruções de como jogar, por isso, temos mais algumas linhas de código que imprimem textos na tela para passar informações para o usuário.

Assim, antes da pessoa tentar adivinhar o número, mostramos qual é o número da tentativa, se é a primeira tentativa, por exemplo, aparece o texto TENTATIVA 1, ou se já é a quinta tentativa, apareceria TENTATIVA 5. Logo em seguida tem a mensagem perguntando sobre o número, que serve para orientar o usuário que logo em seguida deverá digitar um número para poder prosseguir com a brincadeira.

```
public static boolean readNumber() {
        System.out.println("");
        System.out.println("TENTATIVA " + guesses);
        System.out.println("Qual o número que eu estou pensando?");
```

Para ler o input do usuário, utilizei uma instância da classe Scanner, que vai ler o que for digitado na linha de comando. Em seguida, pego o valor int digitado (já que deve ser um valor entre 0 e 100) atráves do método nextInt() e salvo em uma variável guess (o número suposto pelo usuário).

```
Scanner scanner = new Scanner(System.in);
int guess = scanner.nextInt();
```

Agora que temos o número que o usuário digitou, podemos verificar se esse número digitado é igual ao que foi gerado aleatoriamente. E caso essa comparação seja verdadeira, imprimimos na tela que a pessoa acertou o número e o número de tentativas que ela realizou. Além disso, chamamos o método gameOver() que serve para imprimir na tela que o jogo acabou, e também retornamos true, ou seja, a pessoa adivinhou o número.

```
if (guess == number) {
    System.out.println("------------------------------------");
    System.out.println("Parabéns! Você ACERTOU!");
    System.out.println("Número de tentativas: " + guesses);
    System.out.println("------------------------------------");
    gameOver();
    return true;
}
```

Caso a pessoa não tenha acertado, vamos checar se o número de tentativas dela já chegou a 10, e caso positivo, iremos imprimir na tela que a pessoa não conseguiu acertar o número e dizemos para ela qual era o número gerado. Além disso, novamente chamamos a função gameOver() para indicar o fim do jogo. Nesse caso retornamos false, para mostrar que a pessoa não conseguiu adivinhar o número.

```
if (guesses == 10) {
    System.out.println("Você não conseguiu acertar! O número era: " + number);
    gameOver();
    return false;
}
```

Por fim, caso a pessoa ainda não tenha acertado e nem tenha feito as 10 tentativas, iremos checar se o número que ela digitou é maior ou menor do que o número aleatório, e assim iremos informá-la na tela para tentar novamente com um número maior/menor. E, como ela ainda não conseguiu adivinhar o número, retornamos false.

```
  if (guess > number) {
      System.out.println("------------------------------------");
      System.out.println("Tente novamente com um número menor!");
      System.out.println("------------------------------------");
  } else {
      System.out.println("------------------------------------");
      System.out.println("Tente novamente com um número maior!");
      System.out.println("------------------------------------");
  }
  return false;
}
```

# Função main

A função main é o ponto de entrada da aplicação, a primeira coisa que será executada. Assim, ela é responsável por imprimir na tela o header e as instruções, para que a pessoa possa começar a jogar.
Então, será chamada a função readNumber() e o seu retorno será armazenado em uma variável boleana (true/false) hasGuessed, que nada mais é do que armazenar se a pessoa adivinhou ou não o número. Assim, quando a pessoa adivinhar, a chamada ao readNumber() irá retornar true (verdadeiro), e caso contrário, retorna false (falso).
Para que o jogo continue até a pessoa acertar, ou até atingir o limite de 10 tentativas, uso um loop while que verifica se a condição (!hasGuessed && guesses < 10) é verdadeira. Ou seja, se a pessoa ainda não tiver acertado E se ainda não tiver atingido as 10 tentativas. Caso essa condição seja verdadeira, a pessoa terá mais uma chance de tentar adivinhar o número, e portanto entrará no while, que atualizará a quantidade de tentativas já feitas adicionando mais um, e chamando novamente a função readNumber() para que a pessoa possa tentar novamente adivinhar o número. Esse loop rodará até que OU a pessoa acerte o número, OU faça as 10 tentativas de adivinhar o número, que são as condições para o jogo acabar.

```
public static void main(String[] args) {
    showHeader();
    showInstructions();
    boolean hasGuessed = readNumber();
    while (!hasGuessed && guesses < 10) {
        guesses += 1;
        hasGuessed = readNumber();
    }
}

```

## FIM

Espero ter ajudado com algum novo conhecimento ou talvez um novo olhar sobre o desafio :) Se tiverem alguma dúvida, sugestão,
queiram discutir sobre algum ponto ou só mandar um oi mesmo, podem me achar por aqui [Giu Roperto](https://www.linkedin.com/in/giuliaroperto/)
