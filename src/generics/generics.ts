// Generics

/*
Permite criar estruturas que serao adaptaveis a varios tipos de dados.
Adjunto a reaproveitar melhor nosso codigo e deixa-lo mais flexivel

Podemos user os generics: 
Funções | interfaces / type | classes
*/

function repositorio<T extends string| number>() {
    let dados: T;

    function getDados() {
        return dados;
    }

    function setDados(novoDado: T) {
        dados = novoDado;
    }

    return { getDados, setDados }
}

const repo1 = repositorio<string | number>();

repo1.setDados(15);

console.log(repo1.getDados());

const repo2 = repositorio<number>();

repo2.setDados(35);

console.log(repo2.getDados());
