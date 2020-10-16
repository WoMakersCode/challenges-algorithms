# Desafio Tabuada de Multiplicação

**Vamos ao enunciado:**

Usuário irá digitar um número inteiro e selecionar a quantidade de vezes que será multiplicado. 
Com essas duas informações será gerada a tabuada

**Entrada**

```
  5 10

```

**Output**

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

:sob: Como vamos resolver esse problema?

De acordo com quantas velas tiverem temos que saber quantas velas serão sopradas.
Achar o valor máximo do array, que esse será o número escolhido de velas para serem assopradas, nesse caso temos que fazer duas coisas dentro da função **birthdayCakeCandles**:

- 1 - encontrar o valor máximo do array
- 2 - contar a frequência do elemento máximo, isso iremos usar um loop pois requer isso

Então temos duas situações que nosso algoritmo deve resolver
A base da lógica é um array que pega um espaço de uma matriz e esse será o valor máximo algo como:

1 - primeiro loop

```java
if(a[i]>max)
max=a[i]
```

2 - segundo loop

```java
if(a[i]==max)
count++;
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

Espero ter te ajudado de alguma forma, vou deixar num link abaixo o exercício no HackerRank para você resolver por lá se quiser, esta também neste documento a classe do código! Try yourself :cupid:

Demais dúvidas podem me chamar nas redes sociais [@anabneri](https://twitter.com/anabneri)

Exercício no HackerRank: [Birthday Candle Cake](https://www.hackerrank.com/challenges/birthday-cake-candles/problem)
