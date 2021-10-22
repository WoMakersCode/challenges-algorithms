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
