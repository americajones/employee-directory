import React from "react";

function Card(props) {

  return (
    <div>
  
  <img src={props.image}></img>
    <ul>
    <li>{props.name}</li>
    <li>{props.dob}</li>
    <li>{props.email}</li>
    <li>{props.phone}</li>
    </ul>

    
    </div>
  );
}

export default Card;
