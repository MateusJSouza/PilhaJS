class StaticStack {

    constructor(){
        this.data = new Array(10); //criando novo array na variável data
        this.top = -1; //topo iniciando com -1
    }
    
    push (element) {
        this.top++; //topo incrementado
        this.data[this.top]= element; //array na posição do topo recebe elemento
    }

    pop() {
        this.top--; //decrementando
    }

    peek() { 
        if(this.top>=0){ //se o topo for maior ou igual a 0
            return this.data[this.top]; //retornar array na posição do topo
        }
        return null;
    }

    isEmpty() { //função para verificar se o array está vazio
        return this.top==-1; //retornar topo igual a -1
    }

    size() { //verificando tamanho
        return this.top+1; //topo mais um
    }

    clear() { //limpar
        this.top = -1; //variável top recebe -1
    }
    
    print(separator=' - ') {
        let s = ''; //variável s sem nada
        for(let i = this.top; i>=0 ; i--){ //para variável i receber topo, for maior ou igual a 0, decremento, faça 
            s+=this.data[i]+separator; //variável s mais array na posição i mais separador
        }
        return s.substring(0, s.length-separator.length); //variável s utilizando o método substring que corta a string da posição 0 até o tamanho da variável s menos o tamanho do separador.
    }
}