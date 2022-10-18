import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Insira a String que deseja inverter:");
        String string = scanner.nextLine();

        System.out.println("String invertida: " + inverterString(string));

        scanner.close();
    }

    public static String inverterString(String string) {
        String stringInvertida = "";

        for (int i = string.length() - 1; i >= 0; i--) {
            stringInvertida += string.charAt(i);
        }

        return stringInvertida;
    }
}