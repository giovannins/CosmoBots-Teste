import contarPalavras from "../src/contarStrings";
import { test, describe, expect } from "@jest/globals";

describe("contarPalavras", () => {
    test("conta corretamente as palavras", () => {
        const objeto = {
            id: 1,
            nome: "João da Silva",
            idade: 22,
            descricao: "João é um amante de carros da marca XYZ"
        };

        const resultadoContagem = contarPalavras(objeto);

        expect(resultadoContagem).toEqual({
            João: 2,
            da: 2,
            Silva: 1,
            é: 1,
            um: 1,
            amante: 1,
            de: 1,
            carros: 1,
            marca: 1,
            XYZ: 1
        });
    });

    test("lida com objeto vazio", () => {
        const objetoVazio = {};
        const resultadoContagem = contarPalavras(objetoVazio);

        expect(resultadoContagem).toEqual({});
    });

    test("lida com objeto sem strings", () => {
        const objetoSemStrings = {
            id: 1,
            idade: 22,
            ativo: true
        };
        const resultadoContagem = contarPalavras(objetoSemStrings);

        expect(resultadoContagem).toEqual({});
    });

    test("lança erro para argumento não-objeto", () => {
        const argumentoInvalido = "Isso não é um objeto";

        expect(() => contarPalavras(argumentoInvalido)).toThrow("O argumento deve ser um objeto válido.");
    });
});
