// import { call } from 'redux-saga/effects';
// import {takeLatest} from 'redux-saga';

// function fetchLinksFromServer(){
//     let jsonResponse = fetch("https://api.harvardartmuseums.org/Image?size=5&page=42&apikey=6802de50-0503-11e9-8fc2-7765c49b991f");
//     // jsonResponse = jsonResponse.json();
//     console.log(jsonResponse);
//     return jsonResponse.records[0].baseimageurl;
// }

// function* fetchLinks(action){
//     try{
//         const links = yield call(fetchLinksFromServer);
//     }
//     catch(e){
//         console.log("Error: ",e);
//     }
// }
// export function* defaultSaga(){
//     yield* takeLatest(fetchLinks);
// }

// export default defaultSaga;