import React from 'react';
import { HangmanWordProps } from '../../types';
import './HangmanWord.css'

const HangmanWord = ({
    guessedLetters,
    wordToGuess,
    reveal = false,
    }: HangmanWordProps) => {
    return (
        <div className='containerDisplay'>
            {wordToGuess.split('').map((letter, index) => (
                <span
                    key={index}
                    className='spanElement'
                >
                   <span
                       style={{
                           visibility:
                               guessedLetters.includes(letter) || reveal
                                   ? "visible"
                                   : "hidden",
                           color:
                               !guessedLetters.includes(letter) && reveal ? "red" : "black",
                       }}
                   >
                        { letter }
                    </span>
                </span>
            ))}
        </div>
    );
};

export default HangmanWord;
