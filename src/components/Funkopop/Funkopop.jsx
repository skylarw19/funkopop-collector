import React from 'react';

const Funkopop = (props) => {
  return (
    <> 
      <h3>Name: {props.funkopop.name}</h3>
      <p>Category: {props.funkopop.category}</p>
      <p>Item No: {props.funkopop.itemNo}</p>
      <p>Exclusivity: {props.funkopop.exclusivity}</p>
    </>
  );
}
 
export default Funkopop;
