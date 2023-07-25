"use strict";
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log(`Nova conta Pessoa fisica criada com sucesso ${dados.nome}`);
        return true;
    }
}
class PessoaJuridica extends ContaBanco {
    abrirConta(dados) {
        console.log(`Nova conta Pessoa Juridica criada com sucesso ${dados.nome}`);
        return true;
    }
}
const joana = new PessoaFisica();
joana.abrirConta({
    nome: "Joana",
    numero: "34534645",
    endereco: "Rua ali"
});
const Programador = new PessoaJuridica();
Programador.abrirConta({
    nome: "Luiz",
    numero: "34534645",
    endereco: "Rua aq"
});
