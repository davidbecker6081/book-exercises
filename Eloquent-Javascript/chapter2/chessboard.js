const createChessboard = (height, width) => {
	let chessboard = ''

	for (let i = 1; i <= height; i++) {
		for (let j = 1; j <= width; j++) {
			if ((j + i) % 2 === 0) {
				chessboard += '#'
			} else {
				chessboard += ' '
			}
		}
		chessboard += '\n'
	}

	console.log(chessboard)
}

createChessboard(15, 15)