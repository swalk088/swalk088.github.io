import React, { Component } from 'react'
import AccountDetails from '../myaccount/AccountDetails'
import { connect } from 'react-redux'
import {compose} from 'redux'


class DisplayAccount extends Component {

    render(){
        const { photographers,auth } = this.props;
        var user

        photographers.forEach(element => {
            if(element.id==auth.uid){
                user=element;
                console.log(element)
            }
        });
        return (
            <div className="container">
                <AccountDetails user={user}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      photographers: state.photographer.photographers,
      auth: state.firebase.auth,

    }
  }

export default connect(mapStateToProps)(DisplayAccount)
