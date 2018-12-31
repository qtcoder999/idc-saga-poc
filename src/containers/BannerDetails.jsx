import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchImageAsync} from '../containers/actions'
import Banner from '../components/banner'

class BannerDetails extends React.Component{
    render(){
        return <Banner {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.get('imageReducer').toJS()
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        asyncFetch () {
          dispatch(fetchImageAsync())
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Banner);