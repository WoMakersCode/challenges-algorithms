<?php

require_once __DIR__ . '../../model/multiplicacaoModel.php';

class MultiplicacaoController extends MultiplicacaoModel
{

    public function multiplicar($numero, $quantidadeVezes)
    {
        for ($i = 0; $i <= $quantidadeVezes; $i++) {
            $this->valores[] = [
                'valorMultiplicado' => $numero * $i,
                'numero' => $numero,
                'multiplicador' => $i
            ];
        }
    }

    public function tabuada()
    {
        foreach ($this->valores as $valor) {
            echo "<tr>";
            echo "<td> $valor[numero]  *  $valor[multiplicador] </td>";
            echo "<td> $valor[valorMultiplicado]  </td>";
            echo '</tr>';
        }
    }
}