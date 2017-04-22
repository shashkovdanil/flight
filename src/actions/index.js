import * as types from '../constants/ActionTypes';

export const requestFlights = destination => ({
  type: types.REQUEST_FLIGHTS,
  destination
});

export const flightsFetchSucceeded = flights => ({
  type: types.FLIGHTS_FETCH_SUCCEEDED,
  flights
});

export const addFlight = () => ({
  type: types.ADD_FLIGHT
});

export const addFlightSucceeded = id => ({
  type: types.ADD_FLIGHT_SUCCEEDED,
  id
});

export const showEditForm = id => ({
  type: types.SHOW_EDIT_FORM,
  id
});

export const hideEditForm = id => ({
  type: types.HIDE_EDIT_FORM,
  id
});

export const editFlight = (id, field, value) => ({
  type: types.EDIT_FLIGHT,
  id,
  field,
  value
});

export const saveEditedFligth = (id, flight) => ({
  type: types.SAVE_EDITED_FLIGHT,
  id,
  flight
});

export const deleteFlight = id => ({
  type: types.DELETE_FLIGHT,
  id
});

export const filterByCity = (query, destination) => ({
  type: types.FILTER_BY_CITY,
  query,
  destination
});

export const filterByStatus = status => ({
  type: types.FILTER_BY_STATUS,
  status
});
