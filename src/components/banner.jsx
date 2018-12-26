import React, { Component } from 'react';
import './banner.css';
import './loader.css';
import {connect} from 'react-redux';

class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {imageLoaded : false, style : "hidden"};
    }
    componentWillMount = () => {
        this.props.dispatch({type: 'UPDATE_IMAGE_URL_ASYNC'});
    }
    imageLoadHandler = () =>{
        this.setState({imageLoaded : true,style : "visible"});
    }
    clickHandler = () => {
        //hit async call
        this.setState({imageLoaded : false,style : "hidden"});
        this.props.dispatch({type: 'UPDATE_IMAGE_URL_ASYNC'});
    }
    render() {
        return (
            <div className="">
                <div className="banner">
                            <img className={this.state.style} alt="Harvard Art Museum" src={this.props.imageSource} onLoad={this.imageLoadHandler} />
                            <div className="container" onClick={this.clickHandler}><button className="btn draw-border">Change Image</button></div>
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


const mapStateToProps = (state) => {
    return {
         ...state.imageReducer
    };
  }
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Banner);