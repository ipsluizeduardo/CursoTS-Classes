/*
Uma classe armazena as caracteristicas e as ações que esse objeto vai possuir.
conjunto de atributos e metodos.
*/

type Status = "ABERTO" | "FECHADO";

class Loja {
    //Atributos da nossa classe 
    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string) {
        this.nome = nome;
        this.categoria = categoria;
    }

    criarLoja(): void{
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`)
    }

    emitirPedido(mesa: number, ...pedidos: string[]): string {

        pedidos.map( (pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`)
        })

        return `Pedido na mesa ${mesa}`
    }

    mudarStatus(status: Status): void {
        if(status === "ABERTO") {
            console.log("Loja aberta")
        }
        console.log("Loja fechada")
    }

}

const redBurger = new Loja("Red Burger", "lanche")

// console.log(redBurger.nome)
// redBurger.criarLoja()
redBurger.mudarStatus("FECHADO")
console.log(redBurger.emitirPedido(48, "Coca", "Suco", "X-burger"))