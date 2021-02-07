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

        this.parseBoard();
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

    checkStone(elm){
        let loc = elm.getLocation();
        let color = elm.getColor();

        let x = loc[0];
        let y = loc[1];

        let points = [
            [y, x + 1], //one to right
            [y, x - 1], //one to the left
            [y + 1, x], //one below
            [y - 1, x] //one above
        ]

        let liberties = points.map(p => {

            let locX = p[0];
            let locY = p[1];

            let s = this.board[locX][locY];
            let status = false;
            if(typeof s == 'object') {
                let c = s.getColor();
                status = c !== color;
            } 

            return status;
        });

        let currentLib = 4;
        let libCount = liberties.filter(l => {
            return l === true;
        });

        let updatedLib = currentLib - libCount.length;
        
        return updatedLib;
    }

    parseBoard() {
        for(let i = 0; i < this.size; i++) {
            this.board[i].forEach(elm => {
                if(typeof elm === 'object') {
                    let lib = this.checkStone(elm);
                    console.log(lib);
                    if(lib > 0) {
                        elm.updateLiberties(lib);
                    } else {
                        let loc = elm.getLocation();
                        this.board[loc[1]][loc[0]] = 0;
                    }
                }
            })
        }
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