import * as types from '../constants/ActionTypes';

export const requestFlights = () => ({
  type: types.REQUEST_FLIGHTS
});

export const flightsFetchSucceeded = flights => ({
  type: types.FLIGHTS_FETCH_SUCCEEDED,
  flights
});

export const addFlight = data => ({
  type: types.ADD_FLIGHT,
  data
});

export const showEditForm = id => ({
  type: types.SHOW_EDIT_FORM,
  id
});

export const hideEditForm = id => ({
  type: types.HIDE_EDIT_FORM,
  id
});

export const deleteFlight = id => ({
  type: types.DELETE_FLIGHT,
  id
});
