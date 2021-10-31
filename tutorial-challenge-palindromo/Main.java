package com.groperto;

import java.util.Locale;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
	    showHeader();
        String userInput = userInput().toLowerCase(Locale.ROOT);

        if (userInput.equals("")) {
            System.out.println("-------------------------------------");
            System.out.println("String inválida!");
            System.out.println("-------------------------------------");
            return;
        }

        String formattedInput = formatInput(userInput);
        String result = checkIfPalindrome(formattedInput);
        System.out.println("-------------------------------------");
        System.out.println(result);
        System.out.println("-------------------------------------");
    }

    public static void showHeader() {
        System.out.println("");
        System.out.println("############################################################################");
        System.out.println("############################### PALINDROMOS ################################");
        System.out.println("############################################################################");
        System.out.println("");
    }

    public static String userInput() {
        System.out.println("Olá, essa é uma aplicação que verifica se uma dada string é um palíndromo.");
        System.out.println("Digite o texto que deseja verificar se é um palíndromo.");
        System.out.println("Atenção: Não utilizar acentos e caracteres especiais.");
        Scanner scanner = new Scanner(System.in);
        String text = scanner.nextLine();
        return text;
    }

    public static String formatInput(String userInput) {
        String pattern = "[\\W_]";
        return userInput.replaceAll(pattern, "");
    }

    public static String checkIfPalindrome(String formattedInput) {
        char[] text = formattedInput.toCharArray();
        int textLength = text.length;
        for (int i = 0; i < textLength; i++) {
            if (text[i] != text[textLength - 1 - i]) {
                return "Não é palíndromo!";
            }
        }
        return "É um palíndromo!";
    }
}
