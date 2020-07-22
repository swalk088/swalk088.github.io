import React from 'react'
import {NavLink} from 'react-router-dom'


const SignedOutLinks = () => {
    return (
        <ul className="right">
        <li><NavLink to='/displayHighlights'>Highlights</NavLink></li>
        <li><NavLink to='/displayGallery'>Gallery</NavLink></li>
        <li><NavLink to='/displayTournaments'>Tournaments</NavLink></li>
        <li><NavLink to='/displayPhotographers'>Photographers</NavLink></li>
        <li><NavLink to='/signup'>Sign Up</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks