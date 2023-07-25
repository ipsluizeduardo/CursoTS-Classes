/*
 4 modificadores:  Public, Private, Protected, readonly
*/
class Usuario {
    protected id: number; //Podemos chamar na classe ou classes que extende a classe usuario
    nome: string;
    email: string;

    constructor(id: number, nome: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}

class Admin extends Usuario {
    cargo: string;
    nivel: number;

    constructor(id: number, nome: string, email: string, cargo: string, nivel: number) {
        // Chamando o constructor da classe pai
        super(id, nome, email)
        
        this.cargo = cargo;
        this.nivel = nivel;
    }   

    protected mudarCargo(cargo: string): void {
        console.log("Alterando cargo para: ", cargo);
        console.log("ID DO USUARIO"), this.id;
    }

    acessarAdmin() {
    this.mudarCargo("Designer")
    }
}

const usuario = new Admin(34,"Luiz", "dudu@teste.com", "Desenvolvedor", 1)

// const usuario0 = new Usuario(34,"Luix", "Emado.com")

usuario.acessarAdmin();
console.log(usuario)