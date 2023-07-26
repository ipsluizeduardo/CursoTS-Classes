"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusConnection = exports.connection = void 0;
function connection(info) {
    console.log("CONEXAO REALIZADA COM SUCESSO: ", info.ip);
    return true;
}
exports.connection = connection;
function statusConnection() {
    console.log("SERVDOR FUNCINANDO 100%");
}
exports.statusConnection = statusConnection;
