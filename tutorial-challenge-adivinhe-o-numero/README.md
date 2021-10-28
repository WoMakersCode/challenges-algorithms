
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

Por uma preferência pessoal, separei o código em vários métodos para que ficasse bem organizado. Ainda mais se tratando de uma aplicação de console,
tentei criar uma formatação que facilitasse a leitura. Assim, além da função main, criei três outras funções para printar textos na tela
(showHeader, showInstructions e gameOver) e uma que realiza a parte lógica do desafio (readNumber).

# Funções showHeader, showInstructions e gameOver

Essas funções são para mostrar o header, mostrar as instruções e mostrar mensagem quando o jogo terminar, respectivamente.
São apenas funções que printam textos na tela e interagem com o usuário, de forma a mostrar o nome da aplicação (header), a passar
as instruções de como jogar (instructions) e dá um retorno caso o jogo acabe (gameOver), seja por acertar o número ou por esgotar o número de tentativas.
Em Java, para printar essa mensagens no console, usamos o 

```
  System.out.println("texto que quer que apareça na tela");
```

# Variável estática number

A classe Main apresenta uma variável estática number que vai ter um número aleatório de 0 a 100 atribuído a ela cada vez que rodarem a aplicação.


```
  
```

# Função readNumber()

```

```

## FIM

Espero ter ajudado com algum novo conhecimento ou talvez um novo olhar sobre o desafio :) Se tiverem alguma dúvida, sugestão,
queiram discutir sobre algum ponto ou só mandar um oi mesmo, podem me achar por aqui [Giu Roperto](https://www.linkedin.com/in/giuliaroperto/)
