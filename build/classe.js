"use strict";
/*
Uma classe armazena as caracteristicas e as ações que esse objeto vai possuir.
conjunto de atributos e metodos.
*/
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Saindo novo pedido: ${pedido}`);
        });
        return `Pedido na mesa ${mesa}`;
    }
    mudarStatus(status) {
        if (status === "ABERTO") {
            console.log("Loja aberta");
        }
        console.log("Loja fechada");
    }
}
const redBurger = new Loja("Red Burger", "lanche");
// console.log(redBurger.nome)
// redBurger.criarLoja()
redBurger.mudarStatus("FECHADO");
console.log(redBurger.emitirPedido(48, "Coca", "Suco", "X-burger"));
