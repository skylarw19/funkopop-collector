import React from 'react';
import './Funkopop.css'
import {Link} from 'react-router-dom';

const Funkopop = (props) => {
  {if(props.funkopop.user === props.user._id) 
    return (
      <div className="panel panel-default">
        <h3 className="panel-title">{props.funkopop.name} ---No. {props.funkopop.itemNo}</h3>
        <div className="panel-body">
          <p>Category: {props.funkopop.category}</p>
          <p>Exclusivity: {props.funkopop.exclusivity}</p>
          <Link 
            className="btn btn-primary btn-sm"
            to={{
              pathname: "/edit",
              state: props.funkopop
          }}>  
          UPDATE</Link>
          <button
            className="btn btn-danger btn-sm"
            onClick={()=> props.handleDeleteFunko(props.funkopop._id)}
          >DELETE</button>
        </div>
      </div>
    )
  else return (<> </>)
  }
}
 
export default Funkopop;
