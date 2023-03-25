import React from 'react';
import './HangmanWord.css'

const HangmanWord = () => {
    const word = 'test'
    const guessedLetters = [
        'e'
    ]
    return (
        <div className='containerDisplay'>
            {word.split('').map((letter, index) => (
                <span
                    key={index}
                    className='spanElement'
                >
                    <span style={{
                        visibility: guessedLetters.includes(letter)
                            ?
                            'visible'
                            :
                            'hidden'
                    }}>
                        { letter }
                    </span>
                </span>
            ))}
        </div>
    );
};

export default HangmanWord;
