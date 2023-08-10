import React from "react";

function Banner({ status = "happy", children }) {
  return <div className={`${status} banner`}>{children}</div>;
}

export default Banner;
