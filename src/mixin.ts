import { applyMixins } from "./mixin/applyMixin";

class Automovel {
    ligar(): void {
        console.log("Ligado")
    }

    desligar(): void {
        console.log("dDesligado")
    }
}

class Espeficicacao {
    descricao: string;

    constructor(descricao: string) {
        this.descricao = descricao;
    }
}

class Carro {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

interface Carro extends Automovel, Espeficicacao{  }

applyMixins(Carro, [Automovel, Espeficicacao])

const gol = new Carro("Gol");

gol.ligar();

gol.descricao = "Completo";

console.log(gol)

gol.desligar();