import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // validador cpf

        Scanner scanner = new Scanner(System.in);

        System.out.println("===== VALIDADOR CPF =====");
        System.out.println("Digite o CPF: ");
        String cpf = scanner.nextLine();

        boolean teste = validarCPF(cpf);
    
        if (teste == true) {
            System.out.println("CPF Válido");
        } else {
            System.out.println("CPF Inválido");
        }

        scanner.close();
    }

    public static boolean validarCPF(String cpf) {
        cpf = cpf.replace(".", "");
        cpf = cpf.replace("-", "");

        int multiplicador = 10;
        double soma = 0;
        double modulo = 0;

        if (cpf.length() == 11) {
            //Primeiro passo: armazena cada digito em um array
            int[] digitos = new int[11];
            int[] digitosVerificadores = new int[2];

            for (int i = 0; i < 11; i++) {
                digitos[i] = Integer.parseInt(cpf.substring(i, i + 1));
            }

            //Segundo passo: multiplica-se cada um dos numeros, da direita para a esquerda por numeros crescentes a partir de 2 e armazena os resultador em uma soma
            for (int i = 0; i < 9; i++) {
                soma += digitos[i] * multiplicador;
                multiplicador--;
            }

            //Terceiro passo: calcula o modulo da soma por 11
            modulo = soma % 11;

            //Quarto passo: define o primeiro digito verificador
            if (modulo < 2) {
                digitosVerificadores[0] = 0;
            } else {
                digitosVerificadores[0] = 11 - (int) modulo;
            }

            //Quinto passo: reinicia a soma e o multiplicador
            soma = 0;
            multiplicador = 11;
            for (int i = 0; i < 10; i++) {
                soma += digitos[i] * multiplicador;
                multiplicador--;
            }

            //Sexto passo: calcula o modulo da soma por 11
            modulo = soma % 11;

            //Setimo passo: define o segundo digito verificador
            if (modulo < 2) {
                digitosVerificadores[1] = 0;
            } else {
                digitosVerificadores[1] = 11 - (int) modulo;
            }

            //Oitavo passo: compara os digitos verificadores com os digitos do cpf
            if (digitosVerificadores[0] == digitos[9] && digitosVerificadores[1] == digitos[10]) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}
