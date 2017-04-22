import 'babel-polyfill';
import { call, put } from 'redux-saga/effects';
import API from '../api/api';
import * as actions from '../actions';

export function* fetchFlights() {
  const flights = yield call(API.getFlights);
  if (flights.ok) {
    yield put(actions.flightsFetchSucceeded(flights.data));
  }
}

export function* addFlight() {
  const newFlight = yield call(API.addFlight);
  if (newFlight.ok) {
    const id = newFlight.data.id;
    yield put(actions.addFlightSucceeded(id));
    yield put(actions.showEditForm(id));
  }
}

export function* updateFlight(action) {
  const updated = yield call(API.updateFlight, action.id, action.flight);
  if (updated.ok) {
    yield put(actions.hideEditForm(action.id));
  }
}

export function* deleteFlight(action) {
  yield call(API.deleteFlight, action.id);
}

export function* filterByCity(action) {
  const filtered = yield call(API.filterByCity, action.query, action.destination);
  if (filtered.ok) {
    yield put(actions.flightsFetchSucceeded(filtered.data));
  }
}

export function* filterByStatus(action) {
  const filtered = yield call(API.filterByStatus, action.status);
  if (filtered.ok) {
    yield put(actions.flightsFetchSucceeded(filtered.data));
  }
}
