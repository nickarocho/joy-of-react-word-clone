import React from "react";

function Guesses({ guesses = [] }) {
  console.log({ guesses });
  return (
    <div className="guess-results">
      {guesses?.length > 0 &&
        guesses.map((guess, index) => <p key={index}>{guess}</p>)}
    </div>
  );
}

export default Guesses;
