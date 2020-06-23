import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    // Completar a função birthdayCakeCandles que esta abaixo:
    static int birthdayCakeCandles(int[] ar) {

        // Esta é a resolução que esta explicada do Read.me
        int maxCandleHeight = Integer.MIN_VALUE;
        int maxCandleFreqCount = 0;

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

    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int arCount = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int[] ar = new int[arCount];

        String[] arItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < arCount; i++) {
            int arItem = Integer.parseInt(arItems[i]);
            ar[i] = arItem;
        }

        int result = birthdayCakeCandles(ar);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
