# Desafio Tabuada de Multiplicação

**Vamos ao enunciado:**

Usuário irá digitar um número inteiro e digitar a quantidade de vezes que será multiplicado.
Com essas duas informações será gerada a tabuada.

**Entrada**

```
  5 10

```

**Saida**

```
  5 x 0 = 0
  5 x 1 = 5
  5 x 2 = 10
  5 x 3 = 15
  5 x 4 = 20
  5 x 5 = 25
  5 x 6 = 30
  5 x 7 = 35
  5 x 8 = 40
  5 x 9 = 45
  5 x 10 = 50

```

# Estrutura do projeto

Primeira coisa a ser feita, é organizar o projeto.

O projeto foi divido em 3 pastas:

- Assets: Todos os arquivos de estilo e javascript
- Controller: O responsavel por manipular os dados
- Model: Aonde fica salvo os dados

Todas as essas pastas citadas acima é utilizado no arquivo chamado index.php, aonde foi feito uma interface simples utilizando css e html.

Legal! Foi construido dessa forma mas, como funciona?

## **CÒDIGO**

:thinking: vamos resolver esse problema

# MultiplicacaoModel

Para conseguir salvar a tabuada eu preciso armazenar em algum lugar, por isso eu utilizei o padrão de arquitetura MVC de forma simples.

Essa classe será responsavel por armazenar os seguintes valores:

- O valor que foi multiplicado
- O numero que o usuário digitou
- Quantidade de vezes que será calculado

Variavel que armazena os valores

```php
  public $valores;
```

# MultiplicacaoController

Criado o lugar que iremos guardar a variavel, agora iremos fazer a mágica acontecer. Que é calcular os dados que virá do formulário e transforma-lo em uma tabuada.

Para isso foi criado esse metodo que é passado dois parâmetros, o numero e a quantidade de vezes que será multiplicado.

```php
  public function multiplicar($numero, $quantidadeVezes)
```

Para fazer a tabuada eu criei esse loop, aonde eu passo a quantidade de vezes que irei fazer o calculo

```php
  for ($i = 0; $i <= $quantidadeVezes; $i++) {
```

Lembra daquela variavel que criamos na classe **MultiplicacaoModel**? Pois é iremos manipula-lá aqui no controller.
Foi definido como um array multidimensional associativo.

:thinking: Mas o que raios significa um array multidimensional associativo?

Um array multidimensional significa que dentro de um array contem dois ou mais arrays. Já o associativo é um array que estamos associado o seu valor a uma chave especifica.

:thinking: Mas por que você fez dessa forma?
Para que na hora que for mostrado para o usuário, o desenvolvedor consiga manipular os dados mais fácil.

Imagina se os dados estivessem dessa forma:
[1,2,2]

Como eu irei saber qual é o valor que está multiplicando, qual o numero e o que está sendo multiplicador?

```php
    $this->valores[] = [
          'valorMultiplicado' => $numero * $i,
          'numero' => $numero,
          'multiplicador' => $i
      ];
```

Função Completa

```php
  public function multiplicar($numero, $quantidadeVezes)
    {
        for ($i = 0; $i <= $quantidadeVezes; $i++) {
            $this->valores[] = [
                'valorMultiplicado' => $numero * $i,
                'numero' => $numero,
                'multiplicador' => $i
            ];
        }
    }
```

Dentro desse arquivo temos outra função chamada tabuada, que o objetivo é apenas orgnizar os valores para que fiquem em forma de tabela.

Dentro dessa função irei executar um foreach, para que eu consiga pegar os valores e organiza-los.

```php
    foreach ($this->valores as $valor) {
```

Lembra que eu disse anteriormente, do array multidimensional associativo? Então as chaves que eu criei na função anterior, eu estou a convocando para mostrar o seu valor.
E como está sinalizado é bem fácil saber o que é, não acha?
Ao convocar esses valores estou o concatenando, para ficar em formato de tabela quando for chamado.

```php
    echo "<tr>";
    echo "<td> $valor[numero]  *  $valor[multiplicador] </td>";
    echo "<td> $valor[valorMultiplicado]  </td>";
    echo '</tr>';
```

Função completa:

```php
  public function tabuada()
    {
        foreach ($this->valores as $valor) {
            echo "<tr>";
            echo "<td> $valor[numero]  *  $valor[multiplicador] </td>";
            echo "<td> $valor[valorMultiplicado]  </td>";
            echo '</tr>';
        }
    }
```

## index.php

1º Vamos criar toda a estrutura HTML, iremos utilizar o formulário para mandar os dados para o metodo multiplicar

```html
<div>
  <form method="post" name="login">
    <label for="numero"> Numero: </label>
    <input type="number" id="numero" name="numero" value="0" />

    <label for="qtdVezes"> Quantidade de vezes: </label>
    <input type="number" id="qtdVezes" name="qtdVezes" value="0" />

    <input type="submit" />
  </form>
</div>
```

2º Criado o form, temos que mandar os valores que o usuário passou para que seja criado a tabuada.
mas como iremos fazer isso?

2.1º Primeiro iremos incluir o arquivo que contém a classe

```php
  require_once __DIR__ . '/controller/multiplicacaoController.php';
```

2.2º Tratar para que os dados não envie nullo ou invalido para o metodo, que será responsavel por multiplicar

```php
  $numero = isset($_POST['numero']) ? $_POST['numero'] : '0';
  $quantidade = isset($_POST['qtdVezes']) ? $_POST['qtdVezes'] : '0';
```

2.3º Instânciar a classe e o metodo, que será multiplicado. Nesse metodo iremos passar dois parametros o numero que será multiplicado e a quantidade de vezes que esse numero será multiplicado

```php
  $multiplicacao = new MultiplicacaoController();
  $multiplicacao->multiplicar($numero, $quantidade);
```

3.0 Depois de instanciar a classe, eu irei chamar o metodo tabuada aonde foi criado a estura da tabela.

```php
    <?=
        $multiplicacao->tabuada();
    ?>
```

## FIM

Demais dúvidas podem me chamar nas redes sociais [@ielenyFilgueira](https://www.linkedin.com/in/ieleny-filgueira-3b370a128/)
