import { useState, useEffect, useRef } from "react";

function useWordGame(defaultTime = 10) {
    const [text, setText] = useState("")
    const [time, setTime] = useState(defaultTime)
    const [isGameStart, setIsGameStart] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const inputElem = useRef(null)

    function handleChange(event) {
        const { value } = event.target
        setText(value)
    }

    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }

    function startGame() {
        setIsGameStart(true)
        setTime(defaultTime)
        setText("")
        inputElem.current.disabled = false
        inputElem.current.focus()
    }

    function endGame() {
        setIsGameStart(false)
        setWordCount(calculateWordCount(text))
    }

    useEffect(() => {
        if (isGameStart && time > 0) {
            setTimeout(() => {
                setTime(prevTime => prevTime - 1)
            }, 1000)
        }
        else if (time === 0) {
            endGame()
        }
    }, [time, isGameStart])

    return { text, wordCount, handleChange, inputElem, startGame, isGameStart, time }
}


export default useWordGame


