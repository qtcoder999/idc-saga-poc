import {
    FETCH_IMAGE_ASYNC,
    FETCH_IMAGE_SUCCESS,
    FETCH_IMAGE_ERROR,
} from './Constants'

export function fetchImageSuccess(imageSource){
    return {type: FETCH_IMAGE_SUCCESS, imageSource}
}
export function fetchImageAsync(){
    return {type: FETCH_IMAGE_ASYNC}
}
export function fetchImageError(){
    return {type: FETCH_IMAGE_ERROR, imageSource : ''}
}