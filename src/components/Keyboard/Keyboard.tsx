import React from 'react';
import { KEYS } from './keyboard'
import { KeyboardProps } from '../../types'
import styles from './Keyboard.module.css'

const Keyboard = ({
                      activeLetters,
                      inactiveLetters,
                      addGuessedLetter,
                      disabled = false,
                  }: KeyboardProps) => {
    return (
        <div className={styles.keyboardContainer}>
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <button
                        onClick={() => addGuessedLetter(key)}
                        className={`${styles.btn} ${isActive ? styles.active : ""} ${
                            isInactive ? styles.inactive : ""
                        }`}
                        disabled={isInactive || isActive || disabled}
                        key={key}
                    >
                        { key }
                    </button>
                )
            })}
        </div>
    );
};

export default Keyboard;
