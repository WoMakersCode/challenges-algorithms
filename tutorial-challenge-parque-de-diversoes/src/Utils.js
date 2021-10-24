/**
 * Função para agrupar os alunos por altura
 * @param {*} n é o número de alunos (não utilizado)
 * @param {*} array é uma estrutura contendo a sequência das alturas
 * @returns string com todas as possibilidades de agrupamentos
 */

const agruparPorAltura = (n, array) => {

  let stringArray = [];
  let times, count;

  let valoresUnicos = array.filter((item, idx) => array.indexOf(item) === idx);

  for(let i = 0; i < valoresUnicos.length; i++) {
    count = array.filter(item => item === valoresUnicos[i]).length;
    count > 1 ? times = "vezes" : times = "vez";
    stringArray.push(`${valoresUnicos[i]} ocorre ${count} ${times}`);
  }

  return stringArray;
};

/**
 * Função para gerar um array numérico dado uma string de números separados por vírgula
 * @param {*} string String a ser convertida em array
 * @returns array numérico
 */

const gerarArray = (string) => {
  let stringAjustada = string.replace(/\s/g, "");
  return stringAjustada.split(',').map(item => Number(item));
};

export { agruparPorAltura };
export { gerarArray };