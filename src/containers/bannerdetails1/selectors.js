import {createSelector} from 'reselect'

const getstate = (state) => state.get('imageSource');

 export const getImageState = createSelector(
    [getstate], 
    (source) => source
)