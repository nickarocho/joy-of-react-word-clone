import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value = "", answer = "" }) {
  const checkedGuess = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={`cell ${checkedGuess && checkedGuess[num].status}`}
        >
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
