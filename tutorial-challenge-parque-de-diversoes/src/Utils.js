/**
 * Função para agrupar os alunos por altura
 * @param {*} n é o número de alunos (não utilizado)
 * @param {*} array é uma estrutura contendo a sequência das alturas
 * @returns string com todas as possibilidades de agrupamentos
 */

const agruparPorAltura = (n, array) => {

  let string = "";
  let times, eol, count;

  let valoresUnicos = array.filter((item, idx) => array.indexOf(item) === idx);

  for(let i = 0; i < valoresUnicos.length; i++) {
    console.log(string);
    count = array.filter(item => item === valoresUnicos[i]).length;
    count > 1 ? times = "vezes" : times = "vez";
    i < valoresUnicos.length - 1 ? eol = "\n" : eol = "";
    string += `${valoresUnicos[i]} ocorre ${count} ${times}${eol}`;

    console.log(count);
    console.log(times);
    console.log(string);

  }

  return string;
};

export default agruparPorAltura;