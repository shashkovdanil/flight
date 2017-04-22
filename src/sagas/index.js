import 'babel-polyfill';
import { takeLatest } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import * as flights from './FlightsSaga';

export default function* rootSaga() {
  yield [
    takeLatest(types.REQUEST_FLIGHTS, flights.fetchFlights),
    takeLatest(types.ADD_FLIGHT, flights.addFlight),
    takeLatest(types.SAVE_EDITED_FLIGHT, flights.updateFlight),
    takeLatest(types.DELETE_FLIGHT, flights.deleteFlight),
    takeLatest(types.FILTER_BY_CITY, flights.filterByCity),
    takeLatest(types.FILTER_BY_STATUS, flights.filterByStatus)
  ];
}
