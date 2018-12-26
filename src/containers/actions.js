export function fetchImageAsync(){
    return {type: 'IMAGE_FETCH_REQUESTED'}
}
export function fetchImageSuccess(imageSource){
    return {type: "UPDATE_IMAGE_URL_SUCCESS", imageSource}
}
export function fetchImageError(){
    return {type: "UPDATE_IMAGE_URL_ERROR", imageSource : ''}
}