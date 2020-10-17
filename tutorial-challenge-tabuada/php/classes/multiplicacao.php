<?php

session_start();

class Multiplicacao
{

    public function multiplicar($numero, $quantidadeVezes)
    {

        $tabuada = [];

        for ($i = 0; $i <= $quantidadeVezes; $i++) {
            $tabuada[] = [
                'soma' => $numero * $i,
                'numero' => $numero,
                'multiplicador' => $i
            ];
        }

        $_SESSION['resultado'] = $tabuada;
    }

    public function tabuada()
    {
        foreach ($_SESSION['resultado'] as $valor) {
            echo "<tr>";
            echo "<td> $valor[numero]  *  $valor[multiplicador] </td>";
            echo "<td> $valor[soma]  </td>";
            echo '</tr>';
        }
    }
}