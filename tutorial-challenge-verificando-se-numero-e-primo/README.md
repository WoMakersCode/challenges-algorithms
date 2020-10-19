# Challenge Verificando Se Um Número é Primo
**Vamos ao enunciado:**

Usuário digita um número natural inteiro e programa verifica se esse é número primo.
A partir dessa entrada iremos definir se o número é ou não primo.
Lembrando que um número é considerado primo quando ele só é divisível por um e por ele mesmo.

**Entrada**

```
  13
2020

```

**Saida**

```
É primo!
Não é primo!

```


## **CÓDIGO**

Ok, vamos começar a codar. 

A primeira coisa que precisamos fazer é pegar o número que será verificado.
```kotlin
print("Insira o número desejado:")
    var numero = readLine()!!.toInt()
```

### **O método**

Depois que já temos o número que será verificador, fazemos um loop para saber quantos divisores esse número tem, sendo assim o loop
vai pegar todos os número (a partir de 1 até o número escolhido) e dividir pelo número que será verificado.
A variável contador será responsável por contabilizar a quantidade de divisores.


```kotlin
fun verificarDivisores(numero: Int){
    var contador = 0

    for (i in 1..numero ){
        if (numero % i == 0) contador += 1
    }

    exibirResultado(contador)
}
```

A função exibirResultado, como o nome já diz irá ser a responsável por informar se o número é ou não primo,
sendo assim a condição para o número ser primo é ele ter dois divisores (o número 1 e ele mesmo).

```kotlin
fun exibirResultado(contador:Int){
    if (contador == 2){
        println("É primo!")
    }

    else{
        println("Não é primo!")
    }
}
```

## FIM

Espero ter contribuído, se surgir qualquer dúvida é só me chamar nas redes sociais [@ThalitaNeri](https://www.linkedin.com/in/thalita-neri-594065178/)
