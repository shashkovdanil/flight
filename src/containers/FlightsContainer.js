import { connect } from 'react-redux';
import * as actions from '../actions';
import Flights from '../components/Flights';

const mapStateToProps = state => ({
  flights: state.flights,
  qty: state.flights.length
});

const mapDispatchToProps = dispatch => ({
  requestFlights: destination => dispatch(actions.requestFlights(destination)),
  addFlight: () => dispatch(actions.addFlight()),
  showEditForm: id => dispatch(actions.showEditForm(id)),
  hideEditForm: id => dispatch(actions.hideEditForm(id)),
  editFlight: (id, field, value) => dispatch(actions.editFlight(id, field, value)),
  saveEditedFlight: (id, flight) => dispatch(actions.saveEditedFligth(id, flight)),
  deleteFlight: id => dispatch(actions.deleteFlight(id))
});

const FlightsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Flights);

export default FlightsContainer;
