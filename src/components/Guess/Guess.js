import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter = "", status = null }) {
  return <span className={`cell ${status && status}`}>{letter}</span>;
}

function Guess({ value = "", answer = "" }) {
  const checkedGuess = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={checkedGuess && checkedGuess[num].letter}
          status={checkedGuess && checkedGuess[num].status}
        />
      ))}
    </p>
  );
}

export default Guess;
