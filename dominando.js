const transpose = (matrix) => {
    let [row] = matrix
    return row.map((value, column) => matrix.map(row => row[column]))
}
function TTTChecker(array) {
    let estaOcupadoPor =
    {
        vazio: 0,
        bolinha: 2,
        xizinho: 1,
    }
    let tipoDoResultadoEh =
    {
        naoAcabado: -1,
        xizinhoWins: 1,
        bolinhaWins: 2,
        empatou: 0
    }

    function TresCasasSaoIguais(arrayDeTresPosicoes) {
        return (arrayDeTresPosicoes[0] == arrayDeTresPosicoes[1] && arrayDeTresPosicoes[1] == arrayDeTresPosicoes[2])
    }

    function ArrayChecker(arrayDeTresPosicoes) {
        if (arrayDeTresPosicoes.includes(0)) {
            return tipoDoResultadoEh.naoAcabado
        }

        if (TresCasasSaoIguais(arrayDeTresPosicoes)) {
            let elementoQueEhIgual = arrayDeTresPosicoes[0]

            if (elementoQueEhIgual == estaOcupadoPor.xizinho) {
                return tipoDoResultadoEh.xizinhoWins
            }
            if (elementoQueEhIgual == estaOcupadoPor.bolinha) {
                return tipoDoResultadoEh.bolinhaWins
            }

        }

        else {
            return tipoDoResultadoEh.empatou
        }
    }

    function RowsChecker(array) {
        for (let currentRow = 0; currentRow < 3; currentRow++) {

            let estadoAtual = ArrayChecker(array[currentRow])
            if (estadoAtual == 1 || estadoAtual == 2 || estadoAtual == -1)
                return estadoAtual

        }
        return 0
    }

    let resultadoLinhas = RowsChecker(array)
    let resultadoColunas = RowsChecker(transpose(array))

    let diagonalUm = [array[0][0], array[1][1], array[2][2]]
    let diagonalDois = [array[2][0], array[1][1], [0][2]]
    let resultadoDiagonalUm = ArrayChecker(diagonalUm)
    let resultadoDiagonalDois = ArrayChecker(diagonalDois)

    const ProvaFinal = () => {
        const tipoDoResultado_ = [2, 1, -1, 0]
        for (let tipoDoResultado of tipoDoResultado_) {

            if (resultadoLinhas == tipoDoResultado || resultadoColunas == tipoDoResultado || resultadoDiagonalUm == tipoDoResultado || resultadoDiagonalDois == tipoDoResultado) {
                return tipoDoResultado

            }
        }
    }
    return ProvaFinal()
};


let arrayTeste =
    [[1, 2, 2],
    [2, 1, 1],
    [2, 1, 2]]

console.log(TTTChecker(arrayTeste))
                 /*
console.log(arrayTeste[2][0])
*/