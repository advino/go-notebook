let STONE = require('./Stone.js');

class Board {

    constructor(_size) {
        
        this.size = _size;
        this.board = [];
        this.turn = true;
        this.move = 0;
    }

    board() {
        return this.board;
    }

    size() {
        return this.size;
    }

    currentTurn() {        
        if(this.turn) {
            return "black";
        } else { 
            return "white";
        }
    }

    changeTurn() {

        this.turn = !this.turn;
    }

    initializeBoard() {

        for(let i = 0; i < this.size; i++) {
            let arr = new Array(this.size).fill(0);
            this.board.push(arr);
        }

        console.log("Board set with size of", this.size);
        console.log("Place pieces by typing in their x,y coordinates");
        console.log("e.g 3,3"); 
    }

    placePiece(x, y) {



        this.board[y][x] = new STONE(this.turn, [x,y]);


        this.changeTurn();
        this.renderBoard();
        this.move++;
    }   

    parseLocation(data) {
        let raw = data.toString().trim();
        let rawSplit = raw.split(',');
        let loc = rawSplit.map(elm => {
            return parseInt(elm) - 1;
        });

        return loc;
    }

    renderBoard() {

        console.log("-----------------");
        for(let i = 0; i < this.size; i++) {
            let row = "";
            this.board[i].forEach(element => {

                if(typeof element === 'object') {
                    let color = element.getColor();
                    if(color === "black") {
                        row += "⚫️";
                    } else {
                        row += "⚪️";
                    }
                } else {
                    row += "➕";
                }
            });

            console.log(row);
        }

        console.log("-----------------");
    }
}

module.exports = Board;