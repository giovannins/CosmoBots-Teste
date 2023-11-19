
import somaNumerosPares from "../src/somaPares";
import {describe, test, expect} from "@jest/globals";

describe("somaNumerosPares", () => {

    // Teste para um array vazio
    test("retorna 0 para um array vazio", () => {
        expect(somaNumerosPares([])).toBe(0);
    });

    // Teste para um array com números pares
    test("soma números pares corretamente", () => {
        const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(somaNumerosPares(numeros)).toBe(30);
    });

    // Teste para um array com apenas números ímpares
    test("retorna 0 para um array com apenas números ímpares", () => {
        const numeros = [1, 3, 5, 7, 9];
        expect(somaNumerosPares(numeros)).toBe(0);
    });

    // Teste para um array com números negativos e pares
    test("soma números negativos e pares corretamente", () => {
        const numeros = [-2, 1, 3, -4, 5, 6, -7, 8, -9, 10];
        expect(somaNumerosPares(numeros)).toBe(18);
    });
});
