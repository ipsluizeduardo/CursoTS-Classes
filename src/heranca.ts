//Herança  é uma classe que erda de outra classe 
// ClassePai tem seus atributos e a classe FILHA vai herar atributos do pai alem dos seus proprios atributos

class Usuario1 {
    nome: string;
    email: string;

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }
}

class Admin1 extends Usuario1 {
    cargo: string;
    nivel: number;

    constructor(nome: string, email: string, cargo: string, nivel: number) {
        // Chamando o constructor da classe pai
        super(nome, email)
        
        this.cargo = cargo;
        this.nivel = nivel;
    }   
}

const usuario1 = new Admin1("Luiz", "dudu@teste.com", "Desenvolvedor", 1)

const usuario2 = new Usuario1("Luix", "Emado.com")

console.log(usuario2)