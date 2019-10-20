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
    socket.on("Key",Keycode );
    function Keycode(keyCode) {
        if (keyCode === UP_ARROW) {
            let x = this.x;
            let y = this.y - 1;

            if (matrix.length - 1 == this.y) {
                this.y = 59;
            }
            else {
                matrix[y][x] = 5;
                matrix[this.y][this.x] = 0;
            }
            this.y = y;
            this.x = x;
        }
        else if (keyCode === DOWN_ARROW) {
            let x = this.x;
            let y = this.y + 1;
            if (matrix.length - 1 == this.y) {
                this.y = 0
            }
            else {
                matrix[y][x] = 5;
                matrix[this.y][this.x] = 0;
            }
            this.y = y;
            this.x = x;
        }
        else if (keyCode === LEFT_ARROW) {
            let x = this.x - 1;
            let y = this.y;
            if (matrix[x].length - 1 == this.x) {
                this.x = 59;
            }
            else {
                matrix[y][x] = 5;
                matrix[this.y][this.x] = 0;
            }
            this.y = y;
            this.x = x;
        }
        else if (keyCode === RIGHT_ARROW) {
            let x = this.x + 1;
            let y = this.y;
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;
        }
        return false;
    }
    

    function drawCreatures(data) {


        
        matrix = data.matrix;
        weatherElement.innerText = data.weather;
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;
        grassEaterCountElement.innerText = data.eatCounter;
        predatorCountElement.innerText = data.predatorCounter;
        saharaCountElement.innerText = data.saharaCounter;
        alahakbarCountElement.innerText = data.alahakbarCounter;
       
        createCanvas(matrix[0].length * side, matrix.length * side)
       
        background('#acacac');
        
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if(data.weather == "summer"){
                        fill("green");
                    }else if (data.weather == "autumn"){
                        fill("orange");
                    }
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("orange");
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
            }
        }
    }
}