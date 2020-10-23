window.addEventListener('load', function () {
    new Vue({
    
        el:'#app',
    
        data: {
            palavra: '',
            palavraAsteriscos: ''
        },

        watch: {
          'palavra': 'trocarVogaisPorAsteriscos'
        },

        methods: {
            trocarVogaisPorAsteriscos(palavra){
                this.palavraAsteriscos = palavra.replace(/[aeiouAEIOU]/gi,'*');
            }
        }
    })
    
})
