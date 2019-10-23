function setup() {
    var socket = io();
    var side = 30;
    var matrix = [];

    let weatherElement = document.getElementById('weather');
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let predatorCountElement = document.getElementById('predatorCount');
    let saharaCountElement = document.getElementById('saharaCount');
    let alahakbarCountElement = document.getElementById('alahakbarCount');


    socket.on("data", drawCreatures);
   
 
   
    function drawCreatures(data) {



        matrix = data.matrix;
        weatherElement.innerText = data.weather;
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;
        predatorCountElement.innerText = data.predatorCounter;
        saharaCountElement.innerText = data.saharaCounter;
        alahakbarCountElement.innerText = data.alahakbarCounter;

        createCanvas(matrix[0].length * side, matrix.length * side)

        background('#acacac');

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if (data.weather == "summer") {
                        fill("green");
                    } else if (data.weather == "autumn") {
                        fill("orange");
                    }
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("blue");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('red');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill(2, 177, 254);
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    fill('black');
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 6) {
                    fill('#4d0000');
                    rect(j * side, i * side, side, side);
                }
            }
        }
    }
}