import { call, put, takeEvery } from "redux-saga/effects";
import { getDogsSuccess } from "./dogState";

function* workGetDogsFetch() {
  const dogs = yield call(() => fetch("https://api.thedogapi.com/v1/breeds"));
  const formattedDogs = yield dogs.json();
  const formattedDogsShort = formattedDogs.slice(0, 10);
  yield put(getDogsSuccess(formattedDogsShort));
}

function* dogSaga() {
  yield takeEvery("dogs/getDogsFetch", workGetDogsFetch);
}

export default dogSaga;
