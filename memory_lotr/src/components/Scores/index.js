import React from "react";
import "./style.css";

function Scores(props) {
  return (
    <div>
      <h2 className="score">Score: {props.children}</h2>;
      <h2 className="topscore">Top Score: {props.children}</h2>;
    </div>  
  );
}

export default Scores;
