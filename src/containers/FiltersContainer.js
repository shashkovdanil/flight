import { connect } from 'react-redux';
import * as actions from '../actions';
import Filters from '../components/Filters';

const mapDispatchToProps = dispatch => ({
  filterByCity: (query, destination) => dispatch(actions.filterByCity(query, destination)),
  filterByStatus: status => dispatch(actions.filterByStatus(status))
});

const FiltersContainer = connect(
  null,
  mapDispatchToProps
)(Filters);

export default FiltersContainer;
