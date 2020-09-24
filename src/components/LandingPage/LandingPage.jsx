import React from 'react';
import './LandingPage.css';

const LandingPage = (props) => {
    let landPg = props.user ?
    <></>
    :
    <div>
        <br/>
        <p>Welcome to FunkoPop Collector!
        <br></br>
        This is a full stack MERN application (MongoDB, Express.js, Node.js, React) 
        <br></br>
        that allows users to track their FunkoPop collection by creating, updating, and deleting funkopops.
        <br></br>
        Users also have the option to add items to their wishlist or move items from the wishlist to their current collection.
        <br></br>
        <br></br>
        The code for this project can be viewed on <a href="https://github.com/skylarw19/funkopop-collector">GitHub.</a>
        <br></br>
        Checkout the brain behind this on <a href="https://www.linkedin.com/in/skylar-wong/">LinkedIn!</a>
        <br></br>
        <br></br>
        Click Login or Sign Up to begin tracking your collection!
        </p>
    </div>

    return (  
        <>
        {landPg}
        </>
    );
}
 
export default LandingPage;