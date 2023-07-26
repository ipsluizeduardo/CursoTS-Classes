import { connection, statusConnection } from "./database/connections";
import status, { resetarBanco } from "./database/aplicativo";

function acessarSistema(){
    connection({ip: "192.168.54.10", name: "MySQL"})
}

status();
resetarBanco();
