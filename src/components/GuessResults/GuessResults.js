import React from "react";

function GuessResults({ guesses = [] }) {
  console.log({ guesses });
  return (
    <div className="guess-results">
      {guesses?.length > 0 &&
        guesses.map((guess, index) => <p key={index}>{guess}</p>)}
    </div>
  );
}

export default GuessResults;
