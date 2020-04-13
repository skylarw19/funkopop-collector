import React, { Component } from 'react';
import Funkopop from '../../components/Funkopop/Funkopop';

const FunkoCollection = (props) => {
    console.log(props.funkopops)
    return (  
        <>
        <h1>Funko Collection</h1>
        //conditional rendering
        {props.funkopops ?
        <>
            {props.funkopops.map((funkopop)=> 
                <Funkopop
                    key={funkopop._id}
                    funkopop={funkopop}
                />)}
        </>
        :
        <p>No funko pops in collection</p> 
        }
        </>
    );
}
 
export default FunkoCollection;