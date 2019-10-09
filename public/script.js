let matrix = [];
let side = 10;
let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let saharaArr = [];
let alahAkbaArr = [];


function setup() {
    matrixGenerator(60, 50, 40, 30, 15, 1);
    frameRate(8);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass);
            }
            if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y);
                grassEaterArr.push(grassEater);
            }
            if (matrix[y][x] == 3) {
                let predator = new Predator(x, y);
                predatorArr.push(predator);
            }
            if (matrix[y][x] == 4) {
                let sahara = new Sahara(x, y);
                saharaArr.push(sahara);
            }
            if (matrix[y][x] == 5) {
                let akbar = new alahAkbar(x, y);
                alahAkbaArr.push(akbar);
            }
        }
    }
    function matrixGenerator(matrixSize, grass, grassEater, Predator, Man, alahAkba) {
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = [];
            for (let o = 0; o < matrixSize; o++) {
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grass; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 1;
        }
        for (let i = 0; i < grassEater; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 2;
        }
        for (let i = 0; i < Predator; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 3;
        }
        for (let i = 0; i < Man; i++) {
            let customX = 0;
            let customY = 59;
            matrix[customY][customX] = 4;
        }
        for (let i = 0; i < alahAkba; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 5;
        }
    }
}

function draw() {
    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("orange");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            else if (matrix[y][x] == 4) {
                fill(2, 177, 254);
            }
            rect(x * side, y * side, side, side);
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].kcel();
    }
    for (var i in saharaArr) {
        saharaArr[i].taracvel();
    }
    for (var i in alahAkbaArr) {
        alahAkbaArr[i].akbar();
    }

}