import Immutable from 'seamless-immutable';
import moment from 'moment';
import * as types from '../constants/ActionTypes';

const initialState = Immutable([]);

const convert = (arr, prop) => (
  arr.map(i => i[prop] = moment(i[prop]).format('DD-MM-YYYY, HH:mm'))
);

const toggleEditForm = (state, visible, id) => (
  state.map(flight =>
    flight.id === id
    ? Immutable.merge(flight, { editable: visible })
    : flight
  )
);

const flights = (state = initialState, action) => {
  switch (action.type) {
    case types.FLIGHTS_FETCH_SUCCEEDED:
      convert(action.flights, 'time');
      convert(action.flights, 'exp');
      action.flights.map(i => i.editable = false);
      return Immutable([...state, ...action.flights]);
    case types.SHOW_EDIT_FORM:
      return toggleEditForm(state, true, action.id);
    case types.HIDE_EDIT_FORM:
      return toggleEditForm(state, false, action.id);
    default:
      return state;
  }
};

export default flights;
