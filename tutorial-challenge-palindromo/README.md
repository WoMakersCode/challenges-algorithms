# Desafio Palíndromo

**Vamos ao enunciado:**

Usuário informa uma palavra ou frase e programa retorna se é palíndromo.

**Exemplo de Entrada**

luz azul
reviver
buraco negro

**Exemplo de Saida**

É um palíndromo!
É um palíndromo!
Não é palíndromo!

# Estrutura do projeto

Um único arquivo Main.java que contém a classe Main com a resolução do desafio.
Essa é uma aplicação de linha de comando.

Legal! Foi construido dessa forma mas, como funciona?

# CÓDIGO

:thinking: vamos resolver esse problema?

Por uma preferência pessoal, separei o código em vários métodos para que ficasse melhor organizado. Ainda mais se tratando de uma aplicação de console, tentei criar uma formatação para o texto a ser impresso na tela que facilitasse a leitura.

Assim, além da função main, criei uma função para printar header na tela (showHeader), outra para receber o input do usuário (userInput), outra para formatar esse input (formatInput), e uma que realiza a parte lógica do desafio (checkIfPalindrome). Todas essas funções serão abordadas a seguir em maior detalhe.

# Função showHeader

Imprime na tela um header com o nome do programa/desafio.
Em Java, para printar essa mensagens no console, usamos o System.out.println().

```
  System.out.println("texto que quer que apareça na tela");
```

# Função userInput()

Essa função imprime na tela algumas informações para o usuário, explicando como que o programa funciona e solicitando seu input.
Para ler o input do usuário, utilizei uma instância da classe Scanner, que vai ler o que for digitado na linha de comando. Em seguida, pego o valor da string digitada atráves do método nextLine() e salvo em uma variável text que será o retorno dessa função. 

```
Scanner scanner = new Scanner(System.in);
String text = scanner.nextLine();
return text;
```

# Função formatInput()

Essa é uma função para formatar a string digitada pelo usuário. Para que possamos manipulá-la de maneira a verificar se é um palíndromo ou não, decidi por substituir todos os caracteres que não fossem de texto (a-z ou A-Z) ou número (0-9). Assim, qualquer outro caracter que possa existir na string, como por exemplo vírgulas ou hífens, serão substituidos por nada (ou seja, serão removidos).
Para esse efeito, utilizei uma regex (expressão regular), que atribuí à uma váriavel de string chamada pattern. Essa expressão regular utilizada significa que quero selecionar tudo que não for word character (caracter de palavras, como dito anteriormente são a-z A-Z 0-9 e _) ou então selecionar o underscore (_). Com isso, garanto que ao utilizar essa regex em conjunto com o método replaceAll, vou substituir todo e qualquer caractere que não sejam letras a-z A-Z e números 0-9. Essa foi a premissa que eu utilizei, porém seria válido também se decidisse por descartar os números da string.

```
String pattern = "[\\W_]";
return userInput.replaceAll(pattern, "");
```

# Função checkIfPalindrome()

Por fim, essa é a função com todo o racional de como verificar se o texto digitado é um palíndromo ou não.
Recebemos a string formatada acima (sem caracteres especiais, apenas letras e números) como argumento da função.
```
public static String checkIfPalindrome(String formattedInput) {
```

Pegamos essa string e convertemos para um array de caracteres, pois assim poderemos iterar sobre esse array de caracteres e acessar cada caracter em cada posição.

```
    char[] text = formattedInput.toCharArray();
```

Criamos uma variável inteira textLength e atribuímos à ela o valor do tamanho do array de caracteres. Esse passo serve apenas para evitar repetição de código e simplificar chamando apenas o nome da variável.

```
    int textLength = text.length;
```

