var LiveForm = require("./LiveForm");

module.exports = class alahAkbar extends LiveForm {

    constructor(x, y) {
        super(x, y);
    }
    akbar() {
        if (this.y == 0) {
            this.y = 58;
            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix.length; x++) {
                    matrix[y][x] = 1;
                }
                grassArr = [];
                grassEaterArr = [];
                predatorArr = [];
                saharaArr = [];
            }
        }
        if (this.y == 59) {
            this.y = 1;
            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix.length; x++) {
                    matrix[y][x] = 2;
                }
                grassArr = [];
                grassEaterArr = [];
                predatorArr = [];
                saharaArr = [];
            }
        }
        if (this.x == 0) {

            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix.length; x++) {
                    matrix[y][x] = 3;
                }
                grassArr = [];
                grassEaterArr = [];
                predatorArr = [];
                saharaArr = [];
            }
            this.x = 58;
        }
        if (this.x == 59) {
            this.x = 1;
            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix.length; x++) {
                    matrix[y][x] = 4;

                }
                grassArr = [];
                grassEaterArr = [];
                predatorArr = [];
                saharaArr = [];
            }
        }
         Keycode
    }      
}