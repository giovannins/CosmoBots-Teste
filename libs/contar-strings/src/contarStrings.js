function contarPalavras(objeto) {
    if (typeof objeto !== "object" || objeto === null) {
        throw new Error("O argumento deve ser um objeto válido.");
    }

    return Object.values(objeto)
        .filter(valor => typeof valor === "string")
        .flatMap(frase => frase.split(/\s+/))
        .reduce((contagem, palavra) => {
            contagem[palavra] = (contagem[palavra] || 0) + 1;
            return contagem;
        }, {});
}

export default contarPalavras;