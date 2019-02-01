import { call, put, takeLatest } from "redux-saga/effects";
import "./actions";
import { fetchLinksFromServer } from "./api";

import {
  FETCH_IMAGE_ASYNC,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_ERROR
} from "./constants";

function* fetchImages(action) {
  try {
    const links = yield call(fetchLinksFromServer);
    const imageSource = links.records[0].baseimageurl;
    yield put({ type: FETCH_IMAGE_SUCCESS, imageSource });
  } catch (e) {
    yield put({ type: FETCH_IMAGE_ERROR, imageSource: "" });
  }
}

function* imageSaga() {
  yield takeLatest(FETCH_IMAGE_ASYNC, fetchImages);
}

export default imageSaga;
