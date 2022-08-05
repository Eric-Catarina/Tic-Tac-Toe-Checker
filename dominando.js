function TTTChecker(array) {

    function TresCasasSaoIguais(threeArray) {
        return (threeArray[0] == threeArray[1] && threeArray[1] == threeArray[2])
    }

    function ArrayChecker(threeArray) {
        if (TresCasasSaoIguais(threeArray)) {
            if (threeArray[0] == 1) {
                return 1
            }
            if (threeArray[0] == 2) {
                return 2
            }
            if (threeArray[0] == 0) {
                return -1
            }
        }
        else {
            return 0
        }
    }

    function RowsChecker(array) {
        for (let currentRow = 0; currentRow < 3; currentRow++) {
            
            if (ArrayChecker(array[currentRow]) == 1 ){
                return 1
            }
            if (ArrayChecker(array[currentRow]) == 2 ){
                return 2
            }
            if (ArrayChecker(array[currentRow]) == -1 ){
                return -1
            }
        }
        
            return 0
        
        
    }

    function ColumnsChecker(array){
        for (let currentCol = 0; currentCol < 3; currentCol ++){

        }
    }

    return RowsChecker(array)

};


let arrayTeste =
[[1, 0, 1],
 [2, 2, 2],
 [2, 0, 1]]

console.log(TTTChecker(arrayTeste))
                 /*
console.log(arrayTeste[2][0])
*/