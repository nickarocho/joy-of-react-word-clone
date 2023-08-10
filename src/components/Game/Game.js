import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guesses from "../Guesses/Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ guess });
    const nextGuesses = [...guesses];
    nextGuesses.push(guess);
    console.log({ nextGuesses });
    setGuesses(nextGuesses);
    setGuess("");
  }

  return (
    <>
      <Guesses guesses={guesses} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default Game;
