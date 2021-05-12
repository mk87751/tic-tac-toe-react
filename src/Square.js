import React, { useState } from "react";
import "./Square.css";
function Square(props) {
  return (
    <button className="square" onClick={props.onClickEvent}>
      {props.value}
    </button>
  );
}

export default Square;
