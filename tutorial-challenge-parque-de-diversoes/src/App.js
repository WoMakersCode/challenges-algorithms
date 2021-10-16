import { useState } from 'react';
import './App.css';
import { agruparPorAltura, gerarArray } from './Utils';

const App = () => {

  const [ inputString, setInputString ] = useState("");
  const [ output, setOutput ] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();

    let array = gerarArray(inputString);
    setOutput(agruparPorAltura(array.length, array));
    setInputString("");
  };

  const handleChange = (e) => {
    e.preventDefault();

    setOutput([]);
    const { value } = e.target;
    setInputString(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>PARQUE DE DIVERSÕES</p>
      </header>
      <body className="App-body">
        <div className="data-container">
          <div className="input-container">
            <div className="txt-style">
              <h1>Agrupar Alturas dos Alunos</h1>
              <span className="main-txt">Instruções: Digite no campo abaixo as alturas dos alunos separadas por vírgula.</span>
              <span className="warning-text">ATENÇÃO: utilizar PONTO ao invés de vírgula nos números decimais (ex: 1.70)</span>
            </div>
            <input className="input-field" placeholder="Ex: 1.70, 1.65, 1.50, 1.70" type="text" onChange={handleChange} value={inputString} maxLength="100"/>
            <button className="btn" onClick={handleClick}>AGRUPAR</button>
          </div>
          <div className="output-container">{output && output.map(item => <p>{item}</p>)}</div>
        </div>
      </body>
    </div>
  );
}

export default App;


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