import { call, put } from 'redux-saga/effects';
import API from '../api/api';
import * as actions from '../actions';

export function* fetchFlights() {
  const flights = yield call(API.getFlights);
  if (flights.ok) {
    yield put(actions.flightsFetchSucceeded(flights.data));
  }
}
