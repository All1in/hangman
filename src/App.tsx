import { useState } from 'react'
import HangmanDrawing from './components/HangmanDrawing/HangmanDrawing'
import HangmanWord from "./components/HangmanWord/HangmanWord";
import words from './words.json'
import './styles/App.css'

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
      return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return (
    <div className='App'>
        <div className='container'>
            Lose
            Win
        </div>
        <HangmanDrawing />
        <HangmanWord />
    </div>
  )
}

export default App
