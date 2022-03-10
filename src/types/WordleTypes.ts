export type Wordle = {
	solution: string,
	guesses: string[],
	currentGuessIndex: number,
	guessedLetters: {
		miss: string[],
		found: string[],
		hint: string[],
	}
}
