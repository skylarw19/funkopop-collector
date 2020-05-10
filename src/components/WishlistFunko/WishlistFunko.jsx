import React from 'react';
import './WishlistFunko.css'
import {Link} from 'react-router-dom';

const Funkopop = (props) => {
  {if(props.wishlistFunko.user === props.user._id) 
    return (
      <div className="panel panel-default">
        <h3 className="panel-title">{props.wishlistFunko.name} ---No. {props.wishlistFunko.itemNo}</h3>
        <div className="panel-body">
          <p>Category: {props.wishlistFunko.category}</p>
          <p>Exclusivity: {props.wishlistFunko.exclusivity}</p>
          <Link 
            className="btn btn-primary btn-sm"
            to={{
              pathname: "/editWishlistFunko",
              state: props.wishlistFunko
          }}>  
          UPDATE</Link>
          <button
            className="btn btn-danger btn-sm"
            onClick={()=> props.handleDeleteWishlistFunko(props.wishlistFunko._id)}
          >DELETE</button>
        </div>
      </div>
    )
  else return (<> </>)
  }
}
 
export default Funkopop;