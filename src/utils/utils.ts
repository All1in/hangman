import words from "../words.json";

export function getWord() {
    return words[Math.floor(Math.random() * words.length)]
}
