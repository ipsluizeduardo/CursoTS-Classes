"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const applyMixin_1 = require("./mixin/applyMixin");
class Automovel {
    ligar() {
        console.log("Ligado");
    }
    desligar() {
        console.log("dDesligado");
    }
}
class Espeficicacao {
    constructor(descricao) {
        this.descricao = descricao;
    }
}
class Carro {
    constructor(nome) {
        this.nome = nome;
    }
}
(0, applyMixin_1.applyMixins)(Carro, [Automovel, Espeficicacao]);
const gol = new Carro("Gol");
gol.ligar();
gol.descricao = "Completo";
console.log(gol);
gol.desligar();
