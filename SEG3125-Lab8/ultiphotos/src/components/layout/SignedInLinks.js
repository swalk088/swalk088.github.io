import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


const SignedInLinks = (props) => {
  console.log(props)
  const { auth } = props;

    return (
        <div>
        <ul className="right">
        <li><NavLink to='/displayHighlights'>Highlights</NavLink></li>
        <li><NavLink to='/displayGallery'>Gallery</NavLink></li>
        <li><NavLink to='/displayTournaments'>Tournaments</NavLink></li>
        <li><NavLink to='/displayPhotographers'>Photographers</NavLink></li>
        <li><NavLink to='/displayAccount' className='btn btn-floating pink lighten-1'>SW</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        </ul>
        </div>
    )
}


const mapStateToProps = (state) => {
  console.log(state);
  return{
    auth: state.firebase.auth,

  }
}


const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)