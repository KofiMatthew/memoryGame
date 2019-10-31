import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
      <img 
        value={props.id}
        alt={props.name} 
        src={props.image} 
        onClick={() => props.clicked(props.id)}
      />
      </div>
    </div>
  );
}

export default FriendCard;