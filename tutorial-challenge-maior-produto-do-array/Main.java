package com.groperto;

import java.util.Arrays;
import java.util.Scanner;

public class Main {
    private static int result;

    public static void main(String[] args) {
        showHeader();
        String userInput = userInput();

        String[] userArray = userInput.split("\s*,\s*");

        if (userArray.length == 1 && userArray[0].equals("")) {
            System.out.println("------------------------------------");
            System.out.println("Valor digitado não é válido!");
            System.out.println("------------------------------------");
            return;
        }

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

    public static void showHeader() {
        System.out.println("");
        System.out.println("############################################################################");
        System.out.println("######################## MAIOR PRODUTO DE UM ARRAY #########################");
        System.out.println("############################################################################");
        System.out.println("");
    }

    public static String userInput() {
        System.out.println("Olá, esse é um programa para calcular o maior produto possível de dois números " +
                "adjacentes de uma dada matriz de inteiros.");
        System.out.println("Digite os números inteiros da matriz separados por vírgula. Ex: 1, 2, 3, 4");
        Scanner scanner = new Scanner(System.in);
        String array = scanner.nextLine();
        return array;
    }

    public static void printResult() {
        System.out.println("");
        System.out.println("------------------------------------");
        System.out.println("O maior produto possível de dois número adjacentes dessa matriz é: " + result);
        System.out.println("------------------------------------");
        System.out.println("");
    }

    public static int adjacentElementsProduct(int[] inputArray) {
        int product = 0;

        if (inputArray.length == 1) product = inputArray[0];

        for(int i = inputArray.length - 1; i > 0; i--) {
            if (inputArray[i - 1] * inputArray[i] > product) {
                product = inputArray[i - 1] * inputArray[i];
            }
        }
        return product;
    }
}
