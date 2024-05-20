import { useState } from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess });
    handleSubmitGuess(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}
export default GuessInput;
