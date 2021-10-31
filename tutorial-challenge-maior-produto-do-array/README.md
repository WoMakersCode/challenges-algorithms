# Desafio Maior Produto de um Array

**Vamos ao enunciado:**

Dada uma matriz de inteiros, encontre o par de elementos adjacentes que possui o maior produto(multiplicação) e retorne esse produto.

Exemplo:
ParainputArray = [3, 6, -2, -5, 7, 3], a saída deve ser adjacentElementsProduct(inputArray) = 21
7 e 3 produzem o maior produto.

**Exemplo de Entrada**

Uma matriz de números inteiros.
Devem ser digitados números inteiros separados por vírgula.

```
  1, 2, 3, 4, 5
```

**Exemplo de Saida**

Caso os valores inseridos sejam válidos, a função para determinar o maior produto de dois números adjacentes em uma matriz será executada e retornará a seguinte mensagem na linha de comando (para um caso hipotético onde o maior produto seja 60):

```
  O maior produto possível de dois número adjacentes dessa matriz é: 60
```

Foram tratados também dois casos de inputs não válidos (explicados adiante) que retornarão uma mensagem de erro.

# Estrutura do projeto

Um único arquivo Main.java que contém a classe Main com a resolução do desafio.
Essa é uma aplicação de linha de comando.

Legal! Foi construido dessa forma mas, como funciona?

# CÓDIGO

:thinking: vamos resolver esse problema?

Por uma preferência pessoal, separei o código em vários métodos para que ficasse melhor organizado. Ainda mais se tratando de uma aplicação de console, tentei criar uma formatação para o texto a ser impresso na tela que facilitasse a leitura.

Assim, além da função main, criei uma função para imprimir na tela um header com o nome do programa (showHeader), outra para captar o input do usuário na linha de comando (userInput), uma que contém a parte lógica de como calcular o maior produto de dois números adjacentes em uma matriz (adjacentElementsProduct), e por fim uma função que vai imprimir o resultado da operação na tela (printResult).

# Função showHeader

Uma função que o único intuito é mostrar o header contendo o nome da aplicação, que nada mais é do que o nome do desafio.
Em Java, para printar essa mensagens no console, usamos o System.out.println().

```
  System.out.println("texto que quer que apareça na tela");
```

# Função userInput

Essa função é chamada logo após mostrar o header com o nome da aplicação, e portanto, deve passar mais algumas informações ao usuário.
Assim, informo sobre o objetivo da aplicação
```
System.out.println("Olá, esse é um programa para calcular o maior produto
possível de dois números adjacentes de uma dada matriz de inteiros.");
```

e solicito que digite os números inteiros para gerar a matriz
```
System.out.println("Digite os números inteiros da matriz separados por vírgula. Ex: 1, 2, 3, 4");
```

Logo em seguida, leio o input do usuário. Utilizei uma instância da classe Scanner, que vai ler o que foi digitado na linha de comando pelo usuário. Utilizei também o método nextLine() para ler toda a linha digitada, e salvei esse valor (String/texto) em uma variável chamada array, que será o retorno da função.
```
Scanner scanner = new Scanner(System.in);
String array = scanner.nextLine();
return array;
```

# Função printResult

Caso os valores inputados sejam válidos, essa função será executada e retornará o valor do maior produto da matriz, imprimindo na tela.

```
System.out.println("O maior produto possível de dois número adjacentes dessa matriz é: " + result);
```

# Função adjacentElementsProduct(int[] inputArray)

Essa função contém toda a lógica de como calcular o maior produto de dois números adjacentes de uma matriz.
A matriz é passada como argumento para a função (int[] inputArray).

Assim, a primeira coisa a ser feita foi criar uma variável product (produto) de número inteiro que armazenará o valor do maior produto encontrado. Inicializei a variável como 0.

```
int product = 0;
```

Em seguida, realizei um check para saber se o valor digitado pelo usuário era uma matriz de apenas um número, ou seja, se ele digitou na linha de comando apenas um número e apertou enter.
Fiz essa verificação pois como a variável product foi inicializada como 0, caso o usuário tenha digitado apenas um número, esse seria o valor do resultado exibido (por motivos que veremos adiante).
Assim, como não existia uma regra para esse caso, criei a premissa de que se tivermos apenas um valor na matriz, deveríamos retornar esse valor ao invés de 0.

```
if (inputArray.length == 1) product = inputArray[0];
```

Então, para poder ver qual é o maior produto do array, foi criado um loop que tem como valor inicial o tamanho da matriz - 1, pois assim estaremos acessando o último valor da matriz, já que ela é base 0 e, portanto, o valor na última posição é igual ao tamanho - 1.
A ideia foi criar um loop inverso, que vem calculando a partir da última posição até chegar à primeira posição da matriz. Foi uma questão de preferência estruturar dessa maneira, podendo ser realizado da primeira posição à última também.

