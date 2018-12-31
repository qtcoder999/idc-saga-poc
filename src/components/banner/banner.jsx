import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './banner.min.css';

export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {imageLoaded : false, style : "hidden"};
    }
    componentWillMount = () => {
        this.props.asyncFetch();
        // this.props.dispatch({type: 'UPDATE_IMAGE_URL_ASYNC'});
    }
    imageLoadHandler = () =>{
        this.setState({imageLoaded : true,style : "visible"});
    }
    clickHandler = () => {
        this.setState({imageLoaded : false,style : "hidden"});
        this.props.asyncFetch();
        // this.props.dispatch({type: 'UPDATE_IMAGE_URL_ASYNC'});
    }
    render() {
        console.log("Image Props", this.props);
        return (
            <div className="">
                <div className="banner">
                            <img className={this.state.style} alt="Harvard Art Museum" src={this.props.imageSource} onLoad={this.imageLoadHandler} />
                            <div className="mt-2" onClick={this.clickHandler}><button className="btn-1 draw-border">Change Image</button></div>
                </div>
                {
                    this.state.imageLoaded ?
                    null
                    :
                    <div className="hollowLoader">
                        <div className="largeBox"></div>
                        <div className="smallBox"></div>
                    </div>
                }
            </div>
        );
    }
}