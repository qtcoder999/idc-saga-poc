const initialState = 
{
    imageSource : ''
}

const imageReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case 'UPDATE_IMAGE_URL': return Object.assign({}, newState, {imageSource: action.imageSource})
        default : return newState;
    }

}

export default imageReducer;