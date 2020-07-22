import React, { Component } from 'react'
import PhotographerList from '../photographers/PhotographerList'
import { connect } from 'react-redux'


class DisplayPhotographers extends Component {
  render() {
    
    // console.log(this.props);
    const { photographers } = this.props;
    
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <PhotographerList photographers={photographers} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    photographers: state.photographer.photographers
  }
}

export default connect(mapStateToProps)(DisplayPhotographers)