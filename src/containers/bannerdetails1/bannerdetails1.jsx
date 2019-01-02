import React from 'react';
import {connect} from 'react-redux';
import {fetchImageAsync} from './actions'
import Banner from '../../components/banner/banner'
import { getImageState} from "./selectors";

const bannerdetails = (props) =>{
        return (
            <Banner {...props}/>
        )
}

// const imageListing = createSelector();

const mapStateToProps = (state) => {
    return {
        imageSource : getImageState(state.get('imageCounterReducer'))
        // ...state.get('imageCounterReducer').toJS()
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        asyncFetch () {
          dispatch(fetchImageAsync())
        }
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(bannerdetails);