import React from 'react';
import './Funkopop.css'

const Funkopop = (props) => {
  return (
    <div className="funkopop">
      <h3>Name: {props.funkopop.name}</h3>
      <p>Category: {props.funkopop.category}</p>
      <p>Item No: {props.funkopop.itemNo}</p>
      <p>Exclusivity: {props.funkopop.exclusivity}</p>
      <button
      
      >DELETE</button>
    </div>
  );
}
 
export default Funkopop;