Nesse caso, como estamos começando pelo fim da matriz, a condição a ser checada é se o iterador é maior do que zero e a cada iteração ir diminuindo uma posição.
Estou interessada na condição de se o iterador for maior do que zero pois dentro desse lop sempre vou analisar uma posição anterior, e portanto, para fugir do Array Index Out of Bounds (quando queremos acessar uma posição que não existe na matriz) precisava parar de rodar o loop quando chegasse na posição 1.
Caso colocasse como condição i >= 0, quando i fosse igual a 0, o loop seria executado, e como eu acesso sempre uma posição anterior, tentaria acessar a posição da matriz de -1 que não existe, e daria erro.

```
for(int i = inputArray.length - 1; i > 0; i--) {
```

Por fim, enquanto a condição for verdadeira e o loop executar, verifico se o valor da posição atual multiplicado pelo valor da posição anterior (produto) é maior do que o valor que está salvo na variável produto. Se o valor for maior, salvo na variável esse novo valor, visto que é o maior produto encontrado até então. Caso seja um valor menor, não faço nada, pois significa que o valor armazenado na variável é o maior valor até aquele momento.

```
if (inputArray[i - 1] * inputArray[i] > product) {
   product = inputArray[i - 1] * inputArray[i];
}
```

Após o loop percorrer toda a matriz verificando os valores dos produtos de cada posição e da sua anterior, ele vai retornar a variável product, que deverá ser o valor do maior produto encontrado.

# Variável estática result

A classe Main apresenta uma variável estática result que é um número inteiro e será utilizada para armazenar o resultado da operação para calcular o maior produto de dois números adjacentes de uma matriz.

```
private static int result;
```


# Função main

A função main é o ponto de entrada da aplicação, a primeira coisa que será executada. Assim, ela é responsável por imprimir na tela o header e solicitar o input do usuário, que será armazenado na variável userInput.
Essa variável é uma String, uma vez que está lendo toda a linha que foi digitada na linha de comando, sem realizar nenhuma conversão ainda.

```
public static void main(String[] args) {
        showHeader();
        String userInput = userInput();
```

Em seguida, pegamos o valor da variável string userInput e transformamos em um array de strings, separando sempre que houver vírgula. Na regex (expressão regular), parti do pressuposto que o usuário pode colocar espaços a mais entre os números que deveriam ser desconsiderados, então adicionei também para separar se existirem espaços antes ou depois da vírgula, de modo a eliminá-los das strings.

```
String[] userArray = userInput.split("\s*,\s*");
```

Depois, para evitar que a aplicação quebrasse, fiz um check para ver se o usuário digitou alguma coisa quando solicitado, e garantir que não apertou apenas o enter sem ter digitado nenhum valor.
Assim, verifico se o array tem tamanho um e se o valor salvo dentro não é uma string vazia. Caso seja, não vamos conseguir realizar as operações, e portanto exibo uma mensagem para o usuário informando que o valor não é válido e interrompo a execução da aplicação.
```
if (userArray.length == 1 && userArray[0].equals("")) {
    System.out.println("------------------------------------");
    System.out.println("Valor digitado não é válido!");
    System.out.println("------------------------------------");
    return;
}
```

Por fim, realizo a conversão do array de strings userArray para um array de inteiros userArrayToInt, utilizando stream. Como nesse momento o código está passível de quebrar mais uma vez, caso o usuário digite um valor de texto que não possa ser convertido para inteiro, esse trecho foi colocado dentro de um try/catch.
Assim, caso resulte em alguma exceção de NumberFormatException falhando em converter o valor, eu consigo, novamente, exibir para o usuário que o valor digitado era inválido e encerrar a execução da aplicação.
Mas, considerando que os valores digitados sejam válidos, a execução continua normalmente e atribuo o resultado retornado pela função adjacentElementsProduct, passando esse novo array de inteiros como argumento, à variável estática result.
Chamo enfim a função printResult para imprimir na tela o resultado da operação.

```
try {
            int[] userArrayToInt = Arrays
                    .stream(userArray)
                    .mapToInt(Integer::parseInt)
                    .toArray();

            result = adjacentElementsProduct(userArrayToInt);
            printResult();
        } catch (NumberFormatException e) {
            System.out.println("------------------------------------");
            System.out.println("Valor digitado não é válido! Favor digitar apenas números inteiros!");
            System.out.println("------------------------------------");
        }
    }
```

## FIM

Espero ter ajudado com algum novo conhecimento ou talvez um novo olhar sobre o desafio :) Se tiverem alguma dúvida, sugestão,
queiram discutir sobre algum ponto ou só mandar um oi mesmo, podem me achar por aqui [Giu Roperto](https://www.linkedin.com/in/giuliaroperto/)
