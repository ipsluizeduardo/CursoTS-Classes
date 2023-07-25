"use strict";
/*
 4 modificadores:  Public, Private, Protected, readonly
*/
class Usuario {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}
class Admin extends Usuario {
    constructor(id, nome, email, cargo, nivel) {
        // Chamando o constructor da classe pai
        super(id, nome, email);
        this.cargo = cargo;
        this.nivel = nivel;
    }
    mudarCargo(cargo) {
        console.log("Alterando cargo para: ", cargo);
        console.log("ID DO USUARIO"), this.id;
    }
    acessarAdmin() {
        this.mudarCargo("Designer");
    }
}
const usuario = new Admin(34, "Luiz", "dudu@teste.com", "Desenvolvedor", 1);
// const usuario0 = new Usuario(34,"Luix", "Emado.com")
usuario.acessarAdmin();
console.log(usuario);
