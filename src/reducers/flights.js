import Immutable from 'seamless-immutable';
import moment from 'moment';
import * as types from '../constants/ActionTypes';

const initialState = Immutable([]);

// helpers
const convert = (arr, prop) => (
  arr.map(i => (i[prop] = moment(i[prop]).format('DD-MM-YYYY, HH:mm')))
);

const toggleEditForm = (state, visible, id) => (
  Immutable(state.map(flight =>
    (
      flight.id === id
      ? Immutable.merge(flight, { editable: visible })
      : flight
    )
  ))
);

const editFlight = (state, id, field, value) => (
  Immutable(state.map(flight =>
    (
      flight.id === id
      ? Immutable.merge(flight, { [field]: value })
      : flight
    )
  ))
);

// reducer
const flights = (state = initialState, action) => {
  switch (action.type) {
    case types.FLIGHTS_FETCH_SUCCEEDED:
      convert(action.flights, 'time');
      convert(action.flights, 'exp');
      action.flights.map(i => (i.editable = false));
      return Immutable([...action.flights]);

    case types.SHOW_EDIT_FORM:
      return toggleEditForm(state, true, action.id);

    case types.HIDE_EDIT_FORM:
      return toggleEditForm(state, false, action.id);

    case types.EDIT_FLIGHT:
      return editFlight(state, action.id, action.field, action.value);

    case types.DELETE_FLIGHT:
      return Immutable(state.filter(flight => flight.id !== action.id));

    case types.ADD_FLIGHT_SUCCEEDED:
      return Immutable([
        ...state,
        {
          id: action.id,
          flight: '',
          from: '',
          to: '',
          aircraft: '',
          time: moment(Date.now()).format(),
          exp: moment(Date.now()).format(),
          status: 'ready for boarding',
          editable: false
        }
      ]);

    default:
      return Immutable(state);
  }
};

export default flights;
