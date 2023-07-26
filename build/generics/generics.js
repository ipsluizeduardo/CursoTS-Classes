"use strict";
// Generics
/*
Permite criar estruturas que serao adaptaveis a varios tipos de dados.
Adjunto a reaproveitar melhor nosso codigo e deixa-lo mais flexivel

Podemos user os generics:
Funções | interfaces / type | classes
*/
function repositorio() {
    let dados;
    function getDados() {
        return dados;
    }
    function setDados(novoDado) {
        dados = novoDado;
    }
    return { getDados, setDados };
}
const repo1 = repositorio();
repo1.setDados(15);
console.log(repo1.getDados());
const repo2 = repositorio();
repo2.setDados(35);
console.log(repo2.getDados());
