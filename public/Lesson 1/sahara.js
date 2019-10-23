class Sahara {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [];
    }
    sharjvel() {
        this.directions = [
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