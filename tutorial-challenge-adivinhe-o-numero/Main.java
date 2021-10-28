package com.groperto;

import java.util.Scanner;

public class Main {
    static int number = (int) (Math.random() * 100 + 1);

    public static void main(String[] args) {
        int guesses = 1;

        showHeader();
        showInstructions();
        boolean hasGuessed = readNumber(guesses);
        while (!hasGuessed && guesses < 10) {
            guesses += 1;
            hasGuessed = readNumber(guesses);
        }
    }

    public static void showHeader() {
        System.out.println("");
        System.out.println("############################################################################");
        System.out.println("############################ ADIVINHE O NUMERO #############################");
        System.out.println("############################################################################");
        System.out.println("");
    }

    public static void showInstructions() {
        System.out.println("Olá, vamos jogar? Eu penso em um número de 1 a 100 e você tenta adivinhar...");
        System.out.println("Mas atenção, você tem 10 chances apenas para adivinhar o número.");
    }

    public static boolean readNumber(int guesses) {
        System.out.println("");
        System.out.println("CHANCE " + guesses);
        System.out.println("Qual o número que eu estou pensando?");
        Scanner scanner = new Scanner(System.in);
        int guess = scanner.nextInt();
        if (guess == number) {
            System.out.println("Parabéns! Você ACERTOU!");
            gameOver();
            return true;
        }

        if (guesses == 10) {
            System.out.println("Você não conseguiu acertar! O número era: " + number);
            gameOver();
            return false;
        }

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

    public static void gameOver() {
        System.out.println("#########   FIM DE JOGO   #########");
    }
}
