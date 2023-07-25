"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.id = "123";
        this.nome = nome;
        this.idade = idade;
    }
    mostrarId() {
        console.log('ID DO USUARIO', this.id);
    }
}
const ana = new Pessoa("Luiz", 27);
console.log("ID DA ANA", ana.id);
