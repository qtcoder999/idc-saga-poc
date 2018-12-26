import { call, put, takeLatest } from 'redux-saga/effects'

function fetchLinksFromServer(){
    //Generate a random number between 1 to 362802
    var randomNumber = Math.floor(Math.random() * 362802) + 1;  
    let jsonResponse = fetch("https://api.harvardartmuseums.org/Image?size=1&page="+ randomNumber + "&apikey=6802de50-0503-11e9-8fc2-7765c49b991f").then(response => response.json() );
    // jsonResponse = jsonResponse.json();
    //console.log(jsonResponse.records[0].baseimageurl);
    return jsonResponse;
}

function* fetchImages(action) {
   try {
      const links = yield call(fetchLinksFromServer);
      const imageSource = links.records[0].baseimageurl;
    //   console.log("Links got from the API", links);
      yield put({type: "UPDATE_IMAGE_URL", imageSource});
   } catch (e) {
        console.log(e);
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
     }
}

function* mySaga() {
  yield takeLatest("IMAGE_FETCH_REQUESTED", fetchImages);
}

export default mySaga;