import './App.css';
import agruparPorAltura from './Utils';

const App = () => {

  let teste = agruparPorAltura(1, [1.0, 2.0]);
  console.log(teste);

  return (
    <div className="App">
      <header className="App-header">
        <p>PARQUE DE DIVERSÕES</p>
      </header>
      <body className="App-body">
        <div className="data-container">
          <div className="input-container">
            <p>Inserir todas as alturas dos alunos separadas por vírgula.</p>
            <p>ATENÇÃO: utilizar PONTO nos números decimais (ex: 1.70)</p>
            <input className="input-field" placeholder="Ex: 1.70, 1.65, 1.50, 1.70" type="text" />
            <button>AGRUPAR</button>
          </div>
          <div className="output-container">
            {teste}
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;




// // Hoje é um dia especial, Graziele, professora de história da turma do 2º ano, levará seus alunos em um parque de diversões de história natural, entretanto, alguns brinquedos tem pré-requisito de altura e sua tarefa é ajudar a professora a organizar as coisas. A professora decidiu agrupar os alunos por alturas semelhantes.Logo, sua entrada será um número inteiro n = Número de alunos, seguido de uma sequência com m números reais que representam suas respectivas alturas. A saída de seu programa de ser o agrupamento de todas as alturas dos alunos.

// // Exemplo: n = 8
// // Seqüência: 1.30, 1.53, 1.53, 1.35, 1.50, 1.53, 1.30, 1.30
// // Saída: 1.30 ocorre 3 vezes
// // 1.53 ocorre 3 vezes
// // 1.35 ocorre 1 vez
// // 1.50 ocorre 1 vez
// // 1.30 ocorre 2 vezes

// const agruparPorAltura = (n, array) => {

//   //  filtrar o array para selecionar apenas as entradas únicas
//   let valoresUnicos = array.filter((item, idx) => array.indexOf(item) == idx);
  
//   // criando variaveis para (respectivamente):
//   // 1. a string final (tipo String)
//   // 2. escolher entre a palavra "vez" ou "vezes" (tipo String)
//   // 3. colocar ou não a quebra de linha ao final da frase, pois se for o ultimo elemento não devemos adicionar a quebra (tipo String)
//   // 4. a quantidade de ocorrências de cada altura (tipo inteiro)
//   let string, times, eol, count;
  
//   // loop para iterar sob o array de valores unicos e para contar quantas ocorrencias no array original de cada valor
//   for(let i = 0; i < valoresUnicos.length; i++) {
//     // verificando quantas ocorrencias de cada altura
//     count = array.filter(item => item === valoresUnicos[i]).length;
//     // selecionando a conjugação correta da palavra vez
//     count > 1 ? times = "vezes" : times = "vez";
//     // decidindo se será adicionada a quebra de linha ao final (o que não deve ocorrer se for o último elemento da sequencia)
//     i < valoresUnicos.length - 1 ? eol = "\n" : eol = "";
//     // por fim, concatenamos a string com os novos valores de altura e o numero de ocorrencias
//     string += `${valoresUnicos[i]} ocorre ${count} ${times}${eol}`;
//   }
  
//   // e retornamos a string final
//   return string;
//   };

// // testando com o exemplo proposto
// let n = 8;
// let array = [1.30, 1.53, 1.53, 1.35, 1.50, 1.53, 1.30, 1.30];
// console.log(agruparPorAltura(n, array));