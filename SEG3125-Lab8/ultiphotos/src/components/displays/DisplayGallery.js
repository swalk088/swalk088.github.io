import React, { Component} from "react";
import GallerySummary from "../gallery/GallerySummary";



class DisplayGallery extends Component {
    
    render(){
      
        return (
            <div className="container">
                <h1>Hello This is the Gallery page</h1>
                <GallerySummary/>
            </div>
        );
    }
}


export default DisplayGallery

