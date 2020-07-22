import React, { Component } from 'react'



const MyAccount = ({user}) => {
    
    console.log(user);
    return (
        <div>
        {/* <NavLink to={'/myaccount/'+auth.uid} key={auth.uid} className='btn btn-floating pink lighten-1'>SW</NavLink> */}
            <h1>Hello This is the Your account page {user.id} </h1>

        </div>
    );
    
}

  


export default MyAccount
