import { connect } from 'react-redux';
import * as actions from '../actions';
import Flights from '../components/Flights';

const mapStateToProps = state => ({
  flights: state.flights,
  qty: state.flights.length
});

const mapDispatchToProps = dispatch => ({
  requestFlights: () => dispatch(actions.requestFlights()),
  showEditForm: id => dispatch(actions.showEditForm(id)),
  hideEditForm: id => dispatch(actions.hideEditForm(id))
});

const FlightsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Flights);

export default FlightsContainer;