Então criei um loop para iterar sobre cada posição desse array. Se a palavra for um palíndromo, significa que a ordem dos caracteres é a mesma se analisada de trás para a frente do que se analisar de frente para trás. Assim, a letra na primeira posição deve ser a mesma da última posição e assim sucessivamente. Portanto, foi criado um loop que vai analisar desde a primeira posição até a última se os caracteres são iguais aos caracteres da última posição até a primeira. Por exemplo, considerando o texto "luz azul", se ignorarmos o espaço no meio temos 7 caracteres. O primeiro caractere deve ser igual ao último, o segundo deve ser igual ao penúltimo, e assim por diante. Essa é a verificação feita no loop. Para cada posição de 0 até o tamanho do array, analisamos se o caractere da posição atual é diferente do caractere da última posição - i, e caso sejam diferentes, retornamos que "Não é palíndromo!", caso contrário, se não tiver nenhum caractere diferente, retornamos que "É um palíndromo!".

```
        for (int i = 0; i < textLength; i++) {
            if (text[i] != text[textLength - 1 - i]) {
                return "Não é palíndromo!";
            }
        }
        return "É um palíndromo!";
    }
```

Uma observação em relação à condição do if: a última posição em um array, por ser base 0, será sempre o tamanho do array - 1. Como queremos observar os caracteres da posição zero até do tamanho do array - 1, e a cada iteração ir adicionando um no iterador e diminuindo um na última posição a ser verificada, por isso deixamos a condição como text[i] != text[textLength - 1 -i]. 

Exemplificando, caso estejamos analisando a primeira posição da string "luz azul", essa condição seria

```
if (text[0] != text[7 - 1 - 0]
```
uma vez que 7 é o número de letras da string "luz azul", então a última posição é 7 - 1 = 6, e para poder ir diminuindo a posição de comparação a cada iteração, subtraímos 0, que é o valor atual de i. Assim, tanto a primeira posição quanto a última correspondem a letra L.

Assim, caso iterassemos mais uma vez, ficaria da seguinte maneira
```
if (text[1] != text[7 - 1 - 1]
```

Ou seja, agora estaríamos comparando a segunda posição com a penúltima 7 - 1 - 1 = 5. Novamente, ambas as posições se referem a mesma letra: U. E assim por diante.

# Função main

A função main é o ponto de entrada da aplicação, a primeira coisa que será executada. Assim, ela é responsável por imprimir na tela o header e as informações do programa, bem como solicitar o input do usuário. Esse input será salvo em uma variável de string userInput, e terá todo o texto digitado convertido para letras minúsculas, de forma a facilitar a comparação de caracteres (existe diferenciação entre caracteres minúsculos e maiúsculos).

```
String userInput = userInput().toLowerCase(Locale.ROOT);
```

Em seguida, verifico se esse valor digitado pelo usuário é uma string vazia, ou seja, o usuário não digitou nada e apenas apertou a tecla enter. Faço essa verificação para que não retorne de maneira errônea que o input é um palíndromo. Assim, ao verificar que é uma string vazia, retorno uma mensagem para o usuário de que a String é inválida e encerro a execução do programa.

```
if (userInput.equals("")) {
    System.out.println("-------------------------------------");
    System.out.println("String inválida!");
    System.out.println("-------------------------------------");
    return;
}
```

Caso a string seja válida, continuamos a execução e chamamos o método formatInput e salvamos em uma variável string formattedInput. Esse valor formatado é para simplificar a comparação. Assim, passamos esse valor formatado para o método checkIfPalindrome que irá verificar se os caracteres de frente para trás são iguais ao do sentido inverso, e portanto, a string é um palíndromo. Salvo o retorno desse método em uma variável de string result, e printo esse valor na tela para o usuário.

```
String formattedInput = formatInput(userInput);
String result = checkIfPalindrome(formattedInput);
System.out.println("-------------------------------------");
System.out.println(result);
System.out.println("-------------------------------------");
```

## FIM

Espero ter ajudado com algum novo conhecimento ou talvez um novo olhar sobre o desafio :) Se tiverem alguma dúvida, sugestão,
queiram discutir sobre algum ponto ou só mandar um oi mesmo, podem me achar por aqui [Giu Roperto](https://www.linkedin.com/in/giuliaroperto/)
