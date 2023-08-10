import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";
import Banner from "../Banner";

function GuessResults({ guesses = [], answer = "", isGameOver, isWin }) {
  return isGameOver || isWin ? (
    <Banner isWin={isWin} answer={answer} guessCount={guesses.length} />
  ) : (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess key={num} value={guesses[num]} answer={answer} />;
      })}
    </div>
  );
}

export default GuessResults;
