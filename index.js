let BOARD = require('./Board.js');


let game = new BOARD(13);
game.initializeBoard();

let stdin = process.openStdin();
stdin.addListener("data", d => {

    let location = game.parseLocation(d);

    game.placePiece(location[0], location[1]);
});