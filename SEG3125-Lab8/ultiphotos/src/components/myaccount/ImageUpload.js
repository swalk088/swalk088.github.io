import React, {Component} from 'react'


class ImageUpload extends Component{

    handleChange= (e) => {
        if(e.target.files[0]){
            const {image} =this.state;
            this.setState({image});
        }
    }

    render(){
        return(
            <div>
            <input type="file" onChange={this.handleChange}/>
            </div>
        )
    };
}

export default ImageUpload