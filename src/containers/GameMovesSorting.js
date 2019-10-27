import Sorting from '../components/Sorting';
import {connect} from 'react-redux';
import {sortAscend, isAscending} from '../actions/actions';

const mapStateToProps = state => ({
  isAscending: state.isAscending
});

const mapDispatchToProps = dispatch => ({
    onClick: () => {
      dispatch(sortAscend());
      dispatch(isAscending());
    }
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sorting);