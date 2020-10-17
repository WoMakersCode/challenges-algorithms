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

#**CÒDIGO**

:thinking: Como vamos resolver esse problema?

De acordo com os valores que usuário for digitar, iremos fazer um loop para multiplicar o valor com a quantidade de vezes que o usuário quer gerar a tabuada.

Depois de fazer essa multiplicação os valores serão salvos na sessão da página;

1 - Metodo que irá fazer a multiplicação da tabua e salvar na sessão

```php
  public function multiplicar($numero, $quantidadeVezes)
    {

        $tabuada = [];

        for ($i = 0; $i <= $quantidadeVezes; $i++) {
            $tabuada[] = [
                'soma' => $numero * $i,
                'numero' => $numero,
                'multiplicador' => $i
            ];
        }

        $_SESSION['resultado'] = $tabuada;
    }
```

### O método

Para resolver umas das opções é inserir um if concatenado onde comparo o valor de cada espaço da matriz e cada um desses valores é comparado com o máximo de contagem das velas que eu nomeei **maxCandleFreqCount** também com o valor da vela **maxCandleHeight**, e faço três cenários de comparação, o código vai ficar algo mais ou menos assim:

```java
    int maxCandleHeight = Integer.MIN_VALUE;
    int maxCandleFreqCount = 0;

    for (int i = 0; i < ar.length; i++) {

      if (ar[i] == maxCandleHeight) {
        maxCandleFreqCount++;
      }

      if (ar[i] > maxCandleHeight) {
        maxCandleHeight = ar[i];
        maxCandleFreqCount = 1;
      }

    }
    return maxCandleFreqCount;
```

> Vejam que eu estou usando Integer ao invés de Int, pois o Integer é uma classe wrapper que usa o tipo primitivo Int, aceita os mesmos valores porém possibilita a declaração de valores nulos, sendo assim mesmo que o usuário digite 0, eu vou saber que foi uma valor null

## FIM

Demais dúvidas podem me chamar nas redes sociais [@anabneri](https://twitter.com/anabneri)
