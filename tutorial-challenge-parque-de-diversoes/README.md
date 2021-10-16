# Desafio Parque de Diversões

**Vamos ao enunciado:**

Hoje é um dia especial, Graziele, professora de história da turma do 2º ano, levará seus alunos em um parque de diversões de história natural, entretanto, alguns brinquedos tem pré-requisito de altura e sua tarefa é ajudar a professora a organizar as coisas. A professora decidiu agrupar os alunos por alturas semelhantes. Logo, sua entrada será um número inteiro n = Número de alunos, seguido de uma sequência com m números reais que representam suas respectivas alturas. A saída de seu programa de ser o agrupamento de todas as alturas dos alunos.

**Considerações:**
Por conta da escolha da linguagem e da estrutura da aplicação, tomei a liberdade de adaptar os valores de entrada para contemplarem apenas a sequência de alturas, desconsiderando o número de alunos.

**Exemplo de Entrada**

```
  1.30, 1.53, 1.53, 1.35, 1.50, 1.53, 1.30, 1.30

```

**Exemplo de Saida**

```
  1.30 ocorre 3 vezes
  1.53 ocorre 3 vezes
  1.35 ocorre 1 vez
  1.50 ocorre 1 vez

```

# Estrutura do projeto

Primeira coisa a ser feita, é organizar o projeto.

Devo confessar que o projeto fica devendo em termos de arquitetura pois tentei deixá-lo o mais simples possível. Assim sendo, mantive a estrutura original que é gerada com o create-react-app, apenas removendo o que não seria utilizado. A única coisa de diferente foi que resolvi separar as regras de negócio em um arquivo à parte chamado Utils.js.

Legal! Foi construido dessa forma mas, como funciona?

# CÓDIGO

:thinking: vamos resolver esse problema?

# App.js

É onde fica basicamente toda a parte de UI da aplicação, com todo o HTML e toda a lógica que rege os elementos da página.

Utilizei o useState para a manipulação de estados. O inputString é a string que está sendo digitada no input da página com a sequência de alturas e o output é o array com as strings a serem exibidas de cada agrupamento.

```javascript
  const [ inputString, setInputString ] = useState("");
  const [ output, setOutput ] = useState([]);
```

Para atualizar os valores dos estados, criei o handleClick e o handleChange.

O handleClick nada mais é do que o que será disparado no click do botão "AGRUPAR", ou seja, irá pegar a string do input, gerar o array numérico e fazer o agrupamento por altura, setando o resultado no estado "output". Além disso, limpa o input para que possa ser digitada uma nova sequência de alturas.

```javascript
  const handleClick = (e) => {
    e.preventDefault();

    let array = gerarArray(inputString);
    setOutput(agruparPorAltura(array.length, array));
    setInputString("");
  };
```

Já o handleChange é como se estivesse escutando cada tecla digitada no input e fosse atualizando a inputString, para que quando o botão for pressionado, a gente tenha armazenado tudo que foi digitado em uma variável. Além disso, limpamos o array de strings do output para que a próxima sequência de alturas digitadas não fique poluída com dados anteriores.

```javascript
  const handleChange = (e) => {
    e.preventDefault();

    setOutput([]);
    const { value } = e.target;
    setInputString(value);
  };
```

Por fim, na renderização DOM tem a lógica de exibição do resultado (output). Esse trecho nada mais é do que um check se existe algum valor na variável output, e caso exista, itera sobre cada uma das strings de agrupamento e as insere em tags <p>, para que assim sejam exibidas separadamente.

```javascript
  <div className="output-container">{output && output.map(item => <p>{item}</p>)}</div>
```

# App.css

Toda a estilização da página.

# Utils.css

Considerando a forma como foi elaborada essa solução, se fez necessário duas funções para manipular os dados:

**agruparPorAltura(n, array)**
Aqui é onde vamos fazer o agrupamento por alturas iguais. Mantive nessa parte as entradas sugeridas no exercício, porém o valor de n não é utilizado, apenas os valores do array.
Para separar as alturas em grupos, primeiro criei um array apenas com os valores únicos (ou seja, não duplicados):

```javascript
  let valoresUnicos = array.filter((item, idx) => array.indexOf(item) === idx);
```

Depois, gerei um loop para percorrer cada um desses valores únicos de modo a contar quantas ocorrências existiam de cada um deles no array original.

```javascript
  count = array.filter(item => item === valoresUnicos[i]).length;
```

Por fim, para montar a string que será exibida na tela, verifiquei se o número de ocorrências é maior do que um, para poder utilizar a palavra "vez" da forma correta.

```javascript
  count > 1 ? times = "vezes" : times = "vez";
```

E então foi gerada a string para aquele grupo de altura, e ela foi inserida em um array (que será iterado durante a renderização) e esse é o retorno da função.

```javascript
  stringArray.push(`${valoresUnicos[i]} ocorre ${count} ${times}`);
```

**gerarArray(string)**
Essa função formata a string recebida como input com as alturas, eliminando qualquer espaço que possa ter sido inserido.

```javascript
  let stringAjustada = string.replace(/\s/g, "");
```

Além disso, quebra a string em um array numérico que é retornado pela função.

```javascript
  stringAjustada.split(',').map(item => Number(item));
```

Para que funcione devidamente, parti da premissa que o usuário irá digitar os valores de acordo com as instruções fornecidas.

# COMO RODAR?

Caso tenha interesse em ver a página funcionando e não apenas o código... Entrar na pasta do challenge pelo console e caso você já tenha instalado npm ou yarn, digitar

```
  npm start
```

ou

```
  yarn start
```

## FIM

Espero ter ajudado com algum novo conhecimento ou talvez um novo olhar sobre o desafio :) Se tiverem alguma dúvida, sugestão, ou só mandar um oi mesmo, pode me achar por aqui [Giu Roperto](https://www.linkedin.com/in/giuliaroperto/)
