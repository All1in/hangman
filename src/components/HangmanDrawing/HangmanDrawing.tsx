import React from 'react';
import { HangmanDrawingProps } from '../../types';
import { BODY_PARTS } from '../../bodyParts'
import './HangmanDrawing.css'

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
    return (
        <div className='hangmanContainer'>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div className='oneMore'></div>
            <div className='anotherOne'></div>
            <div className='another'></div>
            <div className='anotherContainer'></div>
        </div>
    );
};

export default HangmanDrawing;
