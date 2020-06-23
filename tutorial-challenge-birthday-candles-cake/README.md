# :cake: Challenge Birthday Candles Cakes

Este é um exercício bem bacana do HackerRank, e logo de cara achamos que é super díficil.

**Vamos ao enunciado:**

Você é o responsável pelo bolo no aniversário da sua sobrinha e decidiu que o bolo terá _uma vela para cada ano de sua idade total_. Quando ela apaga as velas, ela só consegue apagar as mais altas. Sua tarefa é descobrir quantas velas ela pode soprar com sucesso.

Por exemplo, se sua sobrinha estiver fazendo 4 anos, e o bolo tiver 4 velas com os valores: **4,4,1,3**, ela poderá soprar **2** velas com sucesso, uma vez que as velas mais altas têm a altura **4** e existem **2** velas.

**Descrição da função:**

Complete a função birthdayCakeCandles no editor abaixo. Ele deve retornar um número inteiro representando o número de velas que ela pode soprar.

birthdayCakeCandles tem o(s) seguinte(s) parâmetro(s):

- ar: uma matriz de números inteiros representando a altura das velas

Basicamente nosso código tem que ser capaz de identificar as velas que são trazidas, e contabilizar quantas velas a sobrinha tem que soprar para equivaler a idade dela.

**Input simples**

```
4
3 2 1 3
```

No test case do HackerRank esta é a entrada recebida

**Output**

```
2
```

Levando isso em consideração, a saída desse teste tem que ser 2, pois **2**, corresponde ao tanto de velas que a sobrinha terá que assoprar!

#**CÒDIGO**

:sob: Como vamos resolver esse problema?

De acordo com quantas velas tiverem temos que saber quantas velas serão sopradas.
Achar o valor máximo do array, que esse será o número escolhido de velas para serem assopradas, nesse caso temos que fazer duas coisas dentro da função **birthdayCakeCandles**:

- 1 - encontrar o valor máximo do array
- 2 - contar a frequência do elemento máximo, isso iremos usar um loop pq requer isso

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
