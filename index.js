let BOARD = require('./Board.js');

let size = parseInt(process.argv[2]);

//default to 19x19 board if no size is provided
if(isNaN(size)) {
    size = 19;
}

let game = new BOARD(size);
game.initializeBoard();

let stdin = process.openStdin();
stdin.addListener("data", d => {

    let location = game.parseLocation(d);
    game.placePiece(location[0], location[1]);
});

