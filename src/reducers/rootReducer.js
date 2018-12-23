const initialState = 
{
    imageSource : 'https://ids.lib.harvard.edu/ids/view/18788797'
}

const rootReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case 'UPDATE_IMAGE_URL': return Object.assign({}, newState, {imageSource: action.imageSource})
        default : return newState;
    }

}

export default rootReducer;