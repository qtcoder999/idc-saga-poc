import React, { Component } from 'react';
import './banner.css';
import {connect} from 'react-redux';



class Banner extends Component {

    clickHandler = () => {
        //hit async call
        this.props.dispatch({type: 'IMAGE_FETCH_REQUESTED'});
    }
    render() {
        //console.log("Properties: ",this.props);
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