import React from "react";
import { useState } from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "./GuessInput";
import GuestResults from "../GuestResults/GuestResults";
import GameOverBanner from "../GameOverBanner/GameOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState("running");
  const [guesses, setGuesses] = useState([]);

  const handleSubmitGuess = (guess) => {
    const nextGuess = [...guesses, guess];
    setGuesses(nextGuess);

    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      {gameStatus}
      <GuestResults guesses={guesses} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus !== "running" && (
        <GameOverBanner
          answer={answer}
          numOfGuesses={guesses.length}
          gameStatus={gameStatus}
        />
      )}
    </>
  );
}

export default Game;
