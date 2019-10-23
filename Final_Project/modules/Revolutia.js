var LiveForm = require("./LiveForm");


module.exports = class Revolutia extends LiveForm {
    revolutia() {
        console.log(5);
        
        if (predatorArr == []) {
            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix.length; x++) {
                    matrix[y][x] = 0;
                }
            }
            grassArr = [];
            grassEaterArr = [];
            akbarArr = [];
            saharaArr = [];
            matrixGenerator(23, 40, 20, 5, 10, 10, 1);
        }
    }
}
