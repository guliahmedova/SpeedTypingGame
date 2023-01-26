import useWordGame from "./hooks/useWordGame";

function App() {

  const { text, wordCount, handleChange, inputElem, startGame, isGameStart, time } = useWordGame(10)

  return (
    <div className="App">
      <h1>Let's see how fast you write..</h1>
      <textarea ref={inputElem} onChange={handleChange} value={text} disabled={!isGameStart} />
      <h4>Time: {time}</h4>
      <button onClick={startGame} disabled={isGameStart}>Start Game</button>
      <h4>Word count: {wordCount}</h4>
    </div>
  );
}

export default App;
