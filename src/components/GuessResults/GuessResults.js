import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessResults({ guesses = [] }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((guess, index) => {
        console.log({ guess });
        return <Guess key={index} guess={guesses[index]} />;
      })}
    </div>
  );
}

export default GuessResults;
