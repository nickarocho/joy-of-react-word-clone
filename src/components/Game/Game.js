import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);

  function checkWin(guess, guessCount) {
    if (guess === answer) {
      setIsWin(true);
      setIsGameOver(true);
    }

    if (guessCount === NUM_OF_GUESSES_ALLOWED) {
      setIsGameOver(true);
    }
  }

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess];
    checkWin(guess, nextGuesses.length);
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
        isGameOver={isGameOver}
        isWin={isWin}
      />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        isGameOver={isGameOver}
      />
      {isGameOver &&
        (isWin ? (
          <HappyBanner guessCount={guesses.length} />
        ) : (
          <SadBanner answer={answer} />
        ))}
    </>
  );
}

export default Game;
