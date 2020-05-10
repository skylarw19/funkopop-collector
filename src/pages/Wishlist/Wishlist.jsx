import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WishlistFunko from '../../components/WishlistFunko/WishlistFunko';
import './Wishlist.css'

const Wishlist = (props) => {
    return (  
        <>
        <Link className="btn btn-info addfunkobtn" exact to="/addToWishlist">Add FunkoPop to Wishlist</Link>
        <br/>
        {/* conditional rendering */}
        {props.wishlistFunkos ?
        <>
            {props.wishlistFunkos.map((wishlistFunko)=> 
                <WishlistFunko
                    key={wishlistFunko._id}
                    wishlistFunko={wishlistFunko}
                    user={props.user}
                    handleDeleteWishlistFunko={props.handleDeleteWishlistFunko}
                    handleMove={props.handleMove}
                />
            )}
        </>
        :
        <p>No funko pops in your wishlist</p> 
        }
        </>
    );
}
 
export default Wishlist;