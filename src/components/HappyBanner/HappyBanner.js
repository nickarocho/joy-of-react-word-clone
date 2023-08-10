import React from "react";
import Banner from "../Banner";

function HappyBanner({ guessCount }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guessCount} guesses</strong>.
      </p>
    </Banner>
  );
}

export default HappyBanner;
