import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println(" Informe Três Números:");
            int a = scanner.nextInt();
            int b = scanner.nextInt();
            int c = scanner.nextInt();
            int menor = a;
            int maior = a;

            if (b > maior)
                maior = b;
            if (c > maior)
                maior = c;
            if (b < menor)
                menor = b;
            if (c < menor)
                menor = c;
            System.out.println(" Maior Número: " + maior + " Menor Número: " + menor);
        }
    }

}
