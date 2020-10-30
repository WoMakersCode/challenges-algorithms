# Desafio trocar vogal por asterisco

**Vamos ao enunciado:**

Usuário digita uma palavra ou frase, e programa retorna a mesma com as vogais trocadas por \*(asterisco).

**Exemplo de Entrada**

```
  a lenda de zelda

```

**Exemplo de Saida**

```
  * l*nd* d* z*ld*

```

# Estrutura do projeto

Primeira coisa a ser feita, é organizar o projeto.

O projeto contém uma pasta chamada 'assets', que irá conter todos os arquivos de estilo e javascript. Dentro iremos colocar um arquivo chamado 'funcoes.js' que será responsavel por guardar a regra de négocio em VUE. Além do javascript teremos o arquivo em CSS.

Legal! Foi construido dessa forma mas, como funciona?

# CÒDIGO

thinking: vamos resolver esse problema?

# funcoes.js

Para que a regra de negocio do VUE funcione na tela do HTML, é preciso definir o nucleo do VUE que irá habilitar a renderizamento do DOM.

Renderiza os dados assim que a página termina de carregar

```javascript
  window.addEventListener('load', function () {
```

Declaração do núcleo do VUE

```javascript
    new Vue({
```

Definindo o nome do elemento, que será referenciado no HTML

```javascript
    el:'#app',
```

Declaração de variaveis, que poderá ser utilizada no projeto

```javascript
  data: {
    palavra: '',
    palavraAsteriscos: ''
  },
```

Essa diretiva é responsavel por escutar a variavel que passamos no input chamada de palavra, e sempre que houver alteração nessa variavel a função 'trocarVogaisPorAsteriscos' será executada.

Mas por que voce fez dessa forma?
por que o usuário vai digitar,e a medida que ele for digitando eu quero que apareça na tela já com os asterisco no lugar das vogais.

```javascript
  watch: {
  'palavra': 'trocarVogaisPorAsteriscos'
  },
```

O local aonde declara os metodos:

```javascript
  methods: {
```

Sempre que a pessoa digita será passado para esse parametro

```javascript
  trocarVogaisPorAsteriscos(palavra){
```

Estou passando o valor da palavra modificada (Utilizado REGEX), para a variavel this.palavraAsteriscos e depois eu chamo no HTML.

```javascript
  this.palavraAsteriscos = palavra.replace(/[aeiouAEIOU]/gi,'*');
  }
```

# index.html

Nesse arquivo está basicamente a estrutura em HTML.

Declaração do DOM, para que o VUE consiga controlar o conteudo HTML que está dento dessa div

```html
<div id="app"></div>
```

O v-model é utilizado pela a entrada e saida de valores que se digita no input

```html
<input type="text" id="palavra" name="palavra" v-model="palavra" />
```

Função responsavel por converter as vogais em asterisco

```html
<span class="palavra-asteriscos">{{ palavraAsteriscos }}<span></span></span>
```

Declaração do framework VUE

```html
<script
  type=" text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.8/vue.js"
></script>
```

# Documentação

Se desejar saber mais sobre o VUE entre nesse link: https://vuejs.org/v2/guide/installation.html

## FIM

Demais dúvidas podem me chamar nas redes sociais [@ielenyFilgueira](https://www.linkedin.com/in/ieleny-filgueira-3b370a128/)
