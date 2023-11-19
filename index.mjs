import somaNumerosPares from "./libs/soma-de-pares/src/somaPares.js";
import contarPalavras from "./libs/contar-strings/src/contarStrings.js";


const lista = [1, 2, 3, 4, 5, 6];
console.log(somaNumerosPares(lista));

const objeto = {
    id: 1,
    nome: "João Fulano de Tal",
    idade: 18,
    descrição: "Criador de uma marca de carro, em uma empresa famosa"
};
console.log(contarPalavras(objeto));
