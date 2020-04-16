import React from 'react';
import './Funkopop.css'
import {Link} from 'react-router-dom';

const Funkopop = (props) => {
  {if(props.funkopop.user === props.user._id) 
    return (
      <div className="funkopop">
        <h3>Name: {props.funkopop.name}</h3>
        <p>Category: {props.funkopop.category}</p>
        <p>Item No: {props.funkopop.itemNo}</p>
        <p>Exclusivity: {props.funkopop.exclusivity}</p>
        <p>owner id: {props.funkopop.user} </p>
        <p>login id: {props.user._id} </p>
        <Link to={{
            pathname: "/edit",
            state: props.funkopop
        }}>  
        UPDATE</Link>
        <button
          onClick={()=> props.handleDeleteFunko(props.funkopop._id)}
        >DELETE</button>
      </div>
    )
  else return (<> </>)
  }
}
 
export default Funkopop;
