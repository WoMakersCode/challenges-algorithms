fun main(){
    print("Insira o número desejado:")
    var numero = readLine()!!.toInt()
    verificarDivisores(numero)
}

fun verificarDivisores(numero: Int){
    var contador = 0

    for (i in 1..numero ){
        if (numero % i == 0) contador += 1
    }

    exibirResultado(contador)
}

fun exibirResultado(contador:Int){
    if (contador == 2){
        println("É primo!")
    }

    else{
        println("Não é primo!")
    }
}