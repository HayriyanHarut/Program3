class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [];
    }
    sharjvel(){
        this.directions=[
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.sharjvel();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;

        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell && this.multiply > 8) {

            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 1;

            let grass = new Grass(x, y);
            grassArr.push(grass);

            this.multiply = 0;
        }
    }
}
class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.life = 42;
        this.directions = [];
    }
    sharjvel(){
        this.directions=[
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.sharjvel();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {

            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 2;

            let grassEater = new GrassEater(x, y);
            grassEaterArr.push(grassEater);

            this.life = 0;
        }
    }
    eat() {
        let emptyCells = this.chooseCell(1);
        let newCell = random(emptyCells);

        if (newCell) {
            this.life++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }

            this.x = x;
            this.y = y;
            if (this.life >= 5) {
                this.mul();
            }
        } else {
            this.move()
        }
    }
    move() {
        this.life--;

        let emptyCells = this.chooseCell(0);
        let emptyCels = this.chooseCell(1);
        let newCell = random(emptyCells.concat(emptyCels));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            // matrixi mej gru mem MEK -> 1
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
        if (this.life < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in grassEaterArr) {
            if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                grassEaterArr.splice(i, 1)
            }
        }
    }
}
class Predator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energia = 34;
        this.directions = [];
    }
    sharjvel(){
        this.directions=[
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.sharjvel();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 3;
            let predator = new Predator(x, y);
            predatorArr.push(predator);
            this.energia = 0;
        }
    }
    kcel() {
        let emptyCells = this.chooseCell(2);
        let newCell = random(emptyCells);

        if (newCell) {
            this.energia++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            for (let i in grassEaterArr) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)
                }
            }

            this.x = x;
            this.y = y;
            if (this.energia >= 5) {
                this.mul();
            }
        } else {
            this.move()
        }
    }
    move() {
        this.energia--;
        let emptyCells = this.chooseCell(0);
        let emptyCels = this.chooseCell(1);
        let newCell = random(emptyCells.concat(emptyCels));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;
        }
        if (this.energia < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in predatorArr) {
            if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) {
                predatorArr.splice(i, 1)
            }
        }
    }
}

class Sahara{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [];
    }
    sharjvel(){
        this.directions=[
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.sharjvel();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    taracvel() {
        this.multiply++;
        let emptyCells = this.chooseCell(0);
        let emptyCell = this.chooseCell(1);
        let emptyCels = this.chooseCell(2);
        let newCell = random(emptyCells.concat(emptyCell.concat(emptyCels)));
        if (newCell && this.multiply > 8) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
            let sahara = new Sahara(x, y);
            saharaArr.push(sahara);
            this.multiply = 0;
        }
    }
 }

class alahAkbar {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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
}