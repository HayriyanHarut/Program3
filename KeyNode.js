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