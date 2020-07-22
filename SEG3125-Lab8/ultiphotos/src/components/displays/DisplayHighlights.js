import React, { Component } from 'react'
import PhotoCarousel from '../carousel/PhotoCarousel'


class DisplayHighlights extends Component {
    render(){
        return (
            <div className="container">
                <h1>Hello This is the highlights page</h1>
                <div>
                    <PhotoCarousel/>
                </div>
            </div>

        )
    }
}


export default DisplayHighlights
