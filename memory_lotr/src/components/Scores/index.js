import React from "react";
import "./style.css";

function Scores(props) {
  return (
    <div>
      <h2 className="score">Score: {props.score}</h2>
      <h2 className="topScore">Top Score: {props.topScore}</h2>
    </div>  
  );
}

export default Scores;
