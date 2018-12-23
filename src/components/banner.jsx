import React, { Component } from 'react';
import './banner.css';
import {connect} from 'react-redux';



class Banner extends Component {

    clickHandler = () => {
        this.props.dispatch({type: 'UPDATE_IMAGE_URL', imageSource:'https://nrs.harvard.edu/urn-3:HUAM:77665_dynmc'});
        //hit async call
    }
    render() {
        console.log("Properties: ",this.props);
        return (
        <div className="banner">
            <img alt="Harvard Art Museum" src={this.props.imageSource}/>
            <button onClick={this.clickHandler}>Change Image</button>
        </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
         ...state
    };
  }
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Banner);