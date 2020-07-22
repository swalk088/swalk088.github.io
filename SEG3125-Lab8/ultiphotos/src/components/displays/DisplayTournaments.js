import React, { Component } from 'react'
import PhotographerList from '../photographers/PhotographerList'
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'


class DisplayTournaments extends Component {
    render(){
        return (
            <div className="container">

                <h1>Hello This is the Tournaments page</h1>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     photographers: state.photographer.photographers
//   }
// }

export default DisplayTournaments
// compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     {collection:'photographers'}
//   ])
// )(DisplayPhotographers)