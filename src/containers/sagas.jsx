import { call, put, takeLatest } from 'redux-saga/effects'
import '../containers/actions';

import {
  FETCH_IMAGE_ASYNC,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_ERROR,
} from '../containers/constants';

function fetchLinksFromServer(){
    //Generate a random number between 1 to 362802
    var randomNumber = Math.floor(Math.random() * 362802) + 1;  
    let jsonResponse = fetch("https://api.harvardartmuseums.org/Image?size=1&page="+ randomNumber + "&apikey=6802de50-0503-11e9-8fc2-7765c49b991f").then(response => response.json());
    return jsonResponse;
}

function* fetchImages(action) {
   try {
      const links = yield call(fetchLinksFromServer);
      const imageSource = links.records[0].baseimageurl;
      yield put({type: FETCH_IMAGE_SUCCESS, imageSource});
   } catch (e) {
      yield put({type: FETCH_IMAGE_ERROR, imageSource:''});
     }
}

function* imageSaga() {
  yield takeLatest(FETCH_IMAGE_ASYNC, fetchImages);
}

export default imageSaga;