import { takeLatest } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import { fetchFlights } from './FlightsSaga';

export default function* rootSaga() {
  yield takeLatest(types.REQUEST_FLIGHTS, fetchFlights);
}
