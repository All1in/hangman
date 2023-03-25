export interface HangmanDrawingProps {
    numberOfGuesses?: number
}

export interface KeyboardProps {
    disabled?: boolean
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

export interface  HangmanWordProps {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}
