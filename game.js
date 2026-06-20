let game = new Chess();
let board = null;
let selectedSquare = null;

const $status = $('#status');
const $difficulty = $('#difficulty');

function removeHighlights() {
    $('#myBoard .square-55d63').removeClass('highlight-selected highlight-legal');
}

function showLegalMoves(square) {
    removeHighlights();
    $(`#myBoard .square-${square}`).addClass('highlight-selected');
    let moves = game.moves({ square: square, verbose: true });
    if (moves.length === 0) return;
    moves.forEach(move => { $(`#myBoard .square-${move.to}`).addClass('highlight-legal'); });
}

function handleSquareClick(square) {
    if (game.game_over() || game.turn() === 'b') return; 
    let piece = game.get(square);

    if (piece && piece.color === 'w') {
        selectedSquare = square;
        showLegalMoves(square);
        return;
    }

    if (selectedSquare) {
        let move = game.move({ from: selectedSquare, to: square, promotion: 'q' });
        if (move === null) { removeHighlights(); selectedSquare = null; return; }
        board.position(game.fen());
        removeHighlights();
        selectedSquare = null;
        updateStatus();
        window.setTimeout(makeEngineMove, 350);
    }
}

function onDragStart (source, piece) {
    if (game.game_over() || piece.search(/^b/) !== -1) return false;
    showLegalMoves(source);
}

function onDrop (source, target) {
    let move = game.move({ from: source, to: target, promotion: 'q' });
    if (move === null) { removeHighlights(); return 'snapback'; }
    removeHighlights();
    updateStatus();
    window.setTimeout(makeEngineMove, 350);
}

function onSnapEnd () { board.position(game.fen()); }

function makeEngineMove() {
    if (game.game_over()) return;
    $status.html('🤖 Stockfish is calculating optimal line...');
    
    $.ajax({
        url: 'https://chess-api.com/v1',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ fen: game.fen(), depth: parseInt($difficulty.val()) }),
        success: function(response) {
            if(response && response.from && response.to) {
                game.move({ from: response.from, to: response.to, promotion: response.promotion || 'q' });
                board.position(game.fen());
                updateStatus();
            } else { makeRandomFallbackMove(); }
        },
        error: function() { makeRandomFallbackMove(); }
    });
}

function makeRandomFallbackMove() {
    const moves = game.moves({ verbose: true });
    if (moves.length === 0) return;
    game.move(moves[Math.floor(Math.random() * moves.length)]);
    board.position(game.fen());
    updateStatus();
}

function updateStatus () {
    let statusText = '';
    let isEngineTurn = game.turn() === 'b';
    if (game.in_checkmate()) {
        statusText = `<b>Game Over!</b> ${isEngineTurn ? 'You Win! 🎉' : 'Stockfish Wins. 🤖'} (Checkmate)`;
    } else if (game.in_draw()) {
        statusText = '<b>Game Over.</b> Match concluded in a Draw 🤝';
    } else {
        statusText = isEngineTurn ? '🤖 Stockfish calculation active...' : 'Your Turn (White). Click or drag a piece.';
        if (game.in_check()) statusText += ' <br><span style="color: #ff4a6b; font-weight: bold;">⚠️ In Check!</span>';
    }
    $status.html(statusText);
}

board = Chessboard('myBoard', {
    draggable: true,
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd,
    pieceTheme: 'https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png'
});
updateStatus();

$('#myBoard').on('click', '.square-55d63', function() { handleSquareClick($(this).attr('data-square')); });

$('#undoBtn').on('click', function() {
    if (game.history().length >= 2) {
        game.undo(); game.undo();
        board.position(game.fen());
        removeHighlights(); selectedSquare = null; updateStatus();
    }
});

$('#restartBtn').on('click', function() {
    game.reset(); board.start(); removeHighlights(); selectedSquare = null; updateStatus();
});