import React from 'react';
import {connect} from 'react-redux';
import {fetchImageAsync} from './actions'
import Banner from '../../components/Banner/Banner'
import {createSelector} from 'reselect'

const BannerDetails = (props) =>{
        return (
            <Banner {...this.props}/>
        )
}

// const imageListing = createSelector();

const mapStateToProps = (state) => {
    return {
        ...state.get('imageCounterReducer').toJS()
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