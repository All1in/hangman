import { useState } from 'react'
import words from './words.json'
import HangmanDrawing from './components/HangmanDrawing/HangmanDrawing'
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
    </div>
  )
}

export default App
