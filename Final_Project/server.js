
var Grass = require("./modules/grass.js");
var GrassEater = require("./modules/grassEater.js");
var Predator = require("./modules/Preadator.js");
var Sahara = require("./modules/sahara.js");
var Alahakbar = require("./modules/alahAkbar.js");
let random = require('./modules/random');


grassArr = [];
eatArr = [];
predatorArr = [];
akbarArr = [];
saharaArr = [];
matrix = [];



grassHashiv = 0;
eatHashiv = 0;
predatorHashiv = 0;
akbarHashiv = 0;
saharaHashiv = 0;


function matrixGenerator(matrixSize, grass, eat, predator, sahara, akbar) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < eat; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < predator; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
    }
    for (let i = 0; i < sahara; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 4;
    }
    for (let i = 0; i < akbar; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 5;
    }
}
matrixGenerator(20, 25, 20, 15, 10, 2);

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);


function creatingObjects() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var grassEater = new GrassEater(x, y);
                eatArr.push(grassEater);
                eatHashiv++;
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
                grassHashiv++;
            }
            else if (matrix[y][x] == 3) {
                var predator = new Predator(x, y);
                predatorArr.push(predator);
                predatorHashiv++
            }
            else if (matrix[y][x] == 4) {
                var sahara = new Sahara(x, y);
                saharaArr.push(sahara);
                saharaHashiv++
            }
            else if (matrix[y][x] == 5) {
                var akbar = new Alahakbar(x, y);
                akbarArr.push(akbar);
                akbarHashiv++
            }
        }
    }
}

creatingObjects();

let exanak = 0;
let weather = "winter"

function game() {

    exanak++;
    if (exanak <= 10){
        weather = "summer"
    }else if (exanak <= 20){
        weather = "autumn"
    }else if (exanak > 20){
        exanak = 0
    }


    if (grassArr[0] !== undefined) {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    }
    if (eatArr[0] !== undefined) {
        for (var i in eatArr) {
            eatArr[i].eat();
        }
    }
    if (predatorArr[0] !== undefined) {
        for (var i in predatorArr) {
            predatorArr[i].kcel();
        }
    }
    if (saharaArr[0] !== undefined) {
        for (var i in saharaArr) {
            saharaArr[i].taracvel();
        }
    }
    if (akbarArr[0] !== undefined) {
        for (var i in akbarArr) {
            akbarArr[i]. akbar();
        }
    }


    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassLiveCounter: grassArr.length,
        eatCounter: eatHashiv,
        huntCounter: huntHashiv,
        termCounter: termHashiv,
        titanCounter: titanHashiv,
        weather: weather
    }


    io.sockets.emit("data", sendData);
}



setInterval(game, 1000)