"use strict";
// Private não pode ser modificado ou acessado fora da classe;
class Conta {
    constructor() {
        this.limite = 450;
    }
    aumentarLimite(quantidade) {
        if (quantidade <= 1000) {
            this.limite = quantidade;
            console.log(`Agora seu limite é: ${this.limite}`);
        }
        else {
            console.log(`Limite nao aprovado`);
        }
    }
    solicitarLimite(quantidade) {
        return this.aumentarLimite(quantidade);
    }
    solicitarLimiteApp(estaAutenticado, quantidade) {
        if (estaAutenticado) {
            this.aumentarLimite(quantidade);
        }
        else {
            return false;
        }
    }
}
class BancoAfiliado extends Conta {
    limiteAfiliado() {
        return this.solicitarLimite(1000);
    }
}
const fulano = new Conta();
fulano.solicitarLimiteApp(true, 700);
const joao = new BancoAfiliado();
joao.limiteAfiliado();
console.log(joao);
