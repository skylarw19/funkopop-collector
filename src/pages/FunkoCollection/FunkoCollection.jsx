import React, { Component } from 'react';
import Funkopop from '../../components/Funkopop/Funkopop';
import { Route, Link } from 'react-router-dom';
import './FunkoCollection.css'

const FunkoCollection = (props) => {
    console.log(props.funkopops)
    return (  
        <>
        <Link className="btn btn-info addfunkobtn" exact to="/add">Add FunkoPop</Link>
        <br/>
        {/* conditional rendering */}
        {props.funkopops ?
        <>
            {props.funkopops.map((funkopop)=> 

                <Funkopop
                    key={funkopop._id}
                    funkopop={funkopop}
                    user={props.user}
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