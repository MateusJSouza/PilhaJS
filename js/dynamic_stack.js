class DynamicStack {

    constructor() { //iniciando construtor
        this.top = null; //topo nulo
        this.length = 0; //tamanho nulo
    }

    push(element) {
        let newNode = new Node(element); //variável newNode cria um novo nó
        newNode.next = this.top; //próximo novo nó recebe topo
        this.top = newNode; //topo recebe novo nó
        this.length++; //incremento
    }

    pop() {
        if (this.top==null)  //se o topo for igual a nulo
            return null; //retornar nulo.
        let deadNode = this.top; //variável deadNode recebe topo
        this.top = this.top.next; //topo recebe próximo topo
        deadNode.next = null; //próximo nó morto recebe nulo.
        this.length--; //decremento
        return deadNode.element; //retorna elemento do nó morto.
    }

    peek() {
        return this.top.element; //retornando elemento do topo
    }

    isEmpty() {
        return this.top==null; //retorna se o top é nulo.
    }

    size() {
        return this.length; //tamanho
    }

    clear() { //limpar
        this.top= null; //top recebe nulo.
        this.length=0; //tamanho recebe 0. 
    }

    print(separator = ' - ') { //separador
        let s = ""; //variável s recebe nada
        for(let node = this.top; node!=null ; node=node.next) //para o nó receber top, for diferente de nulo, e o nó receber o próximo nó, faça
            s+=node.element+separator; //variável s mais elemento do nó mais separador. 
        return s.substring(0, s.length-separator.length); //retornar variável s substring, que corta uma string de 0 até o tamanho da variável s menor o tamanho do separador.
    }
}