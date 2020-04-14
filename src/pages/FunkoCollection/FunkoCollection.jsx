import React, { Component } from 'react';
import Funkopop from '../../components/Funkopop/Funkopop';
import { Route, Link } from 'react-router-dom';

const FunkoCollection = (props) => {
    console.log(props.funkopops)
    return (  
        <>
        <h1>Funko Collection</h1>
        <Link exact to="/add">Add FunkoPop</Link>

        {/* conditional rendering */}
        {props.funkopops ?
        <>
            {props.funkopops.map((funkopop)=> 
                <Funkopop
                    key={funkopop._id}
                    funkopop={funkopop}
                    handleDeleteFunko={props.handleDeleteFunko}
                />)}
        </>
        :
        <p>No funko pops in collection</p> 
        }
        
        </>
    );
}
 
export default FunkoCollection;