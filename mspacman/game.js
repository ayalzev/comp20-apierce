function init(){

	var canvas = document.getElementById('game_canvas');
	var ctx = canvas.getContext('2d');
	
	//draw the board
	var board = new Image();
	board.src = 'pacman10-hp-sprite.png';

	ctx.drawImage(board, 322, 0, 463, 138, 0, 0, 463, 138);

	//draw Ms. Pacman to the Board
	//Ms. Pacman will be facing up
        mspacman = new Image();
        mspacman.src = 'pacman10-hp-sprite.png';
        ctx.drawImage(mspacman, 81, 44, 18, 18, 130, 118, 20, 20);

}
