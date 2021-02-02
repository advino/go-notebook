let BOARD = require('./Board.js');

let size = parseInt(process.argv[2]);

let game = new BOARD(size);
game.initializeBoard();

let stdin = process.openStdin();
stdin.addListener("data", d => {

    let location = game.parseLocation(d);
    game.placePiece(location[0], location[1]);
});

