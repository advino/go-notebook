class Board {

    constructor(_count) {
        this.count = _count;
        this.board = [];
        this.turn = true;
    }

    board() {
        return this.board;
    }

    count() {

        return this.count;
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

        for(let i = 0; i < this.count; i++) {
            let arr = new Array(this.count).fill(null);
            this.board.push(arr);
        }

        console.log("Board set with size of", this.count);
    }

    placePiece(x, y) {
        if(this.turn) {
            this.board[x][y] = 1;
        } else {
            this.board[x][y] = 0;
        }

        this.changeTurn();
        this.renderBoard();
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
        for(let i = 0; i < this.count; i++) {
            let row = "";
            this.board[i].forEach(element => {
                if(element === 1) {
                    row += "⚫️";
                } else if(element === 0) {
                    row += "⚪️";
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